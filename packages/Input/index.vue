<template>
  <div class="zm-input">
    <input
      type="text"
      class="zm-input-inner"
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :style="{paddingRight: iptRightPadding}"
      @blur="blur"
      @input="inputHandle"
    />
    <span
      class="zm-input-suffix"
      ref="suffix"
    >
      <slot name="suffix">
        <span
          class="zm-input-count"
          v-if="showWordLimit"
        >{{valLen}}/{{maxLength}}</span>
      </slot>

    </span>
  </div>
</template>
<script>
import { toRefs, ref, onMounted } from 'vue';
import emitter from '@/utils/emitter';

export default {
  name: 'ZmInput',
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      default: '',
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    maxLength: [String, Number],
  },
  setup(props, { emit }) {
    function blur() {
      emitter.emit('zm-form-blur', props.modelValue);
    }

    const valLen = ref(props.modelValue.toString().length);
    function inputHandle(e) {
      emit('update:modelValue', e.target.value);
      valLen.value = e.target.value.length;
    }
    const suffix = ref(null);

    const iptRightPadding = ref();
    onMounted(() => {
      iptRightPadding.value = `${suffix.value.offsetWidth + 20}px`;
    });
    return {
      iptRightPadding,
      suffix,
      valLen,
      blur,
      inputHandle,
      ...toRefs(props),
    };
  },
};
</script>
<style lang="less">
.zm-form-item.zm-form-item-error .zm-input .zm-input-inner {
  border-color: #f56c6c;
}
.zm-input {
  width: 100%;
  position: relative;
  .zm-input-inner {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    font-size: 14px;
    line-height: 40px;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s ease-in-out;
    &:focus {
      border-color: blue;
    }
    &:disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .zm-input-suffix {
    padding-right: 3px;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    .zm-input-count {
      background-color: #fff;
      height: 100%;
      display: inline-block;
      color: #909399;
      font-size: 12px;
      height: 100%;
      line-height: 1;
    }
  }
}
</style>
