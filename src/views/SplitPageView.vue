<template>
  <div>
    <h3>split page</h3>
    <SplitPage>
      <template #left>
        <div class="spv_container">
          <button @click="say('good bye')">Hello</button>
        </div>
      </template>
      <template #right>
        <div class="spv_container">
          <button @click="say('hello')">Good bye</button>
        </div>
      </template>
    </SplitPage>
  </div>
</template>

<script setup lang="ts">
import SplitPage from '@/components/split_page/SplitPage.vue';
const say = (thing:string) => alert(`I say ${thing}`)
</script>

<style lang="css" scoped>
.spv_container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.spv_container button {
  appearance: none;
  border: 1px solid white;
  color: white;
  border-radius: 4px;
  background-color: transparent;
  font-size: 4rem;
  cursor: pointer;
}
</style>