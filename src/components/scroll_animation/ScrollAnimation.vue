<template>
  <div class="boxes_container" @scroll="checkBoxes" :style="{height:`${height}px`}" ref="boxContainer">
    <div v-for="(item, index) in items" class="box" ref="boxes" :key="index">
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps({
  height: {
    type: Number,
    default: 900,
  },
  items: {
    type: Array<string>,
    default(){ return []}
  }
})

const boxes = ref<Array<HTMLElement>>([])
const boxContainer = ref<HTMLElement|null>(null)

const checkBoxes = () => {
  const boxContainerTop = boxContainer.value === null? 0 : boxContainer.value.getBoundingClientRect().bottom;
  boxes.value.forEach(box => {
    const boxTop = box.getBoundingClientRect().bottom
    if(boxTop < boxContainerTop) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  });
}

onMounted(checkBoxes)

</script>

<style lang="css" scoped>
.boxes_container {
  overflow-y: scroll;
  overflow-x: hidden;
}
.box {
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}

.box.show {
  transform: translateX(0);
}

.box h2 {
  font-size: 45px;
}
</style>