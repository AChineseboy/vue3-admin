<template>
  <li
    class="menu-item"
    :class="{active: activeItem === index}"
    :style="paddingStyle"
    @click="menuItemHandle"
  >
    <slot></slot>
  </li>
</template>
<script>
import { inject } from 'vue';
import emitter from '@/utils/emitter';
import menuMixin from './menu-mixin';

export default {
  name: 'ZmMenuItem',
  props: {
    index: String,
  },
  mixins: [menuMixin],
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
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
  &.active {
    color: green;
  }
}
</style>
