<template>
  <div ref="cell" @click="customCellClickEvent">{{ rowIndex }}</div>
</template>

<script lang="ts" setup>
import { defineProps, ref, inject } from 'vue';
import type { ColumnDataSchemaModel } from '@revolist/revogrid';

const props = defineProps<ColumnDataSchemaModel>();
const cell = ref<HTMLElement>();

const message = inject('sample');
function customCellClickEvent() {
  console.log('Custom cell click > Injected message:', message);
  const event = new CustomEvent('cell-custom-action', {
      bubbles: true,
      detail: { row: props.model },
  });
  cell.value?.dispatchEvent(event);
}
</script>
