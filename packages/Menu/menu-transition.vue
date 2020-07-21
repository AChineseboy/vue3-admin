<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave"
  >
    <slot />
  </transition>
</template>
<script>
/* eslint-disable no-param-reassign */
import { Transition } from 'vue';
import { addClass, removeClass } from '@/utils/dom';

export default {
  components: {
    Transition,
  },
  setup() {
    function beforeEnter(el) {
      addClass(el, 'transition');
      el.style.height = '0';
    }
    function enter(el) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.overflow = 'hidden';
    }
    function afterEnter(el) {
      el.style.height = '';
      el.style.overflow = '';
    }
    function beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`;
      el.style.overflow = 'hidden';
    }
    function leave(el) {
      // add setTimeOut or it will jump to zero height suddenly, weireds
      setTimeout(() => {
        el.style.height = '0';
      }, 0);
    }
    function afterLeave(el) {
      el.style.height = '';
      removeClass(el, 'transition');
    }
    return {
      beforeEnter,
      enter,
      leave,
      afterLeave,
      afterEnter,
      beforeLeave,
    };
  },
};
</script>
<style>
.transition {
  transition: 0.3s height ease-in-out;
}
</style>
