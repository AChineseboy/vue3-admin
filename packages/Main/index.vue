<template>
  <main class="zm-main">
    <slot></slot>
  </main>
</template>
<script>
export default {
  name: 'ZmMain',
};
</script>
<style lang="less">
.zm-main {
  padding: 20px;
  flex: 1;
}
</style>
