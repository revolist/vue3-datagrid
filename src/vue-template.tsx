import { HyperFunc, ColumnDataSchemaModel, VNode } from "@revolist/revogrid";
import {
  ComponentPublicInstance,
  createVNode,
  DefineComponent,
  render,
  getCurrentInstance,
} from "vue";

export interface VueElement extends HTMLElement {
  _vnode?: ComponentPublicInstance<any>;
}
export const vueTemplateConstructor = (
  vueConstructor: DefineComponent,
  el: VueElement | null,
  p: Record<string, any>,
  appContext: any,
  addition?: any
) => {
  if (!el) {
    return null;
  }

  // check, probably vue instance already inited
  let vNode = el._vnode;
  // if exists, return
  if (vNode) {
    if (appContext) vNode.appContext = appContext;
    // if vue inited just update it's properties
    for (const k in p) {
      vNode.component.props[k] = p[k];
    }
  } else {
    vNode = createVNode(vueConstructor, p);
    if (appContext) vNode.appContext = appContext;
    render(vNode, el);
  }

  // useful hints: https://stackoverflow.com/questions/65163775/how-to-destroy-unmount-vue-js-3-components
  const destroy = () => render(null, el);
  return { vueInstance: vNode, destroy, el };
};

const vueTemplate = (vueConstructor: DefineComponent, customProps?: any) => {
  const current = getCurrentInstance();
  const appContext = current?.appContext;
  return (
    h: HyperFunc<VNode>,
    p: ColumnDataSchemaModel,
    addition?: any
  ) => {
    const props = customProps ? { ...customProps, ...p } : p;
    return (
      <span
        ref={(el) =>
          vueTemplateConstructor(vueConstructor, el, props, appContext, addition)
        }
      ></span>
    );
  };
};

export default vueTemplate;
