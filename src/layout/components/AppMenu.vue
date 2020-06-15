<template>
  <section class="menu">
    <scroll-view></scroll-view>
  </section>
</template>
<script>
import scrollView from '@/components/scrollView/index.vue';

export default {
  components: {
    scrollView,
  },
};
</script>
<style lang="less" scoped>
.menu {
  width: 240px;
  height: 100%;
}
</style>
