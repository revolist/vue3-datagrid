<template>
  <div class="app">
    <v-grid
      theme="default"
      :source="rows"
      :columns="columns"
      :resize="true"
      :frameSize="1"
      :readonly="true"
    ></v-grid>
  </div>
</template>

<script lang="ts" setup>
import VGrid, { VGridVueTemplate } from "@revolist/vue-datagrid";
import { ref } from "vue";
import CellTemplate from "./CellTemplate.vue";

const columns = ref([
  {
    name: "column1",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column2",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column3",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column4",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column5",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column6",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column7",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column8",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column9",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  },
  {
    name: "column10",
    size: 200,
    cellTemplate: VGridVueTemplate(CellTemplate),
  }
]);

const rows = ref([
  {}
])
</script>

<style lang="scss" scoped>
.app {
  height: 50vh;
  width: 50vw;
}
revo-grid {
  height: 50vh;
}
</style>
