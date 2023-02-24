<template>
    <button @click="iAmClicked" :style="{ backgroundColor: click ?  'red' : 'gray' }">Click</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
// props
const props = withDefaults(defineProps<{
    prop: string,
    column: object,
    rowIndex: number,
    model: any,
    val:any,
    close?: Function,
    save?: Function
}>(), {
    prop: "undefined"
})

const click = ref(false)
const iAmClicked = ()=>{
    click.value = !click.value;
}
</script>
