<template>
    <div class="about">
      <div class="about-top">
        <topComVue></topComVue>
        <div class="about-top-content main">
          <div class="about-content-div-min"></div>
          <div class="about-content-div">
            关于Kbans
          </div>
          <h1 class="about-content-h3">ABOUT</h1>
          <p class="about-content-p">
            昌航国际，全称上海琪邦国际货运代理有限公司，致力于国际货运代理服务。服务包括承办海运，空运国际货物运输代理，包括揽货、订舱、托运、仓储、包装、集装箱拆箱、分拨中转及相关的短途运输；报送、报检、保险；国际展品、私人物品、及过境货物代理；咨询业务及其他国际货运代理业务和综合物流业务。
            <br>&nbsp;<br>
            公司将充分发挥整体优势，面向海内外市场，不断开拓经营，通过实施经营规模化、功能多元化和国际化的战略，逐步建成一个规模宏大、实力雄厚、功能齐全、具有市场竞争优势的与上海国际航运中心相匹配的综合物流公司。
            <br><br>
          </p>
        </div>
      </div>
      <div class="breadcrumbs">
        <div class="mian"><breadcrumbVue></breadcrumbVue></div>
      </div>
      <div class="data">
        <div class="data-main"><aboutideaDomVue></aboutideaDomVue></div>
      </div>
      <div class="system">
        <div class="system-box">
          <div class="system-text">昌航KBANS CI系统</div>
          <img src="@/assets/img/about-kbans-icon.png" alt="">
        </div>
      </div>
      <div class="text">
        <div class="text-box1">
          昌航以蔚蓝色做为视觉主色系，代表蓝天大海，引寓所属行业环境属性。同时蓝色又代表科技与互联
          网，代表KBANS引领互联网+创造怀思维，打造现代国际货运代理服务体系。
        </div>
        <div class="text-box2">
          以中国红做为辅助色系，因为它是最能代表中国的色彩元素。红色亦代表热情，奔放，激情与斗志。红与蓝相结合，彰显琪邦立
          足于中国，以互联网思维，打造一线国际货运服务品牌。
        </div>
      </div>
      <div class="img-01">
        <img src="@/assets/img/about-kbans-img001.jpg" alt="">
      </div>
      <div class="serve">
        <serveideaDom></serveideaDom>
        <div class="serve-a">
          <a href="#">查看更多</a>
        </div>
      </div>
      <div class="information">
        <informationideaDom></informationideaDom>
      </div>
      <div class="contact">
        <titleDomVue title="联系昌航"></titleDomVue>
      </div>
      <div class="map">
        <div class="map-text">
            <ul class="map-text-ul">
              <li><samp class="samp1">CONTACT</samp>KBANS</li>
              <li>上海琪邦（Kbans）国际货运代理</li>
              <li>Tel:(+86 021 61849192) <samp class="samp3">（咨询热线，客户经理值守）</samp></li>
              <li>Tel:(+86 021 61559832) <samp class="samp4">（咨询热线，客户经理值守）</samp></li>
              <li>FAX:(+86 021 51686654 )</li>
              <li>Email:Janice@kbans.com</li>
              <li><span class="samp7">地址：</span>上海杨浦区隆昌路619号城市概念10号A栋2F</li>
            </ul>
        </div>
        <div class="map-map">
          <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
          </baidu-map>
        </div>
      </div>
      <div class="bai"></div>
      <div class="footer">
        <footerComVue></footerComVue>
      </div>
    </div>
</template>
<script>
import footerComVue from '@/components/footerCom.vue';
import titleDomVue from '@/components/componentsDom/titleDom.vue';
import informationideaDom from './componentsDom/informationideaDom.vue'
import serveideaDom from './componentsDom/serveideaDom.vue'
import aboutideaDomVue from './componentsDom/aboutideaDom.vue';
import breadcrumbVue from '@/components/breadcrumb.vue';
import topComVue from '@/components/topCom.vue';
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'cTdMmXMo6UZcM47QPU6XilhWYU2QBAOq'
})
export default {
    name: 'about',
    components: {
      topComVue,
      breadcrumbVue,
      aboutideaDomVue,
      serveideaDom,
      informationideaDom,
      titleDomVue,
      footerComVue
  },
  data () {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    }
  },
  methods: {
    handler ({ BMap, map }) {
      console.log(BMap, map)
      this.center.lng = 115.816623
      this.center.lat = 28.727408
      this.zoom = 15
    }
  }

}
</script>
<style scoped lang="less">
.about{
  .about-top{
    padding-top: 30px;
    height: 800px;
    position: relative;
    background: url('@/assets/img/about-top.jpg') no-repeat;
    .about-top-content{
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
      position: absolute;
      right: 150px;
      bottom: 0;
      width: 640px;
      height: 396px;
      border-top: red 6px solid;
      background-color: rgba(249, 249, 249, 0.95);
      .about-content-div{
        position: absolute;
        bottom: 355px;
        padding: 10px;
        width: 246px;
        height: 60px;
        background-color: #015AAA;
        color: #fff;
        font-size: 30px;
      }
      .about-content-div-min{
        position: absolute;
        bottom: 383px;
        left: -8px;
        width: 30px;
        height: 30px;
        border-top: 40px solid #DE191A;
        border-right: 40px solid transparent;
      }
      .about-content-h3{
        font-size: 35px;
        color: #fff;
      }
      .about-content-p{
        text-align: left;
        margin-top: 40px;
        padding: 0 40px;
        color: #666;
        line-height: 30px;
        font-size: 16px;
      }
    }
  }
  .breadcrumbs {
    padding: 20px 130px;
    text-align: center;
    background-color: #ffffff;
  }
  .data{
    background-color: #fff;
    padding-bottom: 80px;
  }
  .system{
    background-repeat: auto;
    background-color: #fff;
    padding-bottom: 32px;
    .system-box{
      height: 235px;
      widows: 1222px;
      margin: 0 150px;
      background: url(@/assets/img/about-kbans-bg01.jpg);
      .system-text{
        font-size: 30px;
        color: #363636;
        padding: 42px 0 23px 0;
      }
    }
  }
  .text{
    background-color: #fff;
    .text-box1{
      width: 750px;
      margin-left: 400px;
      font-size: 16px;
      margin-bottom: 20px;
    }
    .text-box2{
      width: 950px;
      margin-left: 300px;
      font-size: 16px;
      padding-bottom: 20px;
    }
  }
  .img-01{
    background-color: #fff;
    padding-bottom: 20px;
  }
  .serve{
    color: #fff;
    height: 674px;
    background: url(@/assets/img/about-qibang-img03.jpg);
    .serve-a{
      width: 180px;
      height: 40px;
      border: 2px solid #74797D;
      border-radius: 40px;
      text-align: center;
      font-size: 16px;
      line-height: 36px;
      margin: 0 auto;
    }
  }
  .contact{
    background-color: #fff;
  }
  .map{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 410px;
    width: 100%;
    //position: relative;
    background-color: #fff;
    .map-map{
      height: 410px;
      width: 607px;
      .bm-view{
        height: 410px;
        width: 607px;
      }
    }
    .map-text{
      float: left;
      height: 410px;
      width: 613px;
      background-color: #f0f0f0;
      text-align: left;
      .map-text-ul{
        padding-top: 70px;
        padding-left: 60px;
        li{
          padding: 8px 0px;
          font-size: 18px;
          color: #333;
        }
        .samp1{
          font-size: 45px;
          font-family: '微软雅黑';
          color: #015AAA;
        }
        .samp3{
          font-size: 16px;
          color: rgba(0, 0, 0, 0.457);
          font-family: '微软雅黑';
        }
        .samp4{
          font-size: 16px;
          color: rgba(0, 0, 0, 0.457);
          font-family: '微软雅黑';
        }
        .samp7{
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
  .bai{
    height: 80px;
    background-color: #fff;
  }
}
</style>
