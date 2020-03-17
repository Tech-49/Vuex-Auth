import Vue from 'vue'
import VueRouter from 'vue-router'
import { myRoutes } from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: myRoutes,
	mode: 'history'
})

export default router;