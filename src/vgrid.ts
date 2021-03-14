import { App, defineAsyncComponent } from "vue";
import * as loader from "@revolist/revogrid/custom-element";
import {RevoGrid} from "./revogrid";
import vueTemplate, {vueTemplateConstructor} from "./vue-template";
import vueEditor from "./vue-editor";

let isDefined = false;
export const VGrid = defineAsyncComponent(
  () => new Promise<typeof RevoGrid>((resolve) => {
    if (!isDefined && loader) {
      loader.defineCustomElements();
      isDefined = true;
    }
    return resolve(RevoGrid);
  })
);

let installed = false;

export const VGridPlugin = {
  install(app: App) {
    if (installed) {
      return;
    }
    installed = true;
    app.component('vue-data-grid', VGrid);
  }
};

// Vue template wrapper for virtual nodes
export const VGridVueTemplate = vueTemplate;

// Vue adapter to convert vue component into VNode
export const VGridVueTemplateConstructor = vueTemplateConstructor;

// Vue editor wrapper
export const VGridVueEditor = vueEditor;


export default VGrid;

