import { ColumnDataSchemaModel, EditorCtr } from '@revolist/revogrid';
import { getCurrentInstance } from 'vue';
import VueEditorAdapter from './editor.adapter';

/**
 * Create editor constructor.
 * This function creates editor constructor by wrapping it with VueEditorAdapter
 * which is responsible for connecting editor with Vue lifecycle events
 * @param vueConstructor editor Vue constructor
 * @returns editor constructor
 */
const Editor = (vueConstructor: any): EditorCtr => {
  /**
   * Editor constructor wrapper
   * @param column column data to which editor is bound
   * @param save function to save data
   * @param close function to close editor
   * @returns editor instance
   */
  return function (
    column: ColumnDataSchemaModel,
    save: Function,
    close: Function,
  ) {
    return new VueEditorAdapter(
      vueConstructor,
      column,
      save,
      close,
      getCurrentInstance(),
    );
  } as unknown as EditorCtr;
};

export default Editor;
