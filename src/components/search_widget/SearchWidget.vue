<template>
  <div class="sw_search" :class="{'active': isActiveSearch}">
      <input ref="input" type="text" class="input" placeholder="Search...">
      <button class="btn" @click="activeSearch">
        <i class="fas fa-search"></i>
      </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActiveSearch = ref(false);
const input = ref<HTMLElement | null>(null);
const activeSearch = () =>{
  isActiveSearch.value = !isActiveSearch.value;
  input.value?.focus()
}
</script>

<style scoped>
.sw_search {
  position: relative;
  height: 50px;
}

.sw_search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.sw_search.active .input {
  width: 200px;
}

.sw_search.active .btn {
  transform: translateX(198px);
}

</style>