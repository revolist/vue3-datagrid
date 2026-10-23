import {
  defineComponent, getCurrentInstance, h, onBeforeUnmount, shallowReactive, Teleport,
  type Component, type PropType, type VNode,
} from 'vue';
import type { ComponentTemplate } from '@revolist/revogrid';

interface Entry {
  readonly id: number;
  readonly host: HTMLElement;
  readonly component: Component;
  getProps(): Record<string, unknown>;
}

export interface VueTemplateOwner {
  /** Create once during setup; use this definition in any compatible product. */
  template<C>(component: Component, options?: {
    props?: (context: C) => Record<string, unknown>;
  }): ComponentTemplate<C>;
  /** Releases pending and mounted entries. Also runs automatically on owner unmount. */
  dispose(): void;
}
const OWNER_STATE = Symbol('VueTemplateOwner');
interface InternalVueTemplateOwner extends VueTemplateOwner {
  [OWNER_STATE]: { entries: Map<number, Entry>; outletAttached: boolean };
}

/** Call in setup, and render one RevoTemplateOutlet beneath the same providers. */
export function useTemplates(): VueTemplateOwner {
  if (!getCurrentInstance()) throw new Error('useTemplates must be called during Vue setup.');
  const entries = shallowReactive(new Map<number, Entry>());
  let disposed = false;
  let nextId = 0;
  const controller = shallowReactive({ entries, outletAttached: false });
  const owner: InternalVueTemplateOwner = {
    [OWNER_STATE]: controller,
    template<C>(component: Component, options?: { props?: (context: C) => Record<string, unknown> }): ComponentTemplate<C> {
      const mapProps = (context: C) => ({ ...(options?.props ? options.props(context) : { context }) });
      return {
        kind: 'revo-component-template',
        mount(host, context) {
          if (disposed) throw new Error('Cannot mount a template from a disposed Vue template owner.');
          if (!controller.outletAttached) throw new Error('Render RevoTemplateOutlet for this Vue template owner before mounting templates.');
          const id = nextId++;
          const state = shallowReactive({ context });
          const entry: Entry = { id, host, component, getProps: () => mapProps(state.context) };
          entries.set(id, entry);
          let destroyed = false;
          return {
            update(next) {
              if (!destroyed && !disposed) state.context = next;
            },
            destroy() {
              if (destroyed) return;
              destroyed = true;
              entries.delete(id);
            },
          };
        },
      };
    },
    dispose() {
      disposed = true;
      entries.clear();
    },
  };
  onBeforeUnmount(owner.dispose);
  return owner;
}

/** Teleports retain normal Vue ancestry, including nearby provide/inject. */
export const RevoTemplateOutlet = defineComponent({
  name: 'RevoTemplateOutlet',
  props: { owner: { type: Object as PropType<VueTemplateOwner>, required: true } },
  setup(props) {
    // The owner is intentionally fixed for this outlet's lifetime.
    const owner = props.owner;
    const controller = (owner as InternalVueTemplateOwner)[OWNER_STATE];
    if (!controller) throw new Error('Invalid Vue template owner.');
    if (controller.outletAttached) throw new Error('A Vue template owner supports exactly one outlet.');
    controller.outletAttached = true;
    onBeforeUnmount(() => {
      controller.outletAttached = false;
      owner.dispose();
    });
    return (): VNode[] => [...controller.entries.values()].map(entry =>
      h(Teleport, { to: entry.host, key: entry.id }, [h(entry.component, entry.getProps())]),
    );
  },
});
