<template>
  <div class="ideaDom main">
    <titleDomVue
      title="昌航资讯"
      content="昌航国际货运与进口报关代理服务相关资讯，以更新的国际物流视角让您了解国际贸易与货运代理相关新闻动态。"
    ></titleDomVue>
    <div class="ideaDom-box">
      <div
        class="ideaDom-list"
        v-for="(item, index) in ideaDomList"
        :key="index"
      >
        <div class="ideaDom-list-img"><img :src="item.img" alt="" /></div>
        <div class="ideaDom-list-title">{{ item.title }}</div>
        <div class="ideaDom-list-time">{{ item.time }}</div>
        <div class="ideaDom-list-p">{{ item.p }}</div>
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
          img: require('@/assets/img/1654800678557743429.jpg'),
          title: '怎样去寻找可靠的上海国际物流公司？',
          time: '2022 / 06 / 17  HOT',
          p: '外贸代理行业竞争激烈，毛利率非常透明。特别是近年来，大型综合外贸服务平台和省级综合外贸服务平台的兴起...'
        },
        {
          img: require('@/assets/img/1655409402519718956.jpg'),
          title: '现代国际物流体系的的几大核心维度',
          time: '2022 / 06 / 17  HOT',
          p: '近年来，跨境电商行业呈现大幅增长，货物吞吐量明显上升。后疫情时代，多种不确定因素影响着跨境电商物流...'
        },
        {
          img: require('@/assets/img/1655504137398132215.jpg'),
          title: '国际货运时效被延误的几个可能因素',
          time: '2022 / 06 / 17  HOT',
          p: '国际货运在我们的生活和工作中起着非常重要的作用，无论是企业还是个人。物流是市场发展的重要组成部分...'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.ideaDom {
  margin-bottom: 80px;
  .ideaDom-box {
    display: flex;
    text-align: left;
    .ideaDom-list {
      &:nth-child(2) {
        margin: 0 20px;
      }
      .ideaDom-list-title {
        font-size: 16px;
        margin: 10px 0;
      }
      .ideaDom-list-time {
        font-size: 16px;
        margin-bottom: 30px;
        color: rgba(0, 0, 0, 0.386);
      }
      .ideaDom-list-p{
        font-size: 14px;
        color: rgba(0, 0, 0, 0.477);
      }
    }
  }
}
</style>
