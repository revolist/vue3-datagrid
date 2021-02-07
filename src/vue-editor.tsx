import {RevoGrid} from "@revolist/revogrid/dist/types/interfaces";
import VueEditorAdapter from './vue-editor-adapter';

  
const vueEditor = (vueConstructor: any) => {
    return function(column: RevoGrid.ColumnDataSchemaModel, save: Function, close: Function) {
        return new VueEditorAdapter(vueConstructor, column, save, close);
    }
};

export default vueEditor;
