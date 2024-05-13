import {
  EditCell,
  ColumnDataSchemaModel,
  HyperFunc,
  VNode,
} from '@revolist/revogrid';
import { ComponentInternalInstance, ComponentPublicInstance, DefineComponent } from 'vue';
import { VueTemplateConstructor } from './renderer';

export default class VueEditorAdapter {
  public element: Element | null = null;
  public editCell: EditCell | null = null;
  private vueEl: ComponentPublicInstance<any> | undefined;

  constructor(
    private VueEditorConstructor: DefineComponent,
    public column: ColumnDataSchemaModel,
    private save: Function,
    private close: Function,
    private vInstance: ComponentInternalInstance | null,
  ) {}

  // optional, called after editor rendered
  componentDidRender() {}

  // optional, called after editor destroyed
  disconnectedCallback() {
    if (this.vueEl) {
      this.vueEl.destroy();
      this.vueEl = undefined;
    }
  }

  render(h: HyperFunc<VNode>) {
    return (
      <span
        ref={el => {
          this.vueEl = VueTemplateConstructor(
            this.VueEditorConstructor,
            el as HTMLElement,
            {
              ...this.editCell,
              column: this.column,
              save: this.save,
              close: this.close,
            },
            this.vInstance,
          );
        }}
      />
    );
  }
}
