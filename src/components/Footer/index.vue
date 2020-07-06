<template>
  <footer class="zm-footer">
    <slot></slot>
  </footer>
</template>
<script>
export default {
  name: 'ZmFooter',
};
</script>
<style lang="less">
.zm-footer {
  height: 60px;
  padding: 0 20px;
}
</style>
