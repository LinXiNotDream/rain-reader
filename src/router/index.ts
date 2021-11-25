import noAuth from '@/pages/noAuth/index.vue'
import Search from '@/pages/main/Search.vue'

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Search',
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/noAuth',
    name: 'noAuth',
    component: noAuth,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (true) next()
    else next({ name: 'noAuth' })
  } else next()
})

export default router

// 重写push和replace方法
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push (location) {
//     if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
//     return originalPush.call(this, location).catch(err => err);
// };
// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace (location, onResolve, onReject) {
//     if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject);
//     return originalReplace.call(this, location).catch(err => err);
// };
