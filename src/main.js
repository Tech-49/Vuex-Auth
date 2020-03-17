import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    if (store.getters["auth/isAuthenticated"]) {
      next()
      return
    }
    next('/login')
  }
  else {
    /* @To-do This condition can be improved. Kept it simple for demo purpose.*/
    if (store.getters["auth/isAuthenticated"] && to.path == '/login') {
      next('/users');
    }
    next()
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
