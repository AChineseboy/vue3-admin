<template>
  <li class="menu-item" :class="{active: activeItem === index}" @click="menuItemHandle" ref="item">
    <slot></slot>
  </li>
</template>
<script>
import { inject, onMounted, ref } from 'vue';
import emitter from '@/utils/emitter';
import usePaddingStyle from './paddingStyle';

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

    const item = ref(null);
    onMounted(() => {
      usePaddingStyle(item);
    });

    return {
      menuItemHandle,
      activeItem,
      item,
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
