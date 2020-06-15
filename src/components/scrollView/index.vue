<template>
  <section class="scroll-view">
    <ul class="scroll-wrap" ref="wrap" @scroll="scrollHandle">
      <li v-for="(item, index) in 200" :key="index">{{index}}</li>
    </ul>
    <div class="scrollbar" @click="clickBarHandle">
      <div class="scrollbar-thumb" ref="barThumb"></div>
    </div>
  </section>
</template>
<script>
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const wrap = ref(null);
    const barThumb = ref(null);
    function updata() {
      const { scrollHeight, clientHeight } = wrap.value;
      const heightPercentage = (clientHeight / scrollHeight) * 100;
      barThumb.value.style.height = heightPercentage < 100 ? `${heightPercentage}%` : '';
    }
    function scrollHandle() {
      const { scrollTop, clientHeight } = wrap.value;
      barThumb.value.style.transform = `translateY(${(scrollTop / clientHeight) * 100}%)`;
    }

    function clickBarHandle(e) {
      const { scrollHeight, clientHeight } = wrap.value;
      const barPos = e.target.getBoundingClientRect().top;
      const offset = Math.abs(barPos - e.clientY);
      const thumbHalf = barThumb.value.clientHeight / 2;
      const thumbPositionPercentage = (offset - thumbHalf) / clientHeight;
      wrap.value.scrollTop = thumbPositionPercentage * scrollHeight;
    }
    onMounted(() => {
      updata();
    });
    return {
      wrap,
      barThumb,
      scrollHandle,
      clickBarHandle,
    };
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
  overflow-y: scroll;
  margin-right: -17px;
}
.scrollbar {
  width: 6px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(19, 158, 89, 0.514);
  border-radius: 45px;

  .scrollbar-thumb {
    cursor: pointer;
    border-radius: 45px;
    background-color: red;
  }
}
</style>
