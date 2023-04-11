<template>
  <div class="sb_main">
    <div class="play" v-for="(sound, index) in sounds" :key="index">
      <audio ref="audioRefs" :src="sound.src"></audio>
      <button class="btn" @click="reproduce(index)">{{ sound.name }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { AudioInfo } from './SoundBoard'

defineProps({
  sounds: {
    type: Array<AudioInfo>,
    default(){
      return [];
    },
  },
})

const audioRefs = ref<Array<HTMLAudioElement>>([])
const reproduce = (index:number) => {
  stopAll();
  audioRefs.value[index].play();
}

const stopAll = () => {
  audioRefs.value.forEach( audio => {
    audio.pause();
    audio.currentTime = 0;
  })
}
</script>

<style lang="css" scoped>
.sb_main {
  display: flex;
}
.btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-family: inherit;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}
</style>