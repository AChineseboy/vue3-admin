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
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #434a50;
  }
  &.active {
    color: #ffd04b;
  }
}
</style>
