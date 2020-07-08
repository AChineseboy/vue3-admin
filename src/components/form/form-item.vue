<template>
  <div class="zm-form-item" :class="{'zm-form-item-error': !isThrough}">
    <label class="zm-item-label">{{label}}</label>
    <div class="zm-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
// prettier-ignore
import {
  toRefs,
  inject,
  ref,
} from 'vue';
import emitter from '@/utils/emitter';

const useRule = (rules, prop) => {
  const isThrough = ref(true);
  emitter.on('zm-form-blur', (val) => {
    isThrough.value = rules[prop].some((rule) => {
      if (rule.required) {
        return String.prototype.trim.call(val).length > 0;
      }
      return true;
    });
  });
  return isThrough;
};
export default {
  name: 'ZmFormItem',
  props: {
    label: String,
    prop: String,
  },
  setup(props) {
    const rules = inject('rules');
    const isThrough = useRule(rules, props.prop);
    return {
      isThrough,
      ...toRefs(props),
    };
  },
};
</script>
