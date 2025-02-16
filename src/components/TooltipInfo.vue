<script setup lang="ts">
import {IconInfo} from './'
const props = defineProps<{
  description: string
}>()

</script>

<template>
  <VDropdown
      popper-class="custom-popper"
      placement="right-start"
      :triggers="['hover', 'click']"
  >
    <IconInfo/>
    <template #popper>
      <div>
        <p style="word-break: break-all; padding: 12px">
          {{props.description}}
        </p>
      </div>
    </template>
  </VDropdown>
</template>

<style scoped>
.icon-hover:hover {
  cursor: pointer;
}

</style>