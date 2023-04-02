<template>
  <div class="ps_container">
    <div class="ps_progress-container">
      <div id="progress" class="progress" :style="{'width': progressWidth}"></div>
      <div
        v-for="step in totalSteps"
        :key="step"
        class="circle"
        :class="{'active': step <= currentStep}"
      >{{ step }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
  const props = defineProps({
    currentStep:{
      type: Number,
      default: 1,
    },
    totalSteps: Number,
  });

  const progressWidth = computed(() => {
    const total = props.totalSteps || props.currentStep;
    const progress = props.currentStep/ total * 100;
    return `${progress}%`;
  });

</script>

<style>
  :root {
    --line-border-fill: #3498db;
    --line-border-empty: #e0e0e0;

  }

  .ps_container {
    text-align: center;
  }
  .ps_progress-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
  }
  .ps_progress-container::before {
    content: '';
    background-color: var(--line-border-empty);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }
  .progress {
    background-color: var(--line-border-fill);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0%;
    z-index: -1;
    transition: 0.4s ease;
  }
    .circle {
    background-color: #fff;
    color:var(--line-border-fill);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--line-border-empty);
    transition: 0.4s ease;
  }

  .circle.active {
    border-color: var(--line-border-fill);
  }

</style>