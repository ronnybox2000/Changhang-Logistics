<template>
  <div class="ideaDom main">
    <titleDomVue title="国际空运服务内容 " content="跟踪定制项目流程，优化运转环节，提供完善全面的一站式空运服务。"></titleDomVue>
    <div class="ideaDom-box">
      <div class="ideaDom-list" v-for="(item, index) in ideaDomList" :key="index">
        <div class="ideaDom-list-img"><img :src="item.img" alt="" /></div>
        <div class="ideaDom-list-title">{{ item.title }}</div>
        <div class="ideaDom-list-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import titleDomVue from '@/components/componentsDom/titleDom.vue';
export default {
  name: 'ideaDom',
  components: {
    titleDomVue
  },
  data() {
    return {
      ideaDomList: [
        {
          img: require('@/assets/img/service-content-img01.jpg'),
          title: '仓储与分拨',
          content: '全链式仓储管理，流程化运作严格把控配送及效率。'
        },
        {
          img: require('@/assets/img/service-content-img01.jpg'),
          title: '仓储与分拨',
          content: '全链式仓储管理，流程化运作严格把控配送及效率。'
        },
        {
          img: require('@/assets/img/service-content-img01.jpg'),
          title: '仓储与分拨',
          content: '全链式仓储管理，流程化运作严格把控配送及效率。'
        },
        {
          img: require('@/assets/img/service-content-img01.jpg'),
          title: '仓储与分拨',
          content: '全链式仓储管理，流程化运作严格把控配送及效率。'
        },
        {
          img: require('@/assets/img/service-content-img01.jpg'),
          title: '仓储与分拨',
          content: '全链式仓储管理，流程化运作严格把控配送及效率。'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.ideaDom {
  .ideaDom-box {
    display: flex;
    justify-content: space-between;
    .ideaDom-list {
      padding-top: 10px;
      width: 261px;
      .ideaDom-list-title {
        margin-top: 20px;
        color: #202020;
        font-size: 18px;
        font-weight: bold;
      }
      .ideaDom-list-content {
        padding: 0 15px;
        color: #7e7e7e;
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
}
</style>
