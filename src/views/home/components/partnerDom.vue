<template>
  <div class="partnerDom main">
    <titleDomVue
      title="琪邦国际物流&国际货运代理合作伙伴"
      content="琪邦与100多个国家全球40多个国际物流海运公司形成战略合作，为众多贸易客户提供更有力的国际货运代理与国际物流服务。"
    ></titleDomVue>
    <div class="partnerDom-box">
      <div
        class="partnerDom-list"
        v-for="(item, index) in partnerDomList"
        :key="index"
      >
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import titleDomVue from '@/components/componentsDom/titleDom.vue';
export default {
  name: 'partnerDom',
  components: {
    titleDomVue
  },
  data() {
    return {
      partnerDomList: [
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        },
        {
          img: require('@/assets/img/1.png')
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.partnerDom {
  .partnerDom-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    border-top: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    .partnerDom-list {
      width: 20%;
      height: 124px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
    }
  }
}
</style>
