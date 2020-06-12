<template>
  <section class="wrapper">
    <app-menu></app-menu>
    <div class="container">
      <app-header></app-header>
      <router-view />
    </div>
  </section>
</template>
<script>
import AppHeader from './components/AppHeader.vue';
import AppMenu from './components/AppMenu.vue';

export default {
  components: {
    AppHeader,
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
