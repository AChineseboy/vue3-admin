<template>
  <li class="menu-item" :class="{active: activeItem === index}" @click="menuItemHandle">
    <slot></slot>
  </li>
</template>
<script>
import { inject } from 'vue';
import emitter from '@/utils/emitter';

export default {
  name: 'ZmMenuItem',
  props: {
    index: String,
  },
  setup(props) {
    const activeItem = inject('activeItem');
    function menuItemHandle() {
      emitter.emit('item-click', props.index);
    }
    return {
      menuItemHandle,
      activeItem,
    };
  },
};
</script>
<style lang="less" scoped>
.menu-item {
  height: 56px;
  line-height: 56px;
  padding: 0 20px;
  padding-right: 0;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
  &.active {
    color: green;
  }
}
</style>
