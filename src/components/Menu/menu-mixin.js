// TODO: 替代mixin
export default {
  computed: {
    paddingStyle() {
      let padding = 20;
      let parent = this.$parent;
      while (parent.$options.name !== 'ZmMenu') {
        padding += 20;
        parent = parent.$parent;
      }
      return {
        padding: `0 ${padding}px`,
      };
    },
  },
};
