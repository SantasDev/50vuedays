<template>
  <div id="insert">
    <div v-show="!keyPressedCode.keyCode" class="key"  width="1000">
      Press any key to get the keyCode
    </div>
    <div v-show="keyPressedCode.keyCode" class="key">
      {{ keyPressedCode.keyCode }}
    </div>
    <div v-show="keyPressedCode.code" class="key">
      {{ keyPressedCode.code }}
    </div>
    <div v-show="keyPressedCode.key" class="key">
      {{ keyPressedCode.key }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { KeyCode } from './KeyCode';
import { ref, onMounted } from 'vue';

const keyPressedCode = ref<KeyCode>({
  key: "",
  code: "",
  keyCode: 0,
});

const pressKey = ($event:KeyboardEvent) => {
  const {key, code, keyCode} = $event;
  keyPressedCode.value = { key, code, keyCode}
}
onMounted(() => {
  window.addEventListener("keydown", pressKey);
});

</script>

<style lang="css" scoped>
.key {
  border: 1px solid #999999;
  background-color: #2B2B2B;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  color: white;
  position: relative;
}

.key small {
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #c4c4c4;
  font-size: 14px;
}
</style>