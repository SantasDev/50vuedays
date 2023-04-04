<template>
  <div class="rn_main">
    <div class="rn_container_split" :class="{'show-nav': isOpen}">
      <div class="circle-container">
        <div class="circle">
          <button
            id="close"
            :class="{'is-hidden': !isOpen}"
            @click="isOpen = false"
          >
            X
          </button>
          <button
            id="open"
            :class="{'is-hidden': isOpen}"
            @click="isOpen = true"
          >
            -
          </button>
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <nav class="rn_menu" :class="{'is-hidden': !isOpen}">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import type { MenuItem } from './RotatingNavigation.types';
  import {ref} from 'vue';
  defineProps({
    menuItems: {
      type: Array<MenuItem>,
      default(){
        return [];
      },
    },
  });
  const isOpen = ref(false);
</script>

<style lang="css" scoped>
.rn_main {
  position: absolute;
  background-color: #333;
}
.rn_container_split {
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  min-width: 50px;
  min-height: 50px;
}

.rn_container_split.show-nav {
  transform: rotate(-20deg);
}
.circle-container {
  position: relative;
  top: -25px;
  left: -25px;
  z-index: 2;
}

.circle {
  background-color: #ff7979;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}
/* .rn_container_split.show-nav .circle {
  transform: rotate(-70deg);
} */

.circle button {
  cursor: pointer;
  position: absolute;
  /* top: 50%;
  left: 50%; */
  height: 100%;
  width: 100%;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  transition: visibility 0s, opacity 0.5s linear;
}

.circle button:focus {
  outline: none;
}

.content {
  top: -50px;
  z-index: 1;
}
/* .circle button#open {
  left: 60%;
} */

/* .circle button#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
} */
.rn_container_split.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: visibility 0s, opacity 0.5s linear;
}

nav ul {
  list-style-type: none;
  padding-left: 4px;
}

nav ul li {
  text-transform: uppercase;
  color: #fff;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav a{
  color: #fafafa;
  text-decoration: none;
  transition: all 0.5s;
}

nav a:hover {
  color: #FF7979;
  font-weight: bold;
}
.is-hidden {
  visibility: hidden;
  opacity: 0;
}
</style>