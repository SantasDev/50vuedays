<template>
  <div>
    <h3>blur image</h3>
    <BlurImage :image="image"/>
  </div>
</template>

<script setup lang="ts">
import BlurImage from '@/components/blur_image/BlurImage.vue';
const image = "https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
</script>

