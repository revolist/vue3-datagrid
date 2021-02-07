<template>
  <span>{{rowIndex}}</span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ['rowIndex']
});
</script>