<template>
  <div class="zm-input">
    <input
      type="text"
      class="zm-input-inner"
      @blur="blur"
      @input="inputHandle"
      :value="modelValue"
    />
  </div>
</template>
<script>
import { toRefs } from 'vue';
import emitter from '@/utils/emitter';

export default {
  name: 'ZmInput',
  props: {
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    function blur() {
      emitter.emit('zm-form-blur', props.modelValue);
    }
    function inputHandle(e) {
      emit('update:modelValue', e.target.value);
    }
    return {
      blur,
      inputHandle,
      ...toRefs(props),
    };
  },
};
</script>
<style lang="less">
.zm-input .zm-input-inner {
  display: inline;
  border: 1px solid #dcdfe6;
}
</style>
