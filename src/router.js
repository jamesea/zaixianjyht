import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login/Login.vue'
import Home from './components/Home/Home.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/login',
			component: 
				Login
		},
		{
			path: '/',
			component: Home
		}
	]
})
export default router