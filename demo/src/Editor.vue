<template>
  <button @click="onBtn">Finish edit</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['rowIndex', 'model', 'save', 'close'],
  mounted() {
    this.componentDidRender();
  },
  methods: {
    onBtn(e: MouseEvent) {
      const event = new CustomEvent('cell', {
        bubbles: true,
        detail: { row: this.model },
      });
      this.$el.dispatchEvent(event);
      e.stopPropagation();
      if (typeof this.close === 'function') {
        (this.close as () => void)();
      }
    },
    componentDidRender() {
      console.log('Component has rendered');
    },
  },
});
</script>
