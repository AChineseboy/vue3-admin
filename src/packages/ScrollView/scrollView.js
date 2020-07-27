/* eslint-disable no-unused-vars */
// prettier-ignore
import {
  ref,
  onMounted,
  onUnmounted,
  h,
} from 'vue';

import { addResizeEvent } from '@/utils/resize-event';
import './scrollView.less';

export default {
  name: 'ZmScrollView',
  props: {
    tag: {
      type: String,
      default: 'section',
    },
  },
  setup(props, { slots }) {
    const heightPercentage = ref(0);
    const barNode = ref(null);
    const barThumbNode = ref(null);
    const wrapNode = ref(null);

    let axis;
    let cursorDown = false;
    function mouseDownHandle(e) {
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
      const offset = (barNode.value.getBoundingClientRect().top - e.clientY) * -1;
      // click pos of thumb
      const thumbClickPosition = barThumbNode.value.clientHeight - axis;
      // move proportion
      const thumbPositionProportion = (offset - thumbClickPosition) / barNode.value.offsetHeight;

      wrapNode.value.scrollTop = thumbPositionProportion * wrapNode.value.scrollHeight;
    }
    function mouseUpHandle() {
      cursorDown = false;
    }
    const barThumb = () => (
      <div
        class="scrollbar-thumb"
        ref={barThumbNode}
        style={{ height: `${heightPercentage.value}%` }}
        onMouseDown={mouseDownHandle}
      ></div>
    );

    // click scrollbar
    function clickBarHandle(e) {
      const { scrollHeight, clientHeight } = wrapNode.value;
      const barPos = e.target.getBoundingClientRect().top;
      const offset = Math.abs(barPos - e.clientY);
      const thumbHalf = barThumbNode.value.clientHeight / 2;
      const thumbPositionProportion = (offset - thumbHalf) / clientHeight;
      wrapNode.value.scrollTop = thumbPositionProportion * scrollHeight;
    }
    const bar = () => (
      <div class="scrollbar" ref={barNode} onClick={clickBarHandle}>
        <barThumb></barThumb>
      </div>
    );

    function updata() {
      const { scrollHeight, clientHeight } = wrapNode.value;
      heightPercentage.value = (clientHeight / scrollHeight) * 100;
    }
    const scrollContent = () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      h(
        props.tag,
        {
          class: 'scoll-content',
          onVnodeMounted: (vnode) => {
            addResizeEvent(vnode.el, () => {
              updata();
            });
          },
        },
        [slots.default()],
      );
    function scrollHandle(e) {
      const { scrollTop, clientHeight } = e.target;
      barThumbNode.value.style.transform = `translateY(${(scrollTop / clientHeight) * 100}%)`;
    }
    const wrap = () => (
      <div class="scroll-wrap" ref={wrapNode} onScroll={scrollHandle}>
        <scrollContent></scrollContent>
      </div>
    );

    const scrollView = () => (
      <section class="scroll-view">
        <wrap />
        <bar />
      </section>
    );

    onMounted(() => {
      updata();
      document.addEventListener('mousemove', mouseMoveHandle);
      document.addEventListener('mouseup', mouseUpHandle);
    });
    onUnmounted(() => {
      document.removeEventListener('mousemove', mouseMoveHandle);
      document.removeEventListener('mouseup', mouseUpHandle);
    });
    return scrollView;
  },
};
