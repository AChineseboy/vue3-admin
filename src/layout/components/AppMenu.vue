<template>
  <div class="menu">
    <zm-menu>
      <zm-menu-item index="1">123</zm-menu-item>
      <zm-menu-item index="2">123</zm-menu-item>
      <zm-menu-item index="3">123</zm-menu-item>
    </zm-menu>
  </div>
</template>
<script>
import { ZmMenu, ZmMenuItem } from '@/components/Menu/index';

export default {
  components: {
    ZmMenu,
    ZmMenuItem,
  },
};
</script>
<style lang="less" scoped>
.menu {
  width: 200px;
}
</style>
