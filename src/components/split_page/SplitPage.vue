<template>
  <div class="sp_wrap">
    <div class="sp_container sp_left">
      <slot name="left" />
    </div>
    <div class="sp_container sp_right">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.sp_wrap {
  display: flex;
  justify-content: space-between;
  min-height: 50vh;
}
.sp_container {
  border: 1px solid black;
  flex: 2;
  transition: all 1s ease-out;
}
.sp_container:hover {
  flex: 8;
}
.sp_left {
  background-color: rgba(87, 84, 236, 0.7);
}
.sp_right {
  background-color: rgba(43, 43, 43, 0.8);
}
</style>