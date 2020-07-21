<template>
  <div class="zm-pagination">
    <button
      class="zm-page-prev"
      :class="{disabled: isPrevDisabled}"
      @click="prevHandle"
    >prev</button>
    <ul class="zm-pager">
      <li
        class="zm-page-num"
        :class="{active: currentPage === item}"
        v-for="(item, index) in pagers"
        :key="index"
        @click="pagerHandle(item)"
      >{{item}}</li>
    </ul>
    <button
      class="zm-page-next"
      :class="{disabled: isNextDisabled}"
      @click="nextHandle"
    >next</button>
  </div>
</template>
<script>
import { computed } from 'vue';

export default {
  name: 'ZmPagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const pageNums = computed(() => Math.ceil(props.total / props.pageSize));

    const pagers = computed(() => {
      const { currentPage } = props;
      const pageNumsVal = pageNums.value;
      let pagerCount;
      if (pageNumsVal <= 5) {
        pagerCount = pageNumsVal === 0 ? 1 : pageNumsVal;
      } else {
        pagerCount = 5;
      }
      const halfPagerCount = (pagerCount + 1) / 2;

      const arr = [];
      if (currentPage > halfPagerCount && currentPage < pageNumsVal - 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i += 1) {
          arr.push(i);
        }
      } else if (currentPage < 5) {
        for (let i = 1; i <= pagerCount; i += 1) {
          arr.push(i);
        }
      } else if (currentPage >= pageNumsVal - 2) {
        for (let i = pageNumsVal - 4; i <= pageNumsVal; i += 1) {
          arr.push(i);
        }
      }
      return arr;
    });

    const pagerHandle = (pageNum) => {
      emit('update:currentPage', pageNum);
    };

    // may be 0 so use <=
    const isNextDisabled = computed(() => props.currentPage >= pageNums.value);
    const nextHandle = () => {
      if (isNextDisabled.value) {
        return;
      }
      const nextPage = props.currentPage + 1;
      emit('update:currentPage', nextPage);
    };

    const isPrevDisabled = computed(() => props.currentPage === 1);
    const prevHandle = () => {
      if (isPrevDisabled.value) {
        return;
      }
      const prevPage = props.currentPage - 1;
      emit('update:currentPage', prevPage);
    };
    return {
      pagers,
      pagerHandle,
      nextHandle,
      prevHandle,
      isPrevDisabled,
      isNextDisabled,
    };
  },
};
</script>
<style lang="less">
.zm-pagination {
  display: flex;
  .zm-page-prev,
  .zm-page-next {
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 13px;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &.disabled {
      cursor: not-allowed;
    }
  }
  .zm-pager {
    display: flex;
    .zm-page-num {
      cursor: pointer;
      font-size: 13px;
      font-weight: 700;
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      transition: color 0.3s ease-in-out;
      &.active {
        cursor: context-menu;
        color: #409eff;
      }
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
