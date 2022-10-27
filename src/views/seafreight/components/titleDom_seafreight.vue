<template>
  <div class="titleDom">
    <div class="main">
      <div class="titleDom-h1">
        <span class="trangle_01"></span> {{ title }}
        <span class="trangle_02"></span>
      </div>
      <div class="titleDom-content" :style="{ color: myColor }">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titleDom',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    myColor: {
      type: String,
      default: '#FFFFFF'
    }
  }
};
</script>

<style scoped lang="less">
.titleDom {
  // padding: 80px 0 30px;
  .titleDom-h1 {
    padding: 10px;
    font-size: 35px;
    .trangle_01 {
      display: inline-block;
      width: 0;
      height: 0;
      border: 8px solid #e62422;
      vertical-align: super;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    .trangle_02 {
      display: inline-block;
      width: 0;
      height: 0;
      border: 8px solid #e62422;
      vertical-align: sub;
      border-left-color: transparent;
      border-top-color: transparent;
    }
  }
  .titleDom-content {
    font-size: 18px;
    color: #FFFFFF;
  }
}
</style>
