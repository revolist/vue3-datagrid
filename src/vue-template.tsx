import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import { ComponentPublicInstance, createVNode, DefineComponent, render, getCurrentInstance } from "vue";


export interface VueElement extends HTMLElement {
    _vnode?: ComponentPublicInstance<any>;
}
export const vueTemplateConstructor =
    (vueConstructor: DefineComponent, el: VueElement|null, p: Record<string, any>, appContext: any) => {
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

const vueTemplate = (vueConstructor: any) => {
    const current = getCurrentInstance();
    const appContext = current?.appContext;
    return (h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel) => <span ref={(el) => vueTemplateConstructor(vueConstructor, el as HTMLElement, p, appContext)}></span>;
};

export default vueTemplate;
