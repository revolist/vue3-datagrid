import { defineAsyncComponent } from 'vue';
import { defineCustomElements } from '@revolist/revogrid/loader';

export {
  default as VGridVueTemplate,
  VueTemplateConstructor as VGridVueTemplateConstructor,
} from './renderer';
export { default as VGridVueEditor } from './editor';

export const VGrid = defineAsyncComponent(async () => {
  await (defineCustomElements() as unknown as Promise<void>);
  const grid = (await import('./revogrid')).RevoGrid;
  return grid;
});

export default VGrid;
