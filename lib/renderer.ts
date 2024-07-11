import { HyperFunc, ColumnDataSchemaModel, VNode } from '@revolist/revogrid';
import {
  ComponentPublicInstance,
  createVNode,
  render,
  getCurrentInstance,
  ComponentInternalInstance,
  VNode as VueVNode,
} from 'vue';

export interface VueElement extends Element {
  _vnode?: ComponentPublicInstance<any>;
}

function setupAppContext(component: VueVNode, app: ComponentInternalInstance | null) {
  if (!app?.appContext) return;
  component.appContext = app.appContext;
}

type CreateVNodeParameters = (Parameters<typeof createVNode>)[0];

/**
 * Convert Vue component to VNode and render it into HTMLElement.
 *
 * @param vueConstructor Vue component constructor
 * @param el HTMLElement where VNode will be rendered
 * @param p Props to pass to component
 * @param vueInstance Vue 3 app instance
 * @param lastEl Previous rendered VNode or null
 * @returns Vue instance, destroy method and HTMLElement
 */
export const VueTemplateConstructor = (
  vueConstructor:  CreateVNodeParameters,
  el: VueElement | null,
  p: Record<string, any>,
  vueInstance: ComponentInternalInstance | null,
  lastEl: { destroy: () => void } | null = null,
): { vueInstance: ComponentPublicInstance<any>; destroy: () => void; el: VueElement | null } => {
  if (!el) {
    lastEl?.destroy?.();
    return { vueInstance: null, destroy: () => null, el: null };
  }

  // check if vue instance already inited
  let vNode = el._vnode;
  // if exists, return
  if (vNode) {
    setupAppContext(vNode, vueInstance);
    // if inited -> update properties
    for (const k in p) {
      vNode.component.props[k] = p[k];
    }
  } else {
    // create node
    vNode = createVNode(vueConstructor, p);
    setupAppContext(vNode, vueInstance);
    render(vNode, el);
  }

  // useful hints: https://stackoverflow.com/questions/65163775/how-to-destroy-unmount-vue-js-3-components
  const destroy = () => render(null, el);
  return { vueInstance: vNode, destroy, el };
};
/**
 * Render Vue component in Grid column template.
 */
const Template = (
  vueConstructor: CreateVNodeParameters,
  customProps?: any,
) => {
  const current = getCurrentInstance();
  return (h: HyperFunc<VNode>, p: ColumnDataSchemaModel, addition?: any) => {
    const props = customProps ? {  ...customProps, ...p, } : p;
    props.addition = addition;
    let lastEl = null;
    return h('span', {
      key: `${p.prop}-${p.rowIndex}`,
      ref: (el: VueElement) => {
        lastEl = VueTemplateConstructor(vueConstructor, el, props, current, lastEl);
      },
    });
  };
};

export default Template;
