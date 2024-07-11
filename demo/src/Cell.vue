<template>
  <div ref="cell" :style="{ backgroundColor: color }" @click="customCellClickEvent">{{ rowIndex }}</div>
</template>

<script lang="ts" setup>
import { defineProps, ref, inject, computed } from 'vue';
import type { ColumnDataSchemaModel } from '@revolist/vue3-datagrid';

const props = defineProps<ColumnDataSchemaModel>();
const cell = ref<HTMLElement>();
const click = ref(Symbol());

const colorReference = computed(() => `prop:${props.prop}-color`);
const color = computed(() => {
  return click.value && props.model?.[colorReference.value] ? 'green' : '';
});

const message = inject('sample');
function customCellClickEvent() {
  console.log('Custom cell click > Injected message:', message);

  // we mutate the model here, to show how it can be done. but it's not recommended, it's just for demo purposes
  // the state of the cell is temporal and will be reset when cell is gone out of viewport
  props.model[colorReference.value] = !props.model[colorReference.value];
  click.value = Symbol();

  const event = new CustomEvent('cell-custom-action', {
      bubbles: true,
      detail: { row: props.model },
  });
  cell.value?.dispatchEvent(event);
}
</script>
