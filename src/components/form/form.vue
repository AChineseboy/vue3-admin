<template>
  <form class="zm-form" :class="labelPosClass">
    <slot></slot>
  </form>
</template>
<script>
import { computed } from 'vue';

export default {
  name: 'ZmForm',
  props: {
    labelPosition: {
      type: String,
      default: 'left',
    },
  },
  setup(props) {
    const labelPosClass = computed(() => `zm-form-label-${props.labelPosition}`);
    return {
      labelPosClass,
    };
  },
};
</script>
<style lang="less">
.zm-form {
  &.zm-form-label-left {
    .zm-form-item .zm-item-label {
      text-align: left;
    }
  }
  &.zm-form-label-right {
    .zm-form-item .zm-item-label {
      text-align: right;
    }
  }
  &.zm-form-label-top {
    .zm-form-item {
      flex-direction: column;
      align-items: start;
      justify-content: center;
      .zm-item-label {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
  .zm-form-item {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    .zm-item-label {
      width: 80px;
      margin-right: 12px;
      font-size: 14px;
    }
  }
}
</style>
