<script setup lang="ts">
import { TitleText, TooltipInfo} from "./";

const props = defineProps<{
  list: any
}>()

</script>

<template>
  <ul>
    <li class="li-item" v-for="item in props.list">
      <TitleText style="margin-right: 10px">{{item.title}}</TitleText>
      <TooltipInfo :description="item.description" />
      <p>Example code</p>
    </li>
  </ul>
</template>

<style scoped>
.li-item {
  display: flex;
  margin-bottom: 10px;
}
</style>