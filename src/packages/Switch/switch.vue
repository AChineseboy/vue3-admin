<template>
  <div
    class="zm-switch"
    @click="switchChange"
  >
    <span
      class="zm-switch__core"
      :class="{'zm-switch-check': isCheck, disabled}"
    ></span>
  </div>
</template>
<script>
import { computed } from 'vue';

export default {
  name: 'ZmSwitch',
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    checkValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    uncheckValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      deault: false,
    },
  },
  setup(props, { emit }) {
    const isCheck = computed(() => props.modelValue === props.checkValue);
    function switchChange() {
      if (props.disabled) return;
      const val = !isCheck.value ? props.checkValue : props.uncheckValue;
      emit('update:modelValue', val);
      emit('change', val);
    }

    return {
      switchChange,
      isCheck,
    };
  },
};
</script>
<style lang="less">
.zm-switch {
  .zm-switch__core {
    display: block;
    width: 40px;
    height: 20px;
    background-color: #fff;
    border-radius: 45px;
    position: relative;
    cursor: pointer;
    background-color: #ff4949;
    transition: background-color 0.3s ease-in-out;
    &::after {
      content: '';
      width: 16px;
      height: 16px;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -8px;
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
      background-color: #fff;
    }
    &.zm-switch-check {
      background-color: #13ce66;
      &::after {
        left: 100%;
        margin-left: -16px;
      }
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
}
</style>
