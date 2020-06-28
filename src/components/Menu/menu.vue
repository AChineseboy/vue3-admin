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
    provide('activeItem', activeItem);
  },
};
</script>
<style lang="less" scoped>
.zm-menu {
  background-color: red;
}
</style>
