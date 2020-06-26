import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import topPage from '@/components/topPage/topPage.vue'
import watch from '@/components/watch/watch.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Top,
      children: [
        {
          path: '',
          component: topPage
        },
        {
          name: 'watch',
          path: 'watch',
          component: watch
        }
      ]
    }
  ]
})
