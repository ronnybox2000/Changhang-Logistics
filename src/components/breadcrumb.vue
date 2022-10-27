<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in $router.currentRoute.matched"
        :key="index"
        :to="item.path === $router.currentRoute.path ? '' : { path: item.path }"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadcrumb'
};
</script>

<style scoped lang="less">
// .breadcrumb {
// }
</style>
