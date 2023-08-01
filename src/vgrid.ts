import { App, defineAsyncComponent } from "vue";
import { RevoGrid } from "./revogrid";
import vueTemplate, { vueTemplateConstructor } from "./vue-template";
import vueEditor from "./vue-editor";
import { defineCustomElements } from "@revolist/revogrid/loader";

const defined = defineCustomElements();
export const VGrid = defineAsyncComponent(async () => {
  await defined;
  return RevoGrid;
});

let installed = false;

export const VGridPlugin = {
  async install(app: App) {
    await defined;
    if (installed) {
      return;
    }
    installed = true;
    app.component("vue-data-grid", VGrid);
  },
};

// Vue template wrapper for virtual nodes
export const VGridVueTemplate = vueTemplate;

// Vue adapter to convert vue component into VNode
export const VGridVueTemplateConstructor = vueTemplateConstructor;

// Vue editor wrapper
export const VGridVueEditor = vueEditor;

export default VGrid;
