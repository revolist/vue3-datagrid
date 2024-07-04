import { defineAsyncComponent } from 'vue';
import { defineCustomElements } from '@revolist/revogrid/loader';
import { RevoGrid } from './revogrid';
export { type EditorType } from './editor.adapter';
export type * from '@revolist/revogrid';

export {
  default as VGridVueTemplate,
  VueTemplateConstructor as VGridVueTemplateConstructor,
} from './renderer';
export { Editor as VGridVueEditor } from './editor';

// Function to check if an object is a promise
function checkPromise(obj: any): obj is Promise<void> {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const defineWebcomponent: Promise<void> | void = defineCustomElements?.();

export const VGrid = defineAsyncComponent(async () => {
  if (checkPromise(defineWebcomponent)) {
    await (defineWebcomponent as Promise<void>);
  }
  return RevoGrid;
});

export default VGrid;
