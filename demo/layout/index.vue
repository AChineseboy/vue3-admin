<template>
  <zm-container>
    <zm-aside>
      <app-menu></app-menu>
    </zm-aside>
    <zm-container>
      <zm-header>Header</zm-header>
      <zm-main>
        <router-view></router-view>
      </zm-main>
      <zm-footer>Footer</zm-footer>
    </zm-container>
  </zm-container>
</template>
<script>

import AppMenu from './components/AppMenu.vue';

export default {
  components: {
    AppMenu,
  },
};
</script>
<style>
.zm-header,
.zm-footer {
  background-color: #b3c0d1;
}
.zm-main {
  background-color: #e9eef3;
}

.zm-aside {
  background-color: #d3dce6;
}
.zm-container{
  height: 100%;
}
</style>
