// TODO: 替代mixin
export default {
  computed: {
    paddingStyle() {
      let padding = 20;
      let parent = this.$parent;
      console.log(parent, parent.$options, this.$options.name);
      while (parent && parent.$options.name !== 'ZmMenu') {
        if (parent.$options.name === 'ZmSubmenu') {
          padding += 20;
        }
        // if (parent.$parent === null) {
        //   console.log(parent.$options);
        // }
        parent = parent.$parent;
      }
      return {
        padding: `0 ${padding}px`,
      };
    },
  },
};
