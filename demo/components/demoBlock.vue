<template>
  <div>
    <div>
      <h1>code</h1>
      <slot name="code"></slot>
    </div>
    <div>
      <h1>111</h1>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup(props, { slots }) {
    console.log(slots, '123');
  },
};
</script>
