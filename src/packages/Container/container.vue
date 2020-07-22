<template>
  <section class="zm-container" :style="{flexDirection: isRow? 'row':'column'}">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'ZmContainer',
  setup(props, { slots }) {
    const isRow = slots.default().some((item) => item.type.name === 'ZmAside');
    return {
      isRow,
    };
  },
};
</script>
<style lang="less">
.zm-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
