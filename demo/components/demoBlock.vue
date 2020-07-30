<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  setup(props, { slots }) {
    console.log(slots, '123');
  },
};
</script>
