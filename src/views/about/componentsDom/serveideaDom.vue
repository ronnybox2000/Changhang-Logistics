<template>
  <div class="ideaDom main">
    <titleDomVue
      title="服务优势"
      content="专业、安全、高效率，琪邦致力以优质货代服务让客户更满意！"
      myColor="#fff"
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
          img: require('@/assets/img/about-qibang-icon01.png'),
          title: '快速响应',
          time: '规划优势航线或航班，合理安排停靠港口，按需定制仓储及配送方案，实时反馈货物状态，提高运输效率'
        },
        {
          img: require('@/assets/img/about-qibang-icon02.png'),
          title: 'KBANS服务系统',
          time: '一对一专属定制货代解决方案，全程物流跟踪，短信、邮件实时通知，形成精准的货代数据统计表'
        },
        {
          img: require('@/assets/img/about-qibang-icon03.png'),
          title: '专业团队',
          time: '10年资深经验的货代操作团队，掌控货物运输环节，以专业化技术、现代化管理，提供精细化服务'
        },
        {
          img: require('@/assets/img/about-qibang-icon04.png'),
          title: '高效专业',
          time: '从客户需求出发，整合策划、网站等合作资源，提供同等质量服务，减少中间环节，提升业务效率'
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
    .ideaDom-list {
      width: 260px;
      margin: 10px 28px;
      .ideaDom-list-img{
        width: 170px;
        height: 170px;
        margin-left: 40px;
      }
      .ideaDom-list-img:hover{
        background-color: aliceblue;
        border-radius: 50%;
      }
      .ideaDom-list-img img:hover{
        filter: invert(50%);
      }
      .ideaDom-list-title {
        font-size: 20px;
        font-weight: bolder;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .ideaDom-list-time {
        font-size: 14px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
