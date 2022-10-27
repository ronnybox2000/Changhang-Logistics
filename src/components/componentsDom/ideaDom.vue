<template>
  <div class="ideaDom main">
    <titleDomVue
      title="国际物流与货代观点资讯"
      content="琪邦国际货运与进口报关代理服务相关资讯，以更新的国际物流视角让您了解国际贸易与货运代理相关新闻动态。"
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
      </div>
    </div>
  </div>
</template>

<script>
import titleDomVue from './titleDom.vue';
export default {
  name: 'ideaDom',
  components: {
    titleDomVue
  },
  data() {
    return {
      ideaDomList: [
        {
          img: require('@/assets/img/1655409402519718956.jpg'),
          title: '现代国际物流体系的的几大核心维度',
          time: '2022 / 06 / 17  HOT'
        },
        {
          img: require('@/assets/img/1655409402519718956.jpg'),
          title: '现代国际物流体系的的几大核心维度',
          time: '2022 / 06 / 17  HOT'
        },
        {
          img: require('@/assets/img/1655409402519718956.jpg'),
          title: '现代国际物流体系的的几大核心维度',
          time: '2022 / 06 / 17  HOT'
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
    text-align: left;
    .ideaDom-list {
      &:nth-child(2) {
        margin: 0 20px;
      }
      .ideaDom-list-title {
        font-size: 16px;
        margin-top: 10px;
      }
      .ideaDom-list-time {
        font-size: 16px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
