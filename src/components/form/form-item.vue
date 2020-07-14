<template>
  <div class="zm-form-item" :class="{'zm-form-item-error': !isSuccess}">
    <label class="zm-item-label">{{label}}</label>
    <div class="zm-item-content">
      <slot></slot>
      <span class="zm-form-item-error-msg" v-show="!isSuccess">{{errorMsg}}</span>
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
      emitter.on(eventName, (val) => {
        handle(rule, val);
      });
    }
    function checkRule(rule, val) {
      let auth = true;
      if (rule.required) {
        auth = String.prototype.trim.apply(val).length > 0;
      } else if (rule.reg) {
        auth = rule.reg.test(val);
      } else if (rule.validator) {
        // eslint-disable-next-line no-param-reassign
        auth = rule.validator(val, rule);
      }
      // eslint-disable-next-line no-param-reassign
      rule.check = auth;
    }
    const isSuccess = ref(true);
    const errorMsg = ref('');
    thisRules.forEach((item) => {
      addEvent(item, (...arg) => {
        checkRule(...arg);
        isSuccess.value = thisRules.every((rule) => {
          if (!rule.check) {
            errorMsg.value = rule.message;
          }
          return rule.check;
        });
      });
    });

    return {
      isSuccess,
      errorMsg,
      ...toRefs(props),
    };
  },
};
</script>
