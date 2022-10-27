<template>
  <div class="home">
    <div class="home-top">
      <el-carousel :interval="5000" height="800px" arrow="always">
        <div class="top-com">
          <topCom></topCom>
        </div>
        <el-carousel-item v-for="(item, index) in 2" :key="item">
          <div :class="`carousel-image carousel-img${index + 1}`"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--  -->
    <div class="transportationInfo">
      <div class="main transportationInfoDom">
        <div class="transportationInfo-left">
          <div
            class="transportationInfoList"
            v-for="(item, index) in transportationInfoLeftData"
            :key="index"
          >
            <div><img :src="item.image" alt="" /></div>
            <div>{{ item.title }}</div>
            <div>{{ item.content }}</div>
          </div>
        </div>
        <div class="transportationInfo-right">
          <div class="transportationInfoH1">琪邦国际物流公司服务动态</div>
          <ul class="transportationInfoUl">
            <li
              class="transportationInfoLi"
              v-for="(item, index) in transportationInfoLi"
              :key="index"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="air-index-serviceDom">
      <titleDomVue
        :title="'琪邦国际物流货代服务'"
        content="琪邦国际货代公司能够为您全方位的国际物流服务，提供订舱、拖车、内装、报关、保险等一系列服务，并且琪邦拥有数千家合作车队、实时短信提醒追踪、保险费率低至万分之三。"
      ></titleDomVue>
      <div class="air-index-service main">
        <div
          class="air-index-service-list"
          v-for="(item, index) in serviceData"
          :key="index"
        >
          <div><img :src="item.img" alt="" /></div>
          <div class="introduce">
            <div>
              <div class="introduce-h3">{{ item.h3 }}</div>
              <div class="introduce-p">{{ item.p }}</div>
              <div class="introduce-content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 琪邦国际物流/货运代理 -->
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
            <div
              class="icon-box-list"
              v-for="(item, index) in iconBoxData"
              :key="index"
            >
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
    <!--  -->
    <div class="service">
      <serviceContentVue></serviceContentVue>
    </div>
    <!--  -->
    <div class="partner">
      <partnerDomVue></partnerDomVue>
    </div>
    <!--  -->
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
    <!--  -->
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
import footerComVue from '@/components/footerCom.vue';
import titleDomVue from '@/components/componentsDom/titleDom.vue';
import serviceContentVue from '@/components/componentsDom/service-content.vue';
import partnerDomVue from './components/partnerDom.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
export default {
  name: 'Home',
  components: {
    topCom,
    footerComVue,
    titleDomVue,
    serviceContentVue,
    partnerDomVue,
    ideaDomVue
  },
  data() {
    return {
      transportationInfoLeftData: [
        {
          title: '1线上海货代公司',
          content: '立足国际大都市上海，服务全国跨境贸易商',
          image: require('@/assets/img/air-index-icon01.png')
        },
        {
          title: '1线上海货代公司',
          content: '立足国际大都市上海，服务全国跨境贸易商',
          image: require('@/assets/img/air-index-icon01.png')
        },
        {
          title: '1线上海货代公司',
          content: '立足国际大都市上海，服务全国跨境贸易商',
          image: require('@/assets/img/air-index-icon01.png')
        }
      ],
      transportationInfoLi: [
        {
          title: '2022-06-17 现代国际物流体系的的几大核心维度'
        },
        {
          title: '2022-06-17 现代国际物流体系的的几大核心维度'
        },
        {
          title: '2022-06-17 现代国际物流体系的的几大核心维度'
        }
      ],
      serviceData: [
        {
          img: require('@/assets/img/main-index-img01.jpg'),
          h3: '国际海运拼箱/整箱 ',
          p: '费用合理，透明安全',
          content:
            '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
        },
        {
          img: require('@/assets/img/main-index-img01.jpg'),
          h3: '国际海运拼箱/整箱 ',
          p: '费用合理，透明安全',
          content:
            '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
        },
        {
          img: require('@/assets/img/main-index-img01.jpg'),
          h3: '国际海运拼箱/整箱 ',
          p: '费用合理，透明安全',
          content:
            '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
        },
        {
          img: require('@/assets/img/main-index-img01.jpg'),
          h3: '国际海运拼箱/整箱 ',
          p: '费用合理，透明安全',
          content:
            '提供覆盖全球的国际货运代理整箱业务。我们有着强大的代理网络，专业的员工，良好的市场人脉关系，可将您的货物安全、及时、便捷的运往世界各地。'
        }
      ],
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
      ],
      ideaUlDat: [
        {
          content: [
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？'
          ]
        },
        {
          content: [
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？'
          ]
        },
        {
          content: [
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？',
            '在国际海运中，货物大致分为哪六个步骤？'
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.home {
  .home-top {
    height: 800px;
    .top-com {
      position: absolute;
      z-index: 999999999;
      width: 100%;
      margin-top: 30px;
    }
    .carousel-img1 {
      background: url('../../assets/img/banner.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .carousel-img2 {
      background: url('../../assets/img/banner1.jpg') no-repeat;
      background-size: 100% 100%;
    }
    .carousel-image {
      width: 100%;
      height: 800px;
    }
  }
  .transportationInfo {
    background-color: #f7f7f7;
    .transportationInfoDom {
      display: flex;
    }
    .transportationInfo-left {
      display: flex;
      .transportationInfoList {
        width: 230px;
        height: 214px;
        padding: 25px 27px 0;
        border-left: 1px solid #e7e7e7;
        &:last-child {
          border-right: 1px solid #e7e7e7;
        }
      }
    }
    .transportationInfo-right {
      text-align: left;
      flex: 1;
      .transportationInfoH1 {
        color: #a9a9a9;
        font-size: 16px;
        border-bottom: 1px solid #e7e7e7;
        padding: 18px 0 10px 30px;
      }
      .transportationInfoUl {
        padding: 17px 30px 30px;
        .transportationInfoLi {
          list-style: circle;
          margin-left: 20px;
          padding: 8px 0;
          cursor: pointer;
          &:hover {
            color: #007dcc;
          }
        }
      }
    }
  }
  .air-index-serviceDom {
    background-color: #fff;
    padding-bottom: 80px;
    .air-index-service {
      display: flex;
      background-color: #fff;
      .air-index-service-list {
        margin-left: 8px;
        height: 420px;
        width: 302px;
        overflow: hidden;
        transition: all 0.6s;
        &:hover {
          .introduce {
            transform: translate(0px, -420px);
            height: 420px;
            background-color: rgba(7, 90, 168, 0.8);
            display: flex;
            align-items: center;
            .introduce-content {
              color: #fff;
            }
          }
        }
      }
      .introduce {
        transform: translate(0px, -80px);
        transition: all 0.6s;
        background-color: rgba(7, 7, 7, 0.6);
        width: 100%;
        padding: 20px 30px 0;
        height: 420px;
        .introduce-h3,
        .introduce-p {
          text-align: left;
          color: #fff;
          font-size: 18px;
        }
        .introduce-p {
          font-size: 10px;
          margin-bottom: 10px;
        }
        .introduce-content {
          font-size: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
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
  .service {
    background-color: #f3f3f3;
    padding-bottom: 80px;
  }
  .partner {
    padding-bottom: 80px;
    background-color: #fff;
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
