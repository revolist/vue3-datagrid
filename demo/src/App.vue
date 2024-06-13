<template>
    <Grid
      :readonly="false"
      :resize="false"
      :source="source"
      :columns="headers"
      :editors="gridEditors"
      @cell-custom-action="testCustomCellAction"
      @cell-click="testAction"
    />
</template>

<script lang="ts" setup>
/**
 * This is an example of a Vue3 component using Revogrid
 */
import { provide, readonly, ref } from 'vue';
/**
 * Import Revogrid, Renderer and Editor for Vue
 */
import Grid, { VGridVueEditor, VGridVueTemplate, type Editors } from '@revolist/vue3-datagrid';

import Editor from './Editor.vue';
import Cell from './Cell.vue';
import { generateFakeDataObject } from './dataService';

const count = ref(0)
provide('read-only-count', readonly(count));

const cellTemplate = VGridVueTemplate(Cell);
const { source, headers } = { ...generateFakeDataObject(1000, 1000, cellTemplate) };

const button = VGridVueEditor(Editor);
const gridEditors: Editors = { button };

// For testing events
function testCustomCellAction(e: CustomEvent) {
  console.log('Custom cell action', e);
}
function testAction(e: CustomEvent) {
  console.log('Editor action', e);
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-align: center;
}

#app {
  height: 100%;
}

revo-grid {
  width: 100%;
}

.arrow-down svg {
  opacity: 1;
  width: 10px;
  height: 10px;
}
</style>
