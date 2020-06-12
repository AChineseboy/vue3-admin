<template>
  <section class="scroll-view">
    <ul class="scroll-wrap">
      <li v-for="(item, index) in 50" :key="index">{{index}}</li>
    </ul>
    <div class="scrollbar">
      <div class="scrollbar-thumb"></div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    function useUpdata() {
      console.log('updata');
    }
    useUpdata();
  },
};
</script>
<style lang="less" scoped>
.scroll-view {
  overflow: hidden;
  height: 100%;
  position: relative;
}
.scroll-wrap {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-right: -17px;
}
.scrollbar {
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(19, 158, 89, 0.514);
  .scrollbar-thumb {
    height: 40%;
    background-color: red;
  }
}
</style>
