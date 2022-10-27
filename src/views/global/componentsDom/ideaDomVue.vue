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
          img: require('@/assets/img/air-service-img01.jpg'),
          title: '多渠道灵活航线',
          content: '根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运'
        },
        {
          img: require('@/assets/img/air-service-img01.jpg'),
          title: '多渠道灵活航线',
          content: '根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运'
        },
        {
          img: require('@/assets/img/air-service-img01.jpg'),
          title: '多渠道灵活航线',
          content: '根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运'
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
    justify-content: space-evenly;
    .ideaDom-list {
      background: #f5f5f5;
      padding-top: 10px;
      width: 403px;
      height: 370px;
      .ideaDom-list-title {
        margin-top: 10px;
        color: #202020;
        font-size: 18px;
        font-weight: bold;
      }
      .ideaDom-list-content {
        letter-spacing: normal;
        padding: 5px 0;
        color: #7e7e7e;
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
}
</style>
