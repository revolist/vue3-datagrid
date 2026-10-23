import { createApp, defineComponent, h, inject, nextTick, onUnmounted, ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import { useTemplates, type VueTemplateOwner } from '../lib/component-template';
import LegacyTemplate from '../lib/renderer';

describe('thin Vue template helper', () => {
  it('reuses the cell renderer, app context, mapped props and normal ref cleanup', async () => {
    let templates!: VueTemplateOwner;
    let legacy!: ReturnType<typeof LegacyTemplate>;
    const label = ref('app');
    const unmounted = vi.fn();
    const Child = defineComponent({ props: ['context', 'optional'], setup(props) {
      const provided = inject<any>('label');
      const count = ref(0);
      onUnmounted(unmounted);
      return () => h('button', { onClick: () => count.value++ }, `${provided.value}:${props.context.value}:${props.optional ?? 'absent'}:${count.value}`);
    } });
    const app = createApp(defineComponent({ setup() {
      templates = useTemplates();
      legacy = LegacyTemplate(Child, { context: { value: 9 } });
      return () => h('div');
    } }));
    app.provide('label', label);
    const root = document.createElement('div');
    const host = document.createElement('span');
    document.body.append(root, host);
    app.mount(root);
    const template = templates.template<{ value: number; optional?: string }>(Child, { props: context => ({ context, optional: context.optional }) });
    const vnode = (context: { value: number; optional?: string }) => template(((_tag: any, attrs: any) => attrs) as any, context) as any;
    vnode({ value: 1, optional: 'yes' }).ref(host);
    await nextTick();
    expect(host.textContent).toBe('app:1:yes:0');
    const cachedVNode = (host as any)._vnode;
    host.querySelector('button')!.click();
    label.value = 'updated';
    const current = vnode({ value: 2 });
    current.ref(host);
    await nextTick();
    expect(host.textContent).toBe('updated:2:absent:1');
    expect((host as any)._vnode).toBe(cachedVNode);
    expect(unmounted).not.toHaveBeenCalled();
    current.ref(null);
    current.ref(null);
    await nextTick();
    expect(unmounted).toHaveBeenCalledTimes(1);
    expect(host.textContent).toBe('');
    const old = legacy(((_tag: any, attrs: any) => attrs) as any, { prop: 'name', rowIndex: 0 } as any) as any;
    old.ref(host);
    await nextTick();
    expect(host.textContent).toBe('updated:9:absent:0');
    old.ref(null);
    app.unmount();root.remove();host.remove();
  });
});
