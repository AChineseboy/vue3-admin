<template>
  <li class="zm-submenu" ref="submenu" :class="{opened: isOpen}">
    <div class="submenu-title" ref="menu" @click="menuClickHandle">
      <slot name="title"></slot>
      <i class="submenu-icon"></i>
    </div>
    <menu-transition>
      <ul class="zm-menu-children" v-show="isOpen">
        <slot></slot>
      </ul>
    </menu-transition>
  </li>
</template>
<script>
// prettier-ignore
import {
  inject,
  computed,
  ref,
  onMounted,
} from 'vue';
import usePaddingStyle from './paddingStyle';
import menuTransition from './menu-transition.vue';

export default {
  name: 'ZmSubmenu',
  props: {
    index: String,
  },
  components: {
    menuTransition,
  },
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

    const submenu = ref(null);
    const menu = ref(null);
    onMounted(() => {
      usePaddingStyle(submenu, menu);
    });

    return {
      isOpen,
      menuClickHandle,
      submenu,
      menu,
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
    color: #fff;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #434a50;
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
  .zm-menu-children {
    background-color: #545c64;
  }
  &.opened {
    > .submenu-title .submenu-icon {
      background-color: sandybrown;
    }
  }
}
</style>
