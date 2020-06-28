<template>
  <div class="menu">
    <zm-menu>
      <zm-menu-item index="1">导航一</zm-menu-item>
      <zm-menu-item index="2">导航二</zm-menu-item>
      <zm-menu-item index="3">导航三</zm-menu-item>
      <zm-submenu index="4">
        <template v-slot:title>
          <div>
            <span>导航四</span>
          </div>
        </template>
      </zm-submenu>
    </zm-menu>
  </div>
</template>
<script>
import { ZmMenu, ZmMenuItem, ZmSubmenu } from '@/components/Menu/index';

export default {
  components: {
    ZmMenu,
    ZmMenuItem,
    ZmSubmenu,
  },
};
</script>
<style lang="less" scoped>
.menu {
  width: 200px;
}
</style>
