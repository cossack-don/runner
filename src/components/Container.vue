<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  row?: boolean
  wrap?: boolean
  between?: boolean
  widthPercent?: string
}>()

const listClasses = computed(()=>{
  return {
    'd-flex':props.row,
    'flex-wrap':props.wrap,
    'flex-justify-between ':props.between,
    'background':true
  }
})

const listInlineStyles = computed(()=>{
  return {
  'width':`${props.widthPercent}%`,
  }
})
</script>

<template>
  <div v-bind="$attrs" :class="listClasses" :style="listInlineStyles">
    <slot/>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-justify-between {
  justify-content: space-between;
}
.background {
  padding: 15px;
}
</style>