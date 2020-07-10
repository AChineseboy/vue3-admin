<template>
  <div class="zm-form-item" :class="{'zm-form-item-error': !isSuccess}">
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

export default {
  name: 'ZmFormItem',
  props: {
    label: String,
    prop: String,
  },
  setup(props) {
    const thisRules = inject('rules')[props.prop];
    function addEvent(rule, handle) {
      const eventName = `zm-form-${rule.trigger}`;
      emitter.on(eventName, (...arg) => {
        handle(rule, arg);
      });
    }
    function checkRule(rule, val) {
      let requiredAuth = true;
      if (rule.required) {
        requiredAuth = String.prototype.trim.apply(val).length > 0;
      }
      // eslint-disable-next-line no-param-reassign
      rule.check = requiredAuth;
    }
    const isSuccess = ref(true);
    thisRules.forEach((item) => {
      addEvent(item, (...arg) => {
        checkRule(...arg);
        isSuccess.value = thisRules.every((rule) => rule.check);
      });
    });

    return {
      isSuccess,
      ...toRefs(props),
    };
  },
};
</script>
