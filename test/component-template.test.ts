import { createApp, defineComponent, h, inject, nextTick, onUnmounted, provide, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { RevoTemplateOutlet, useTemplates, type VueTemplateOwner } from '../lib/component-template';

function fixture() {
  let owner!: VueTemplateOwner;
  const label = ref('nearby');
  const unmounted = vi.fn();
  const Child = defineComponent({
    props: ['context', 'optional'],
    setup(props) {
      const provided = inject<any>('label');
      onUnmounted(unmounted);
      return () => h('button', `${provided.value}:${props.context.value}:${props.optional ?? 'absent'}`);
    },
  });
  const App = defineComponent({ setup() {
    provide('label', label);
    owner = useTemplates();
    return () => h(RevoTemplateOutlet, { owner });
  } });
  const root = document.createElement('div');
  const host = document.createElement('div');
  document.body.append(root, host);
  const app = createApp(App);
  app.mount(root);
  return { owner, label, Child, app, root, host, unmounted };
}

describe('Vue templates', () => {
  it('inherits nearby reactive providers and replaces props including removed keys', async () => {
    const f = fixture();
    const template = f.owner.template<{ value: number; optional?: string }>(f.Child, {
      props: context => ({ context, ...(context.optional ? { optional: context.optional } : {}) }),
    });
    const instance = template.mount(f.host, { value: 1, optional: 'yes' });
    await nextTick();
    expect(f.host.textContent).toBe('nearby:1:yes');
    f.label.value = 'updated';
    instance.update({ value: 2 });
    await nextTick();
    expect(f.host.textContent).toBe('updated:2:absent');
    expect(f.unmounted).not.toHaveBeenCalled();
    instance.destroy(); instance.destroy();
    await nextTick();
    expect(f.unmounted).toHaveBeenCalledTimes(1);
    expect(f.host.textContent).toBe('');
    f.app.unmount(); f.root.remove(); f.host.remove();
  });

  it('tracks reactive values read by mapped props inside the owning Vue render', async () => {
    const f = fixture();
    const optional = ref<string | undefined>('present');
    const template = f.owner.template<{ value: number }>(f.Child, {
      props: context => ({ context, ...(optional.value ? { optional: optional.value } : {}) }),
    });
    template.mount(f.host, { value: 1 });
    await nextTick();
    expect(f.host.textContent).toBe('nearby:1:present');
    optional.value = undefined;
    await nextTick();
    expect(f.host.textContent).toBe('nearby:1:absent');
    f.app.unmount(); f.root.remove(); f.host.remove();
  });

  it('cancels pending mounts and makes owner disposal final', async () => {
    const f = fixture();
    const template = f.owner.template(f.Child);
    const pending = template.mount(f.host, { value: 1 });
    pending.destroy();
    await nextTick();
    expect(f.host.childElementCount).toBe(0);
    template.mount(f.host, { value: 2 });
    await nextTick();
    f.app.unmount();
    await nextTick();
    expect(f.host.childElementCount).toBe(0);
    expect(f.unmounted).toHaveBeenCalledTimes(1);
    expect(() => template.mount(f.host, {})).toThrow('disposed');
    f.root.remove(); f.host.remove();
  });
});
