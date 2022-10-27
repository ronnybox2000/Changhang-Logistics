<template>
  <div class="topCom main">
    <div class="logo-img">昌航物流 Logo</div>
    <div class="ul">
      <div class="li" v-for="(item, index) in navigation" :key="index">
        <a
          @click="
            item.name && $router.push({ name: item.name, query: item.query })
          "
          >{{ item.title }}</a
        >
        <div class="ul-children" v-if="item.children">
          <div
            class="li-children"
            v-for="(_item, index) in item.children"
            :key="index"
          >
            <a
              @click="
                _item.name &&
                  $router.push({ name: _item.name, query: _item.query })
              "
              >{{ _item.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topCom',
  data() {
    return {
      navigation: [
        {
          title: '首页',
          name: 'home',
          query: {}
        },
        {
          title: '关于昌航',
          name: 'about',
          query: {}
        },
        {
          title: '国际物流服务',
          name: 'global',
          query: {},
          children: [
            {
              title: '海运整箱 / 拼箱',
              name: 'seafreight',
              query: {}
            },
            {
              title: '国际航空货代',
              name: 'airplant',
              query: {}
            },
            {
              title: '散货船货运输',
              name: 'bulkcargo',
              query: {}
            },
            {
              title: '仓储分拨服务',
              name: '',
              query: {}
            },
            {
              title: '进出口代理',
              name: '',
              query: {}
            },
            {
              title: '特种箱海运',
              name: '',
              query: {}
            }
          ]
        },
        {
          title: '新闻资讯',
          name: '',
          children: [
            {
              title: '新闻资讯一',
              name: 'news1',
              query: {}
            },
            {
              title: '新闻资讯二',
              name: 'news2',
              query: {}
            }
          ]
        },
        {
          title: '进口清关报关',
          name: 'imports',
          query: {}
        },
        {
          title: '货代服务系统',
          name: 'system',
          query: {}
        },
        {
          title: '联系我们',
          name: 'contactUs',
          query: {}
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.topCom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  .logo-img {
    margin-left: 30px;
  }
  .ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .li {
      position: relative;
      margin-right: 60px;
      height: 70px;
      line-height: 70px;
      &:hover {
        color: #015aaa;
        .ul-children {
          visibility: inherit;
          /* display: block; */
          opacity: 1;
          height: auto;
        }
      }
      .ul-children {
        position: absolute;
        top: 70px;
        left: -25px;
        z-index: 2;
        width: 144px;
        visibility: hidden;
        opacity: 0;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.12);
        transition: 0.3s all linear;
        .li-children {
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333333;
          position: relative;
          /* font-weight: 600; */
          transition: 0.3s linear;
          font-size: 16px !important;
          &:hover {
            color: #fff;
            background-color: #015aaa;
          }
          &:last-child {
            content: none;
          }
          &::after {
            position: absolute;
            width: 100%;
            bottom: 0;
            content: '';
            height: 1px;
            background: #eeeeee;
            transform: scaleY(0.5);
          }
        }
      }
    }
  }
}
</style>
