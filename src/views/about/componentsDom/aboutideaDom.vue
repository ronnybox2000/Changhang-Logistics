<template>
  <div class="ideaDom main">
    <titleDomVue
      title="Kbans愿景使命&服务理念"
      content="一切以用户价值为根本，上海琪邦空运以严谨态度、优质服务、快捷速度，竭诚为广大客户提供超值空运服务！"
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
          img: require('@/assets/img/about-qibang-img01.jpg'),
          title: '愿景使命：助力一带一路，打造国内外一线货代服务品牌',
          time: '随着中国一带一路战略发展规化，琪邦整合品牌互联网化思维，为客户提供更好的货运代理服务，全国助力中国制造走向全世界。'
        },
        {
          img: require('@/assets/img/about-qibang-img02.jpg'),
          title: '服务理念：视服务为企业立身之本；爱业，敬业，精于业',
          time: '琪邦相信，客户的信任便是琪邦每位员工的责任，亦是琪邦持之以恒的动力。尽职尽责为每位客户的完成国际货运需求，即是对客户信任的回报。'
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
      background-color: #F4F5F9;
      &:nth-child(2) {
        margin: 0 48px;
      }
      .ideaDom-list-title {
        padding: 20px 25px 15px 30px;
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-top: 10px;
      }
      .ideaDom-list-time {
        font-size: 14px;
        padding: 0 20px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
