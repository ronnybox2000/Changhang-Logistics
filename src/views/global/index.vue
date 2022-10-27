<template>
  <div class="global">
    <div class="global-top">
      <topCom></topCom>
      <div class="main-info" style="color:#fff;font-size: 50px;">
        <div class="TitleDomVue">
          <TitleDomVue :title="'琪邦国际物流货代服务'" content="以更高的服务质量，打造上海货代公司一线服务品牌">
          </TitleDomVue>
        </div>
        <div class="global-icon">
          <div class="icon"><img src="@/assets/img/fuwu1_0001.png" alt="" /></div>
          <div class="icon"><img src="@/assets/img/fuwu_0002.png" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="main">
        <breadcrumbVue></breadcrumbVue>
      </div>
    </div>
    <div class="global-content">
      <GlobalContent></GlobalContent>
    </div>
    <div class="trust">
      <div class="main trust-main">
        <div class="trust-left">
          <div class="trustH1">
            <span class="trangle_01"></span> 琪邦国际物流/货运代理
            <span class="trangle_02"></span>
          </div>
          <div class="trustP">关于琪邦</div>
          <div class="trustContent">
            上海琪邦国际货代是一家集国际海运、国际空运，进口报关清关代理为一体的国际物流货运代理公司。
            琪邦以国际海运为核心，航线齐全，价格合理；合作的企业覆盖全面，有着传统货代无可比拟的优势。
          </div>
          <div class="btn">查看更多</div>
          <div class="icon-box">
            <div class="icon-box-list" v-for="(item, index) in iconBoxData" :key="index">
              <div class="icon-box-img"><img :src="item.img" alt="" /></div>
              <div class="icon-box-title">{{ item.title }}</div>
              <div class="icon-box-content">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <div class="trust-right">
          <img src="@/assets/img/main-index-img05.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="idea">
      <ideaDomVue></ideaDomVue>
      <div class="idea-ul main">
        <div class="idea-li" v-for="(item, index) in ideaUlDat" :key="index">
          <ul>
            <li v-for="(_item, _index) in item.content" :key="_index">
              {{ _item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footercontainer">
      <div class="main">
        <div class="footer-tabs-container"></div>
      </div>
    </div>
    <footerComVue></footerComVue>
  </div>
</template>

<script>
import topCom from '@/components/topCom.vue';
import TitleDomVue from '@/components/componentsDom/titleDom.vue';
import breadcrumbVue from '@/components/breadcrumb.vue';
import GlobalContent from '../global/componentsDom/global-content.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
import footerComVue from '@/components/footerCom.vue';
export default {
  name: 'global',
  components: {
    topCom,
    TitleDomVue,
    breadcrumbVue,
    GlobalContent,
    ideaDomVue,
    footerComVue
  },
  data() {
    return {
      iconBoxData: [
        {
          img: require('@/assets/img/main-index-icon06.png'),
          title: '价格透明',
          content: '透明化的价格可以让您避免陷入高额运费的货代陷阱。'
        },
        {
          img: require('@/assets/img/main-index-icon06.png'),
          title: '价格透明',
          content: '透明化的价格可以让您避免陷入高额运费的货代陷阱。'
        },
        {
          img: require('@/assets/img/main-index-icon06.png'),
          title: '价格透明',
          content: '透明化的价格可以让您避免陷入高额运费的货代陷阱。'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.global {
  .global-top {
    padding-top: 30px;
    height: 800px;
    background: url('@/assets/img/fuwu_banner.jpg') no-repeat 50% 50%;
    font-size: 18px;
    color: #333;
    .main-info {
      margin-top: 170px;
      .global-icon {
        margin: 0 auto;
        width: 240px;
        height: 81px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .breadcrumbs {
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
  }
  .global-content {
    background: #fff;
  }
  .trust {
    background: url('@/assets/img/main-index-img06.jpg');
    padding: 80px 0;
    .trust-main {
      display: flex;
      color: #fff;
      text-align: left;
      .trust-left {
        .trustH1 {
          font-size: 30px;
          margin-bottom: 40px;
        }
        .trustP {
          padding-left: 24px;
          font-size: 22px;
          margin-bottom: 30px;
        }
        .trustContent {
          font-size: 14px;
          padding-left: 24px;
          color: #ccd6e7;
        }
        .btn {
          width: 106px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          font-size: 14px;
          color: #ccd6e7;
          border: 1px solid #5c90c4;
          border-radius: 18px;
          margin: 35px 0 35px 24px;
        }
      }
      .icon-box {
        display: flex;
        padding-left: 24px;
        .icon-box-list {
          margin-right: 10px;
          .icon-box-title {
            margin: 15px 0;
          }
        }
      }
    }
  }
  .idea {
    background-color: #f3f3f3;
    padding-bottom: 80px;
    .idea-ul {
      border-top: 1px solid #ebebec;
      padding-top: 20px;
      display: flex;
      .idea-li {
        width: 393px;
        text-align: left;
        margin-left: 20px;
        li {
          list-style: circle;
          color: #666666;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
