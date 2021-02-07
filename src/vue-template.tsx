import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { VNode } from '@revolist/revogrid/dist/types/stencil-public-runtime';
import { ComponentPublicInstance, createVNode, DefineComponent, render } from 'vue';


interface VueElement extends HTMLElement {
    _vnode?: ComponentPublicInstance<any>;
}
export const vueTemplateConstructor =
    (vueConstructor: DefineComponent, e: HTMLElement|null, p: Record<string, any>) => {
        if (!e) {
            return null;
        }
        let el: VueElement|undefined;
        if (e?.childNodes.length) {
            el = e.childNodes[0] as VueElement;
        }
        
        if (!el) {
            // create dom element wrapper for vue instance
            el = document.createElement('span');
            e.appendChild(el);
        }
        // check, probably vue instance already inited
        let vueInstance = el._vnode;
        // if exists, return
        if (vueInstance) {
            // if vue inited just update it's properties
            for (const k in p) {
                vueInstance.component.props[k] = p[k];
            }
        } else {
            const vNode = createVNode(vueConstructor, p);
            render(vNode, el);
        }
        return vueInstance;
    };

const vueTemplate = (vueConstructor: any) => {
    return (h: RevoGrid.HyperFunc<VNode>, p: RevoGrid.ColumnDataSchemaModel) => <span ref={(el) => vueTemplateConstructor(vueConstructor, el as HTMLElement, p)}></span>;
};

export default vueTemplate;
