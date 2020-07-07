<template>
  <div class="zm-form-item">
    <label class="zm-item-label">{{label}}</label>
    <div class="zm-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { toRefs } from 'vue';

export default {
  name: 'ZmFormItem',
  props: {
    label: String,
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
};
</script>
<style lang="less">

</style>
