<template>
  <div class="wave_form-control">
    <input type="text" required>
    <label v-html="parsedSpan"></label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
  }
})

const parsedSpan = computed(() => props.label.split('').reduce((acc, current, index) => `${acc}<span style="transition-delay:${index * 50}ms">${current}</span>`,''));
</script>

<style lang="css">
.wave_form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.wave_form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.wave_form-control input:focus,
.wave_form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.wave_form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.wave_form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wave_form-control input:focus + label span,
.wave_form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>