<template>
  <section class="scroll-view">
    <h1>{{heightPercentage.value}}</h1>
    <div class="scroll-wrap" ref="wrap" @scroll="scrollHandle">
      <li v-for="(item, index) in 200" :key="index">{{index}}</li>
    </div>
    <div class="scrollbar" v-if="heightPercentage < 100" ref="bar" @click.self="clickBarHandle">
      <div
        class="scrollbar-thumb"
        ref="barThumb"
        :style="{height:`${heightPercentage}%`}"
        @mousedown="clickThumbHandle"
      ></div>
    </div>
  </section>
</template>
<script>
// reference https://github.com/ElemeFE/element/tree/dev/packages/scrollbar
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const wrap = ref(null);
    const bar = ref(null);
    const barThumb = ref(null);
    const heightPercentage = ref(0);
    function updata() {
      const { scrollHeight, clientHeight } = wrap.value;
      heightPercentage.value = (clientHeight / scrollHeight) * 100;
    }
    function scrollHandle() {
      const { scrollTop, clientHeight } = wrap.value;
      barThumb.value.style.transform = `translateY(${(scrollTop / clientHeight) * 100}%)`;
    }

    // click scrollbar
    function clickBarHandle(e) {
      const { scrollHeight, clientHeight } = wrap.value;
      const barPos = e.target.getBoundingClientRect().top;
      const offset = Math.abs(barPos - e.clientY);
      const thumbHalf = barThumb.value.clientHeight / 2;
      const thumbPositionProportion = (offset - thumbHalf) / clientHeight;
      wrap.value.scrollTop = thumbPositionProportion * scrollHeight;
    }

    // drag thumb
    let cursorDown = false;
    let axis;
    function clickThumbHandle(e) {
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      // eslint-disable-next-line operator-linebreak
      axis =
        e.currentTarget.offsetHeight - (e.clientY - e.currentTarget.getBoundingClientRect().top);
      cursorDown = true;
    }
    function mouseMoveHandle(e) {
      if (!cursorDown) return;
      // move offset
      const offset = (bar.value.getBoundingClientRect().top - e.clientY) * -1;
      // click pos of thumb
      const thumbClickPosition = barThumb.value.clientHeight - axis;
      // move proportion
      const thumbPositionProportion = (offset - thumbClickPosition) / bar.value.offsetHeight;

      wrap.value.scrollTop = thumbPositionProportion * wrap.value.scrollHeight;
    }
    function mouseUpHandle() {
      cursorDown = false;
    }
    document.addEventListener('mousemove', mouseMoveHandle);
    document.addEventListener('mouseup', mouseUpHandle);

    onMounted(() => {
      updata();
    });
    onUnmounted(() => {
      document.removeEventListener('mousemove', mouseMoveHandle);
      document.removeEventListener('mouseup', mouseUpHandle);
    });
    return {
      wrap,
      bar,
      barThumb,
      heightPercentage,
      scrollHandle,
      clickBarHandle,
      clickThumbHandle,
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
