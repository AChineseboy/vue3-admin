<template>
  <div
    class="zm-form-item"
    :class="{'zm-form-item-error': !isSuccess}"
  >
    <label
      class="zm-item-label"
      :style="{width: labelWidth}"
    >{{label}}</label>
    <div class="zm-item-content">
      <slot></slot>
      <span
        class="zm-form-item-error-msg"
        v-show="!isSuccess"
      >{{errorMsg}}</span>
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
// eslint-disable-next-line import/extensions
import emitter from '@/utils/emitter.js';

export default {
  name: 'ZmFormItem',
  props: {
    label: String,
    prop: String,
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  setup(props) {
    const thisRules = inject('rules')[props.prop] || [];
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
<style lang="less">
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

  .zm-item-content {
    position: relative;
  }
  .zm-item-label {
    margin-right: 12px;
    font-size: 14px;
  }
}
</style>
