<template>
  <header :style="{height: height + 'px'}">
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: {
    height: {
      default: 60,
      type: Number,
    },
  },
};
</script>
<style lang="less">
header {
  margin: 0;
  padding: 0 20px;
  height: 60px;
  background: #000;
}
</style>
