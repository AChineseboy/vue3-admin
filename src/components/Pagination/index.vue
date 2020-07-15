<template>
  <div class="zm-pagination">
    <button class="zm-page-prev">prev</button>
    <ul class="zm-pager">
      <li
        class="zm-page-num"
        v-for="(item, index) in showPages"
        :key="index"
      >{{item}}</li>
    </ul>
    <button class="zm-page-next">prev</button>
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
  setup(props) {
    const showPages = computed(() => {
      const arr = [];
      for (let i = 0; i < props.pageSize; i += 1) {
        arr.push(props.currentPage + i);
      }
      return arr;
    });
    return {
      showPages,
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
