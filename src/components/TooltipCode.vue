<script setup lang="ts">
import {IconCode} from './'
</script>

<template>
  <VDropdown
      popper-class="custom-popper"
      placement="right-start"
      :triggers="['hover', 'click']"
  >
    <IconCode/>
    <template #popper>
      <div>
        <p style="word-break: break-all; padding: 12px; background: #f9ecc8">
          <code>const userData = {
            name: "John",
            age: 25,
            isOnline: true
            } <br/>
            console.log(Object.entries(userData)); <br/>
            //возвращает: [["name", "John"], ["age", 25], ["isOnline", true]]
          </code>
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