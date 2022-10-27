import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('@/views/contactUs/index.vue'),
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/system',
    name: 'system',
    component: () => import('@/views/system/index.vue'),
    meta: {
      title: '货代服务系统'
    }
  },
  {
    path: '/imports',
    name: 'imports',
    component: () => import('@/views/imports/index.vue'),
    meta: {
      title: '进口清关报税'
    }
  },
  {
    path: '/seafreight',
    name: 'seafreight',
    component: () => import('@/views/seafreight/index.vue'),
    meta: {
      title: '海运整箱/拼箱'
    }
  },
  {
    path: '/bulkcargo',
    name: 'bulkcargo',
    component: () => import('@/views/bulkcargo/index.vue'),
    meta: {
      title: '散货船货运输'
    }
  },
  {
    path: '/global',
    name: 'global',
    component: () => import('../views/global/index.vue'),
    meta: {
      title: '国际物流服务'
    }
  },
  {
    path: '/airplant',
    name: 'airplant',
    component: () => import('@/views/global/componets/airplant.vue'),
    meta: {
      title: '国际航空货代'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
    meta: {
      title: '关于昌航'
    }
  },
  {
    path: '/news1',
    name: 'news1',
    component: () => import('@/views/news1/index.vue'),
    meta: {
      title: '新闻1'
    }
  },
  {
    path: '/news2',
    name: 'news2',
    component: () => import('@/views/news2/index.vue'),
    meta: {
      title: '新闻2'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
