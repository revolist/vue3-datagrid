# Framework content templates

`useTemplates()` is a thin wrapper around the existing framework `Template` factory. It returns ordinary template callbacks for cells, master rows, Kanban cards, and Gantt labels. There is no outlet or separate mounting protocol.

```ts
import { useTemplates } from '@revolist/vue3-datagrid';
import type { CellTemplateProp } from '@revolist/revogrid';

const templates = useTemplates();
const content = templates.template<CellTemplateProp>(MyCell, {
  props: context => ({ item: context.model }),
  key: context => context.model.id,
});
```

Without `props`, the component receives a `context` prop/input. The optional `key` selects record identity when hosts are reused. Supply a stable key for cells whose records may reorder. Mapped props are recomputed when the product invokes the callback. To clear a prop, explicitly pass `undefined`; Vue retains the legacy renderer’s behavior for omitted keys.

Use the returned callback directly as `column.cellTemplate`, `masterRow.template`, `customization.cardContent`, or `gantt.visuals.taskBarContent`. Product progress, resize, dependency, selection and drag controls remain outside the custom content. The legacy Gantt content hook takes precedence. Exports retain the default product representation.

Vue templates retain the existing renderer’s app-level provide/inject behavior. Nearby component providers do not automatically cross the separate render root.

Normal ref teardown releases components when hosts leave the viewport or the grid is removed. Existing `Template` and editor signatures remain available; their default cell prop shape is unchanged.
