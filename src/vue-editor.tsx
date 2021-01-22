import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
import { DefineComponent } from 'vue';
import VueEditorAdapter from './vue-editor-adapter';
  
const vueEditor = (vueConstructor: DefineComponent) => {
    return (column: RevoGrid.ColumnDataSchemaModel, save: Function, close: Function) => {
        const adapter = new VueEditorAdapter(vueConstructor, column, save, close);
        return adapter;
    };
};

export default vueEditor;
