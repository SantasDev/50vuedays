<template>
  <div class="exp_card-container">
    <div 
      v-for="(item, index) in props.items"
      :key="index"
      class="panel"
      :class="{'active': index == activePanel}"
      @click="expandPanel(index)"
      :style="{'background-image': `url('${item.img}')`}"
    >
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CardItem } from './ExpandCards.types';
  import { ref } from 'vue';

  const props = defineProps({
    items: {
      type: Array<CardItem>,
      required: true,
    },
  })

  const activePanel = ref(1);
  const expandPanel = (panelIndex: number) => {
    activePanel.value = panelIndex;
  };
</script>

<style lang="css" scoped>
  .exp_card-container {
    display: flex;
  }
  .panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
    -webkit-transition: all 700ms ease-in;
  }

  .panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  .panel.active {
    flex: 5;
  }

  .panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
</style>