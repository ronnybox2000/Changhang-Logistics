<template>
  <div class="global-content main">
    <div class="service-box">
      <div class="service-list" v-for="(item, index) in serviceList" :key="index">
        <div class="service-list-img"><img :src="item.img" alt="" /></div>
        <div class="service-list-title">{{ item.title }}
        </div>
        <div class="service-list-content">{{ item.content }}</div>
        <span class="more">More >></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-content',
  components: {},
  data() {
    return {
      serviceList: [
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        },
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        },
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        },
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        },
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        },
        {
          img: require('@/assets/img/fuwu_img1.jpg'),
          title: '手海运整箱/拼箱服务',
          content:
            '琪邦能够为您提供EWX，DDP/DDU，门到门等海内外货代服务，在装船后的24小时内就可以为客户签发提单，争取让您的货物第一时间到达目的地。'
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.global-content {
  .service-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .service-list {
      padding-top: 40px;
      width: 385px;
      margin-left: 20px;
      .service-list-title {
        text-align: left;
        margin-top: 20px;
        color: #202020;
        font-size: 18px;
        font-weight: bold;
        padding-left: 0px;
      }
      .service-list-content {
        text-align: left;
        color: #666666;
        font-size: 14px;
        line-height: 22px;
        height: 66px;
        overflow: hidden;
        margin-top: 10px;
      }
      .more {
        float: left;
        width: 100px;
        text-align: center;
        border: 1px solid #e3e3e3;
        height: 30px;
        line-height: 30px;
        color: #666666;
        font-size: 13px;
        font-family: arial;
        margin-top: 15px;
      }
    }
  }
}
</style>
