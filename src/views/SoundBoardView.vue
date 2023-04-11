<template>
  <div>
    <h3>Sound board</h3>
    <SoundBoard :sounds="sounds" />
  </div>
</template>

<script setup lang="ts">
import SoundBoard from '@/components/sound_board/SoundBoard.vue';
import applauses from '@/assets/sound/sound-board_sounds_applause.mp3'
import boos from '@/assets/sound/sound-board_sounds_boo.mp3'

const sounds = [
  {
    src: applauses,
    name: 'applauses',
  },
  {
    src: boos,
    name: 'boos',
  },
]
</script>
