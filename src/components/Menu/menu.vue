<template>
  <ul class="zm-menu">
    <slot @="itemClick"></slot>
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
    function itemClick() {}
    provide('activeItem', activeItem);
    // console.log(slots.default());
    return {
      itemClick,
    };
  },
};
</script>
<style lang="less" scoped>
.zm-menu {
  background-color: red;
}
</style>
