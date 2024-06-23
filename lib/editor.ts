import { ColumnDataSchemaModel, EditorCtr, SaveData } from '@revolist/revogrid';
import { getCurrentInstance } from 'vue';
import VueEditorAdapter from './editor.adapter';

/**
 * Create editor constructor.
 * This function creates editor constructor by wrapping it with VueEditorAdapter
 * which is responsible for connecting editor with Vue lifecycle events
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
    save: (value: SaveData, preventFocus?: boolean) => void,
    close: (focusNext?: boolean) => void,
  ) {
    return new VueEditorAdapter(
      vueConstructor,
      column,
      save,
      close,
      getCurrentInstance(),
    );
  };
};

export default Editor;
