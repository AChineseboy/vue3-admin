<template>
  <zm-scroll-view class="scroll-box">
    <zm-menu class="menu">
      <zm-menu-item index="1">导航一</zm-menu-item>
      <zm-menu-item index="2">导航二</zm-menu-item>
      <zm-menu-item index="3">导航三</zm-menu-item>
      <zm-submenu index="4">
        <template v-slot:title>
          <div>
            <span>导航四</span>
          </div>
        </template>
        <zm-menu-item index="5">选项一</zm-menu-item>
        <zm-menu-item index="6">选项二</zm-menu-item>
        <zm-menu-item index="7">选项三</zm-menu-item>
        <zm-submenu index="5">
          <template #title>
            <div>
              <span>二级菜单</span>
            </div>
          </template>
          <zm-menu-item index="5-1">1</zm-menu-item>
          <zm-menu-item index="5-2">2</zm-menu-item>
          <zm-menu-item index="5-3">3</zm-menu-item>
        </zm-submenu>
      </zm-submenu>
      <zm-submenu index="8">
        <template v-slot:title>
          <div>
            <span>导航五</span>
          </div>
        </template>
        <zm-menu-item index="5">选项一</zm-menu-item>
        <zm-menu-item index="6">选项二</zm-menu-item>
        <zm-menu-item index="7">选项三</zm-menu-item>
      </zm-submenu>
      <zm-menu-item index="9">9</zm-menu-item>
      <zm-menu-item index="12">12</zm-menu-item>
    </zm-menu>
  </zm-scroll-view>
</template>
<script>

export default {

};
</script>
<style lang="less" scoped>
.menu {
  width: 200px;
}
.scroll-box{
  background-color: #545c64;
}
</style>
