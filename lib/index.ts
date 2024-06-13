import { defineAsyncComponent } from 'vue';
import { defineCustomElements , applyPolyfills} from '@revolist/revogrid/loader';
import { RevoGrid } from './revogrid';
export type * from '@revolist/revogrid';

export {
  default as VGridVueTemplate,
  VueTemplateConstructor as VGridVueTemplateConstructor,
} from './renderer';
export { default as VGridVueEditor } from './editor';

// Function to check if an object is a promise
function checkPromise(obj: any): obj is Promise<void> {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const defineWebcomponent: Promise<void> | void = defineCustomElements?.();

export const VGrid = defineAsyncComponent(async () => {
  await applyPolyfills();
  if (checkPromise(defineWebcomponent)) {
    await (defineWebcomponent as Promise<void>);
  }
  return RevoGrid;
});

export default VGrid;
