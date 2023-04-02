<template>
  <div class="progress-stpes">
    <h1>Progress Step</h1>
    <progress-steps :current-step="stepsCount" :total-steps="10"/>
    <button class="btn" id="prev" @click="stepsCount -= 1"  :disabled="stepsCount === 1">Prev</button>
    <button class="btn" id="next" @click="stepsCount += 1" :disabled="stepsCount === 10">Next</button>
  </div>
</template>

<script setup lang="ts">
  import ProgressSteps from '@/components/progress_steps/ProgressSteps.vue';
  import { ref } from 'vue';
  
  const stepsCount = ref(1);

</script>

<style>
  .btn {
    background-color: var(--line-border-fill);
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:focus {
    outline: 0;
  }

  .btn:disabled {
    background-color: var(--line-border-empty);
    cursor: not-allowed;
  }
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}

</style>
