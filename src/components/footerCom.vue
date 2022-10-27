<template>
  <div class="footerCom">
    <div class="footerCom-center main">
      <div class="footerCom-left">
        <div class="p1">
          琪邦（Kbans）国际，保留网站版权（设计、开发）所有权利。
        </div>
        <div class="p2">
          <div v-for="(item, index) in leftList" :key="index">
            {{ item.title }}
          </div>
        </div>
        <div class="p3">
          本人声明本项目抄袭琪邦（Kbans）国际用于完成实训作业
        </div>
      </div>
      <div class="footerCom-right">
        <div>
          Tel:400-165-2866 &nbsp; 021-52835575咨询热线，网站策划顾问值守
        </div>
        <div>地址：上海杨浦区隆昌路619号城市概念10号A栋2F</div>
        <div>MSN:Kbans365@hotmail.com</div>
        <div>网站技术支持：上海网站建设公司&上海SEO优化公司-派琪网络</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerCom',
  data() {
    return {
      leftList: [
        {
          title: '关于琪邦'
        },
        {
          title: '货代服务'
        },
        {
          title: '服务优势'
        },
        {
          title: '货代服务系统'
        },
        {
          title: '服务支持'
        },
        {
          title: '客户案例'
        },
        {
          title: '联系我们'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.footerCom {
  background-color: #000000;
  padding: 60px 0;
  color: #969696;
  font-size: 13px;
  text-align: left;
  .footerCom-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footerCom-right {
      div {
        text-align: right;
        margin: 5px 0;
        &:last-child {
          margin-top: 10px;
        }
      }
    }
  }
  .footerCom-left {
    width: 645px;
    .p2 {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #333;
      margin: 10px 0;
      div {
        margin-right: 30px;
      }
    }
  }
}
</style>
