<template>
  <div>
    <h3 style="margin-bottom: 40px;">rotating navigation</h3>
    <rotating-navigation :menu-items="menuItems">
      <h3>Explore The World</h3>
      <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" height="100px"/>
    </rotating-navigation>
  </div>
</template>

<script setup lang="ts">
  import type { MenuItem } from '@/components/rotating_navigation/RotatingNavigation.types';
  import RotatingNavigation from '@/components/rotating_navigation/RotatingNavigation.vue';
  const menuItems: Array<MenuItem> = [
    {
      title: "home",
      url: "/"
    },
    {
      title: "back",
      url: "/"
    },
  ]
</script>