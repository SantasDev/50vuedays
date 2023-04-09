<template>
  <div class="bg-image">
    <section class="bg" :style="bgStyle"></section>
    <div class="loading-text" :style="loadStyle">{{ load }}%</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

let int = setInterval(blurring, 30)

const props = defineProps({
    image: String
  })

const load = ref(0);
const loadStyle = computed(() => ({
  opacity: scale(load.value, 0, 100, 1, 0),
}));

function blurring() {
  load.value++

  if (load.value > 99) {
    clearInterval(int)
  }
}

const bgStyle = computed(() =>({
  filter: `blur(${scale(load.value, 0, 100, 30, 0)}px)`,
  background: `url(${props.image}) no-repeat center center/cover`,
}));
const scale = (num: number, in_min: number, in_max:number, out_min:number, out_max:number):number => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
</script>

<style lang="css" scoped>

.bg-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
.bg {
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
</style>