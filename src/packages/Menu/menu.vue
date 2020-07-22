<template>
  <ul class="zm-menu">
    <slot></slot>
  </ul>
</template>
<style lang="less" scoped>
</style>
<script>
import emitter from '@/utils/emitter';
import { provide, ref } from 'vue';

export default {
  name: 'ZmMenu',
  setup() {
    const activeItem = ref(null);
    emitter.on('item-click', (index) => {
      activeItem.value = index;
    });

    const openedMenus = ref([]);
    const openMenu = (index) => {
      openedMenus.value.push(index);
    };
    const closeMenu = (subMenuIndex) => {
      const index = openedMenus.value.indexOf(subMenuIndex);
      openedMenus.value.splice(index, 1);
    };

    provide('activeItem', activeItem);
    provide('openedMenus', openedMenus);
    provide('openMenu', openMenu);
    provide('closeMenu', closeMenu);
  },
};
</script>
<style lang="less" scoped>
.zm-menu {
  background-color: #545c64;
}
</style>
