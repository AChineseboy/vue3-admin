<template>
  <li class="zm-submenu" :class="{opened: isOpen}">
    <div class="submenu-title" @click="menuClickHandle" :style="paddingStyle">
      <slot name="title"></slot>
      <i class="submenu-icon"></i>
    </div>
    <ul class="menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
import { inject, computed } from 'vue';
import menuMixin from './menu-mixin';

export default {
  name: 'ZmSubmenu',
  props: {
    index: String,
  },
  mixins: [menuMixin],
  setup(props) {
    const openedMenus = inject('openedMenus');
    const openMenu = inject('openMenu');
    const closeMenu = inject('closeMenu');

    const isOpen = computed(() => openedMenus.value.includes(props.index));
    const menuClickHandle = () => {
      if (isOpen.value) {
        closeMenu(props.index);
      } else {
        openMenu(props.index);
      }
    };
    return {
      isOpen,
      menuClickHandle,
    };
  },
};
</script>
<style lang="less" scoped>
.zm-submenu {
  cursor: pointer;
  .submenu-title {
    height: 56px;
    line-height: 56px;
    position: relative;
    &:hover {
      background-color: blue;
    }
    .submenu-icon {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: rgb(37, 56, 99);
      top: 50%;
      margin-top: -6px;
      right: 20px;
    }
  }
  .menu {
    background-color: red;
    display: none;
  }
  &.opened {
    > .menu {
      display: block;
    }
    > .submenu-icon {
      background-color: sandybrown;
    }
  }
}
</style>
