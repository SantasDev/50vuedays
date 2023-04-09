<template>
  <div>
    <h3>Scroll Animation</h3>
    <ScrollAnimation :items="['content', 'content', 'content', 'content', 'content', 'content', 'content', 'content']"/>
  </div>
</template>

<script setup lang="ts" >
import ScrollAnimation from '@/components/scroll_animation/ScrollAnimation.vue';
</script>