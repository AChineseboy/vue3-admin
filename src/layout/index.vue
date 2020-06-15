<template>
  <section class="wrapper">
    <app-menu></app-menu>
    <div class="container">
      <router-view />
    </div>
  </section>
</template>
<script>
import AppMenu from './components/AppMenu.vue';

export default {
  components: {
    AppMenu,
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
