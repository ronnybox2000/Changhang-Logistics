<template>
  <div class="contactUs">
    <topCom />
    <div class="main">
      <div class="main-info">
        <p class="main-info-size">琪邦国际-24小时服务咨询专线</p>
        <p class="main-info-tel">
          400-165-2866&nbsp;&nbsp;&nbsp;&nbsp;021-52835575
        </p>
        <p>您亦可以通过QQ在线与我们沟通（7x24）：</p>
        <div class="main-info-button">
          <div class="main-info-button-info" v-for="item in 3" :key="item">
            <div class="icon">
              <img src="@/assets/img/g_icon2.png" alt="" />
            </div>
            <div class="font">网页咨询</div>
          </div>
        </div>
        <p>如需更多服务或商务洽谈可咨询在线客服</p>
        <div class="form">
          <el-input placeholder="Sunny@kbans.com" disabled v-model="input4">
            <div class="form-icon" slot="prefix">
              <img src="@/assets/img/yx_icon.png" alt="" />
            </div>
          </el-input>
          <div class="checkList">
            在线留言（咨询分类 &nbsp;&nbsp;
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="海运"></el-checkbox>
              <el-checkbox label="空运"></el-checkbox>
              <el-checkbox label="危险品"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
            ）
          </div>
          <div class="submit">
            <el-form :inline="true" :model="form" label-width="80px">
              <div class="submit-first">
                <el-input
                  class="submit-first-input"
                  placeholder="称呼"
                  v-model="form.name"
                />
                <el-input
                  class="submit-first-input"
                  placeholder="电话"
                  v-model="form.tel"
                />
                <el-input
                  class="submit-first-input"
                  placeholder="邮箱"
                  v-model="form.email"
                />
              </div>
              <div class="submit-senced">
                <el-input
                  class="submit-first-input"
                  type="textarea"
                  placeholder="留言内容"
                  v-model="form.desc"
                />
                <el-button>提交</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-title">
      <div class="main"><breadcrumbVue></breadcrumbVue></div>
    </div>
    <div class="contact-box">
      <div class="contact-box-content main">
        <div class="contact-box-content-img">
          <img src="@/assets/img/contact_img1.jpg" alt="" />
        </div>
        <div class="contact-box-content-card">
          <h2>琪邦（Kbans）国际货运代理</h2>
          <div class="bt">上海总部</div>
          <div class="text">
            <p>Tel : +86 021 52835575 （咨询热线，客户经理值守）</p>
            <p>Email:Larry@kbans.com</p>
            <p>地址：上海杨浦区隆昌路619号城市概念10号A栋2F</p>
          </div>
          <div class="bt">无锡运营中心</div>
          <div class="text">
            <p>Tel : +86 021 52835575 （咨询热线，客户经理值守）</p>
            <p>Email:Larry@kbans.com</p>
            <p>地址：上海杨浦区隆昌路619号城市概念10号A栋2F</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <ideaDom />
      <div class="idea-box">
        <div class="idea-list" v-for="item in 3" :key="item">
          外贸代理行业竞争激烈，毛利率非常透明。特别是近年来，大型综合外贸服务平台和省级综合外贸服务平台的兴起，极大地影响了传统的进出口代理。对于各种复杂的现象，外贸人员需要从多个角度选择合适的代理公司。今天琪邦带大家了解如何找到一个可靠的上海国际物流公司。
        </div>
      </div>
    </div>
    <footerCom />
  </div>
</template>

<script>
import topCom from '@/components/topCom.vue';
import footerCom from '@/components/footerCom.vue';
import ideaDom from '@/components/componentsDom/ideaDom.vue';
import breadcrumbVue from '@/components/breadcrumb.vue';
export default {
  name: 'contactUs',
  components: {
    topCom,
    footerCom,
    ideaDom,
    breadcrumbVue
  },
  data() {
    return {
      checkList: [],
      form: {
        name: '',
        desc: '',
        email: '',
        tel: ''
      }
    };
  }
};
</script>

<style scoped lang="less">
.contactUs {
  padding-top: 30px;
  height: 800px;
  background: url('@/assets/img/contact_banner.jpg') no-repeat 100% 100%;
  font-size: 18px;
  color: #333;
  .main {
    &-info {
      margin-top: 200px;
      text-align: left;
      .form {
        width: 600px;
        &-icon {
          margin-top: 15px;
        }
        .checkList {
          margin-top: 15px;
          display: flex;
          align-items: center;
        }
        .submit {
          &-first {
            margin-top: 10px;
            display: flex;
            &-input {
              margin-right: 10px;
            }
          }
          &-senced {
            margin-top: 10px;
            display: flex;
          }
        }
      }
      &-size {
        font-size: 12px;
      }
      &-tel {
        margin-top: 15px;
        color: #1a58ab;
        font-size: 26px;
        font-weight: bold;
      }
      &-button {
        display: flex;
        color: #fff;
        &-info {
          margin-right: 8px;
          display: flex;
          justify-content: center;
          width: 146px;
          height: 42px;
          border: 1px solid #1a58ab;
          background: #1a58ab;
          font-size: 14px;
          text-align: center;
          line-height: 42px;
          border-radius: 4px;
          .icon {
            padding-top: 5px;
          }
          .font {
            padding-left: 10px;
          }
        }
      }
    }
  }
  .contact-box {
    background: url('@/assets/img/contact_bg.jpg') no-repeat center center;
    height: 757px;
    &-content {
      text-align: left;
      &-img {
        transform: translate(10px, 200px);
      }
      &-card {
        box-sizing: border-box;
        padding: 45px 46px 0 82px;
        width: 572px;
        height: 448px;
        background: #fff;
        transform: translate(660px, -340px);
        .bt {
          color: #333333;
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 12px;
        }
        .text {
          padding-top: 0;
          color: #666666;
          font-size: 16px;
        }
      }
    }
  }
  .contact-title {
    background: #fff;
    height: 40px;
    display: flex;
    align-items: center;
  }
}
.idea-box {
  margin-bottom: 30px;
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
</style>
