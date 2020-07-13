<template>
  <form class="zm-form" :class="labelPosClass">
    <slot></slot>
  </form>
</template>
<script>
import { computed, provide } from 'vue';

export default {
  name: 'ZmForm',
  props: {
    labelPosition: {
      type: String,
      default: 'left',
    },
    rules: Object,
    model: Object,
  },
  setup(props) {
    const labelPosClass = computed(() => `zm-form-label-${props.labelPosition}`);

    provide('rules', props.rules);
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
    .zm-form-item-error-msg {
      position: absolute;
      top: 100%;
      left: 0;
      color: #f56c6c;
      font-size: 12px;
    }
    &.zm-form-item-error .zm-input .zm-input-inner {
      border-color: #f56c6c;
    }
    .zm-item-content{
      position: relative;
    }
    .zm-item-label {
      width: 80px;
      margin-right: 12px;
      font-size: 14px;
    }
  }
}
</style>
