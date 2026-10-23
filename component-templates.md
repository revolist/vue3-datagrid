# Vue component templates

Call `useTemplates()` during setup and render exactly one `RevoTemplateOutlet`
with that owner beneath the providers your templates should inherit. Put the
outlet before the grid in sibling render order. Vue Teleport keeps the normal
logical component ancestry. No new Vue application is created per template.

```vue
<script setup lang="ts">
import { RevoTemplateOutlet, useTemplates } from '@revolist/vue3-datagrid';
import { asCellTemplate, type CellTemplateContext } from '@revolist/revogrid';
import type { BeforeRowRenderEvent } from '@revolist/revogrid';
import type { KanbanCardRenderContext } from '@revolist/kanban';
import type { GanttTaskBarVisualContext } from '@revolist/gantt';
import Cell from './Cell.vue';
import Detail from './Detail.vue';
import Card from './Card.vue';
import BarLabel from './BarLabel.vue';

const templates = useTemplates();
const vueTemplate = templates.template;
const columns = [{ prop: 'name', cellTemplate: asCellTemplate(
  vueTemplate<CellTemplateContext>(Cell), { key: p => p.model.id },
) }];
const masterRow = { template: vueTemplate<BeforeRowRenderEvent>(Detail) };
const kanbanCustomization = { cardContent: vueTemplate<KanbanCardRenderContext>(Card) };
const ganttVisuals = { taskBarContent: vueTemplate<GanttTaskBarVisualContext>(BarLabel) };
</script>
<template>
  <RevoTemplateOutlet :owner="templates" />
  <!-- Pass columns/masterRow/kanbanCustomization/ganttVisuals to the product. -->
</template>
```

Components receive a `context` prop. For existing component interfaces, pass
`{ props: context => ({ item: context.card, onSave: save }) }` as the helper's
second argument. Prop mapping replaces the complete props object; omitted props
are removed. Create definitions once during setup, not during every render.

Offscreen components unmount; keep durable edits in application state. Master
expansion state remains in the product. Gantt content replaces labels while
retaining progress and interaction controls; the legacy taskBarContentHook wins
if both are set. Existing callback APIs are unchanged. Exports continue using
default product data/appearance, not the custom Vue content.

Owner disposal releases mounted and pending entries. Imports are SSR-safe;
rendering into product hosts is browser-only. React and Angular adapters are
not included in this package.
