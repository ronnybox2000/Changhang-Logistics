<template>
  <div class="system">
    <div class="system-top">
      <topComVue></topComVue>
      <div class="system-top-content main">
        <div class="system-content-h3">kbans专属定制的货代服务系统</div>
        <div class="system-content-p">
          让国际物流长链条的各利益相关方可以便捷、迅速地交换信息，分工协作，让整个货运流程高度可视化。
        </div>
        <div class="system-content-input">
          <el-input placeholder="输入空运单号查询物流信息" v-model="input3" />
          <div class="btn"><i class="el-icon-search"></i>搜索</div>
        </div>
        <div class="system-content-p2">
          请输入货代服务单号，查询货运状态。kbans货代服务专用，如若忘记单号可与客户经理联系。
        </div>
      </div>
    </div>
    <div class="breadcrumbs">
      <div class="main"><breadcrumbVue></breadcrumbVue></div>
    </div>
    <div class="service">
      <serviceContentVue></serviceContentVue>
    </div>
    <div class="data-show">
      <div class="main">
        <titleDomVue
          title="直观货代数据展示"
          content="可视化数据，无隙衔接运单信息，琪邦货代公司让您全面掌控货代的走向。"
        ></titleDomVue>
        <div class="data-show-img">
          <div class="data-show-content">
            <div class="data-show-list" v-for="item in 3" :key="item">
              历史国际货运服务状态与相关查询<br />
              <span
                >可以对历史某一时间的国际货代相关数据进行统计或单项查询。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="handle-experience">
      <titleDomVue
        title="更好的操作体验"
        content="专业创造价值，品质铸就信任，kbans货代服务系统以其独特优势受到更多客户的支持。"
        myColor="#fff"
      ></titleDomVue>
      <div class="main img">
        <el-carousel
          indicator-position="none"
          :interval="3000"
          type="card"
          height="312px"
          arrow="never"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <img src="@/assets/img/service-modification-img009.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="idea">
      <div class="main">
        <ideaDomVue></ideaDomVue>
        <div class="idea-box">
          <div class="idea-list" v-for="item in 3" :key="item">
            外贸代理行业竞争激烈，毛利率非常透明。特别是近年来，大型综合外贸服务平台和省级综合外贸服务平台的兴起，极大地影响了传统的进出口代理。对于各种复杂的现象，外贸人员需要从多个角度选择合适的代理公司。今天琪邦带大家了解如何找到一个可靠的上海国际物流公司。
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <footerComVue></footerComVue>
    </div>
  </div>
</template>

<script>
import breadcrumbVue from '@/components/breadcrumb.vue';
import topComVue from '@/components/topCom.vue';
import serviceContentVue from '@/components/componentsDom/service-content.vue';
import titleDomVue from '@/components/componentsDom/titleDom.vue';
import ideaDomVue from '@/components/componentsDom/ideaDom.vue';
import footerComVue from '@/components/footerCom.vue';
export default {
  name: 'system',
  components: {
    breadcrumbVue,
    topComVue,
    serviceContentVue,
    titleDomVue,
    ideaDomVue,
    footerComVue
  },
  data() {
    return {
      input2: ''
    };
  }
};
</script>

<style scoped lang="less">
.system {
  .system-top {
    padding-top: 30px;
    height: 800px;
    background: url('@/assets/img/service-modification-banner.jpg') no-repeat;
    .system-top-content {
      text-align: center;
      color: #fff;
      margin-top: 202px;
      .system-content-h3 {
        font-size: 40px;
      }
      .system-content-p {
        font-size: 18px;
        color: #d5d8da;
        margin: 10px 0 65px;
      }
      .system-content-p2 {
        font-size: 16px;
        margin: 20px auto 0;
      }
      .system-content-input {
        width: 600px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          width: 170px;
          height: 60px;
          line-height: 60px;
          background-color: #005fb5;
        }
      }
    }
  }
  .breadcrumbs {
    padding: 20px 0;
    text-align: center;
    background-color: #ffffff;
  }
  .service {
    background-color: #f3f3f3;
  }
  .data-show {
    background-color: #fff;
    padding-bottom: 80px;
    .data-show-img {
      height: 448px;
      background: url('@/assets/img/service-modification-img05.jpg') no-repeat;
      display: flex;
      justify-content: end;
      align-items: center;
      text-align: left;
      font-size: 18px;
      color: #444;
      .data-show-content {
        padding: 50px 70px 50px 50px;
        background: rgba(244, 242, 240, 0.85);
        width: 560px;
        height: 360px;
        span {
          font-size: 14px;
          color: #888;
          line-height: 30px;
        }
        .data-show-list {
          padding: 20px 0;
          border-bottom: 1px solid #e2ded3;
          &:first-child {
            padding-top: 0;
          }
          &:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
  .idea {
    background-color: #ffffff;
    padding-bottom: 40px;
    .idea-box {
      display: flex;
      .idea-list {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:nth-child(2) {
          margin: 0 20px;
        }
      }
    }
  }
  .handle-experience {
    background: url('@/assets/img/service-modification-img06.jpg') no-repeat;
    height: 674px;
    background-size: 100% 100%;
    color: #fff;
    .img {
      margin-top: 30px;
    }
  }
}
</style>
<style lang="less">
.system-content-input {
  .el-input {
    .el-input__inner {
      height: 60px !important;
      font-size: 20px !important;
      border-radius: 0 !important;
    }
  }
}
.el-carousel__mask {
  background-color: transparent;
}
</style>
