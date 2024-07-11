import {
  ComponentInternalInstance,
  ComponentPublicInstance,
  DefineComponent,
} from 'vue';
import {
  EditCell,
  ColumnDataSchemaModel,
  HyperFunc,
  VNode,
  EditorBase,
  SaveData,
} from '@revolist/revogrid';
import { VueTemplateConstructor } from './renderer';

/**
 * Data passed to editor
 */
export type EditorType = {
  column: ColumnDataSchemaModel;
  save: (value: SaveData, preventFocus?: boolean) => void;
  close: (focusNext?: boolean) => void;
} & Partial<EditCell>;

export class VueEditorAdapter implements EditorBase {
  public element: Element | null = null;
  public editCell?: EditCell;
  private vueEl: ComponentPublicInstance<any> | undefined;

  constructor(
    private VueEditorConstructor: DefineComponent,
    public column: ColumnDataSchemaModel,
    private save: (value: SaveData, preventFocus?: boolean) => void,
    private close: (focusNext?: boolean) => void,
    private vInstance: ComponentInternalInstance | null,
  ) {}

  // optional, called after editor rendered
  componentDidRender() {}

  // optional, called after editor destroyed
  disconnectedCallback() {
    this.vueEl?.destroy();
    this.vueEl = undefined;
  }

  render(h: HyperFunc<VNode>) {
    return h('span', {
      key: `${this.column.prop}-${this.editCell?.rowIndex || 0}`,
      ref: (el: Element) => {
        const editorData: EditorType = {
          ...this.editCell,
          column: this.column,
          save: this.save,
          close: this.close,
        };
        this.vueEl = VueTemplateConstructor(
          this.VueEditorConstructor,
          el,
          editorData,
          this.vInstance,
        );
      },
    });
  }
}
