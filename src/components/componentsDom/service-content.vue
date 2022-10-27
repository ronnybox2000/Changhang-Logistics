<template>
  <div class="service-content main">
    <titleDomVue
      title="kbans专属定制的国际物流货代管理系统"
      content="琪邦的可视化数据管理，让您实时掌握国际物流货物的走向，意在让您体验更专业的国际货运代理与国际物流服务，琪邦亦是行业一线信息化管理的国际物流公司。"
    ></titleDomVue>
    <div class="service-box">
      <div
        class="service-list"
        v-for="(item, index) in serviceList"
        :key="index"
      >
        <div class="service-list-img"><img :src="item.img" alt="" /></div>
        <div class="service-list-title">{{ item.title }}</div>
        <div class="service-list-content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import titleDomVue from './titleDom.vue';
export default {
  name: 'service-content',
  components: {
    titleDomVue
  },
  data() {
    return {
      serviceList: [
        {
          img: require('@/assets/img/service-modification-img01.jpg'),
          title: '手机短信实时跟踪',
          content:
            '提供专业短信送达服务，覆盖多领域，高到达率，实现国际物流货物精准跟踪'
        },
        {
          img: require('@/assets/img/service-modification-img01.jpg'),
          title: '手机短信实时跟踪',
          content:
            '提供专业短信送达服务，覆盖多领域，高到达率，实现国际物流货物精准跟踪'
        },
        {
          img: require('@/assets/img/service-modification-img01.jpg'),
          title: '手机短信实时跟踪',
          content:
            '提供专业短信送达服务，覆盖多领域，高到达率，实现国际物流货物精准跟踪'
        },
        {
          img: require('@/assets/img/service-modification-img01.jpg'),
          title: '手机短信实时跟踪',
          content:
            '提供专业短信送达服务，覆盖多领域，高到达率，实现国际物流货物精准跟踪'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.service-content {
  .service-box {
    display: flex;
    .service-list {
      width: 287px;
      margin-left: 20px;
      .service-list-title {
        font-size: 16px;
        margin: 20px 0 8px;
      }
    }
  }
}
</style>
