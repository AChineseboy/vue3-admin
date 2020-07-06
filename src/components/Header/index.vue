<template>
  <header class="zm-header">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'ZmHeader',
};
</script>
<style lang="less">
.zm-header {
  height: 60px;
  padding: 0 20px;
}
</style>
