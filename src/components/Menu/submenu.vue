<template>
  <li class="zm-submenu opened">
    <div class="submenu-title">
      <slot name="title"></slot>
      <i class="submenu-icon"></i>
    </div>
  </li>
</template>
<style lang="less" scoped>
.zm-submenu {
  .submenu-title {
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    position: relative;
    &:hover {
      background-color: blue;
    }
    .submenu-icon {
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: rgb(37, 56, 99);
      top: 50%;
      margin-top: -6px;
      right: 20px;
    }
  }
  &.opened{
    .submenu-icon{
      background-color: sandybrown;
    }
  }
}
</style>
