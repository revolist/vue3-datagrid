import {RevoGrid, Edition} from "@revolist/revogrid/dist/types/interfaces";
import { getCurrentInstance } from "vue";
import VueEditorAdapter from './vue-editor-adapter';

  
const vueEditor = (vueConstructor: any): Edition.EditorCtr => {
    const current = getCurrentInstance();
    const appContext = current?.appContext;
    return function(column: RevoGrid.ColumnDataSchemaModel, save: Function, close: Function) {
        return new VueEditorAdapter(vueConstructor, column, save, close, appContext);
    } as unknown as Edition.EditorCtr;
};

export default vueEditor;
