<template>
  <div class="airplant">
    <div class="airplant-top">
      <topCom></topCom>
      <div class="air-main" style="color:#fff">
        <div class="TitleDomVue">
          <TitleDomVue :title="'国际空运一站式服务引领者'" content="">
          </TitleDomVue>
          <p>先进的航空运输供应链管理系统，聚焦客户实际需求，琪邦以现代化网络系统和定制化服务，致力为客户提供专业、</p>
          <p>高效、高性价比的一站式空运服务解决方案。</p>
        </div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="main">
        <breadcrumbVue></breadcrumbVue>
      </div>
    </div>
    <div class="idea">
      <IdeaDom></IdeaDom>
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
    <div class="business-advantage">
      <div class="business-advantage-box clearfix">
        <div class="lf video-box"> <img src="@/assets/img/service-content-img06.jpg" alt="" />
        </div>
        <div class="rt advantage-details">
          <ul style="display:none;">
            <li>
              <div> 业务优势1<span> Business advantage</span> </div>
              <div class="clearfix">
                <p>以系统化流程和专业化技术，打造现代化的空运服务平台，形成独一无二的业务核心竞争力。</p>
              </div>
            </li>
            <li>
              <div> 系统化专业服务 </div>
              <p>以客户需求为导向，量身定制安全高效的货代解决方案，全方位服务流程相匹配，确保货物100%安全出运。</p>
            </li>
            <li>
              <div> 可视化物流追踪 </div>
              <p>全程GPS定位追踪，精准精准定位货物位置，层层监控物流环节，确保货物100%安全到达。</p>
            </li>
            <li>
              <div> 现代化管理团队 </div>
              <p>队伍专业化、管理现代化、服务人性化，全天候客服团队，24小时在线服务支持，提供一对一服务。</p>
            </li>
            <li>
              <div> 公正价格体系 </div>
              <p>拥有合理、公正的货代报价机制，无中间环节，客户直接受益，整体方案落地可行，规避虚高报价陷阱。</p>
            </li>
          </ul>
          <ul>
            <li>
              <div class="t">国际空运业务优势</div>
              <div class="clearfix">
                <p>以系统化流程和专业化技术，打造现代化的国际空运服务平台，形成与众不同的业务核心竞争力。</p>
              </div>
            </li>
            <li>
              <div class="t"> 系统化专业服务 </div>
              <p>以客户需求为导向，量身定制安全高效的货代解决方案，全方位服务流程相匹配，确保货物安全出运。</p>
            </li>
            <li>
              <div class="t"> 可视化物流追踪 </div>
              <p>全程GPS定位追踪,定位货物位置,层层监控物流环节,确保货物安全到达。</p>
            </li>
            <li>
              <div class="t"> 现代化管理团队 </div>
              <p>队伍专业化、管理现代化、服务人性化,全天候客服团队,24小时在线服务支持,提供一对一服务。</p>
            </li>
            <li>
              <div class="t"> 公正价格体系 </div>
              <p>拥有合理、公正的货代报价机制，无中间环节，客户直接受益，整体方案落地可行，规避虚高报价陷阱。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="idea-main">
      <ideDomVue></ideDomVue>
    </div>
    <div class="feature-service">
      <div class="service">
        <div class="container t" style="color: #fff;"> <span class="trangle_01"></span> 上海空运解决方案
          <span class="trangle_02"></span>
        </div>
        <p>以满足客户需求为前提，兼具安全与高效，提供高性价比、快捷无忧的上海空运特色服务。</p>
      </div>

      <div class="solution">
        <ul class="clearfix">
          <li>
            <img src="@/assets/img/air-service-img05.jpg" alt="" />
            <div class="text">
              <h3>特殊物品解决方案</h3>
              <p>Special item solution</p>
            </div>
          </li>
          <li>
            <img src="@/assets/img/air-service-img05.jpg" alt="" />
            <div class="text">
              <h3>危险物品解决方案</h3>
              <p>Dangerous goods solution</p>
            </div>
          </li>
          <li>
            <img src="@/assets/img/air-service-img05.jpg" alt="" />
            <div class="text">
              <h3>国际搬家解决方案</h3>
              <p>International moving solutions</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="service-process">
      <div class="service">
        <div class="container t"> <span class="trangle_01"></span>国际航空货运代理服务流程 <span
            class="trangle_02"></span> </div>
        <div class="clearfix">
          <p>系统化服务流程，层层监控转运环节，从根本上提升运输效率，系统化服务流程，层层监控转运环节，从根本上提升运输效率。</p>
        </div>
      </div>
      <div class="icon_show clearfix">
        <ul class="icon-content">
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
          <li>
            <dl class="lf">
              <img src="@/assets/img/air-service-icon01.png" alt="委托书填写" />
              <dd><span>01</span></dd>
              <dd>
                <h3>委托书填写</h3>
                <p></p>
              </dd>
              <dd class="air-service-icon_arrow l"></dd>
            </dl>
          </li>
        </ul>
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
import IdeaDom from '../componentsDom/ideaDom.vue';
import ideDomVue from '../componentsDom/ideaDomVue.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
import footerComVue from '@/components/footerCom.vue';
export default {
  components: {
    topCom,
    TitleDomVue,
    breadcrumbVue,
    IdeaDom,
    ideDomVue,
    ideaDomVue,
    footerComVue
  }
};
</script>

<style lang="less">
.airplant {
  .airplant-top {
    padding-top: 30px;
    height: 640px;
    background: url('@/assets/img/air-service-banner.jpg') no-repeat center;
    background-size: cover;
    font-size: 18px;
    color: #333;
  }
  .breadcrumbs {
    padding: 20px 0;
    text-align: center;
    background-color: #fff;
  }
  .idea {
    height: 630px;
    background: #fff;
  }
  .business-advantage {
    padding: 0 0 70px;
    background-color: #f5f5f5;
    .business-advantage-box {
      margin: 0 auto;
      width: 1220px;
    }
    .clearfix {
      zoom: 1;
    }
    .video-box {
      width: 559px;
      height: 534px;
    }

    .lf {
      float: left;
    }
    .advantage-details {
      padding: 90px 0 0;
      width: 620px;
      text-align: left;
    }

    .rt {
      float: right;
    }
    ol,
    ul,
    li {
      list-style: none;
    }
  }
  .idea-main {
    background: #fff;
  }
  .feature-service {
    width: 100%;
    height: 739px;
    background: url(@/assets/img/air-service-img04.jpg) no-repeat;
    background-size: cover;
    ol,
    ul,
    li {
      list-style: none;
    }
    .service {
      padding-top: 80px;
      padding-bottom: 50px;
      margin: 0 auto;
      padding: 80px 0 30px;
      width: 1220px;
      text-align: center;
      .t {
        position: relative;
        margin-bottom: 10px;
        color: #333333;
        font-weight: 400;
        font-size: 30px;
      }
      p {
        color: #d2d2d2;
        margin: 0 auto;
        font-size: 14px;
      }
    }
    .solution {
      margin: 0 auto;
      width: 1220px;
      .clearfix {
        display: flex;
        justify-content: space-around;
        width: 1220px;
        zoom: 1;
        li {
          position: relative;
          float: left;
          width: 368px;
          height: 451px;
          .img {
            vertical-align: top;
            max-width: 100%;
          }
          .text {
            position: absolute;
            bottom: 36px;
            left: 0;
            width: 285px;
            width: 368px;
            color: #ffffff;
            text-align: center;
            h3 {
              margin-bottom: 8px;
              font-size: 18px;
              letter-spacing: normal;
            }
            p {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: normal;
            }
          }
        }
      }
    }
  }
  .service-process {
    background-color: #f5f5f5;
  }

  .service-process .service {
    padding: 80px 0 50px;
  }

  .service-process .icon_show {
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 80px;
    width: 1220px;
  }

  .service-process .icon_show li {
    float: left;
    width: 170px;
  }

  .service-process .icon_show li + li {
    margin-left: 40px;
  }

  .service-process .icon_show li dl {
    position: relative;
    text-align: center;
  }

  .service-process .icon_show li dl dd:nth-child(2) {
    margin: 20px 0 5px;
  }

  .service-process .icon_show li dl dd span {
    color: #bababa;
    font-weight: 900;
    font-size: 20px;
  }

  .service-process .icon_show li dl dd h3 {
    text-align: center;
    margin: 0 30px 8px 0;
    color: #333333;
    font-size: 16px;
  }
  .service-process .icon_show li dl dd .t {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333333;
    font-size: 24px;
  }

  .service-process .icon_show li dl dd p {
    text-align: center;
    color: #7e7e7e;
    font-size: 13px;
    line-height: 20px;
  }

  .service-process .icon_show li dl dd.air-service-icon_arrow {
    position: absolute;
    top: 62px;
    right: -59px;
    width: 77px;
    height: 9px;
    background: url(@/assets/img/air-service-icon_arrow.png) no-repeat;
  }

  .service-process .icon_show li dl dt img {
    opacity: 0.5;
    filter: grayscale(0);
  }

  .service-process .icon_show li img:hover {
    opacity: 1;
    filter: grayscale(100%);
  }
}
</style>
