import type { ColumnDataSchemaModel, EditorCtr } from '@revolist/revogrid';
import { getCurrentInstance } from 'vue';
import { VueEditorAdapter } from './editor.adapter';

/**
 * Create editor constructor.
 * This function creates editor constructor by wrapping it with VueEditorAdapter
 * which is responsible for connecting editor with Vue lifecycle events
 */
export const Editor = (vueConstructor: any): EditorCtr => {
  /**
   * Editor constructor wrapper
   * @param column column data to which editor is bound
   * @param save function to save data
   * @param close function to close editor
   * @returns editor instance
   */
  const instance = getCurrentInstance();
  return function (
    column: ColumnDataSchemaModel,
    save: (value: any, preventFocus?: boolean) => void,
    close: (focusNext?: boolean) => void,
  ) {
    return new VueEditorAdapter(
      vueConstructor,
      column,
      save,
      close,
      instance,
    );
  };
};

