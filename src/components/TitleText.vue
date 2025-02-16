<script setup lang="ts">
const props = defineProps<{
  as?: Tags | undefined
  color?:Colors | undefined
}>()

type Tags = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
type Colors = 'black' | 'red' | 'blue'
</script>

<template>
  <component
      :is="props.as === undefined ? 'h4' : props.as"
      :class="props.color === undefined ? 'black':props.color"
  >
    <slot/>
  </component>
</template>

<style scoped>
.black {
  color:#3b3c41;
}

.red {
  color:#B31D28;
}

.blue {
  color:#005CC5;
}
</style>