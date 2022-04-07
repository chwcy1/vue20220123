import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		// {
		// 	path: '/',
		// 	component: resolve => require(['../pages/login.vue'], resolve)
		// },
		// {
		// 	path: '/login',
		// 	component: resolve => require(['../pages/login.vue'], resolve)
		// },
		{
			path: '/',
			component: resolve => require(['../components/common/Home.vue'], resolve),
			meta: {
				title: '自述文件'
			},
			children: [{
					path: '/',
					component: resolve => require(['../pages/home.vue'], resolve)
				}, {
					path: '/home',
					component: resolve => require(['../pages/home.vue'], resolve)
				}, {
					path: '/simple',
					component: resolve => require(['../pages/simple.vue'], resolve)
				},
				{
					path: '/detail',
					component: resolve => require(['../pages/detail.vue'], resolve)
				},
				{
					path: '/form-search',
					component: resolve => require(['../pages/form-search.vue'], resolve)
				},
				{
					path: '/high-search',
					component: resolve => require(['../pages/high-search.vue'], resolve)
				},
				{
					path: '/legal-search',
					component: resolve => require(['../pages/legal-search.vue'], resolve)
				},
				{
					path: '/ipc',
					component: resolve => require(['../pages/ipc.vue'], resolve)
				},
				{
					path: '/ipc2',
					component: resolve => require(['../pages/ipc2.vue'], resolve)
				},
				{
					path: '/search_list',
					component: resolve => require(['../pages/search_list.vue'], resolve)
				},
				{
					path: '/screen1',
					component: resolve => require(['../pages/charts/screen1.vue'], resolve)
				},
				{
					path: '/screen2',
					component: resolve => require(['../pages/charts/screen2.vue'], resolve)
        },
        {
          path: '/screen3',
          component: resolve => require(['../pages/charts/screen3.vue'], resolve)
        },
				{
					path: '/search-result',
					component: resolve => require(['../pages/search-result.vue'], resolve)
				},
				{
					path: '/mysql',
					component: resolve => require(['../pages/mysql.vue'], resolve)
        },
        {
          path: '/mysql-result',
          component: resolve => require(['../pages/mysql-result.vue'], resolve)
        },
				{
					path: '/auto_get',
					component: resolve => require(['../pages/auto_get.vue'], resolve)
				},
				{
					path: '/upload',
					component: resolve => require(['../pages/upload.vue'], resolve)
				},
				{
					path: '/statistics',
					component: resolve => require(['../pages/statistics.vue'], resolve)
        },
        {
          path: '/user',
          component: resolve => require(['../pages/user.vue'], resolve)
        },
        {
          path: '/usercollect',
          component: resolve => require(['../pages/usercollect.vue'], resolve)
        },
        {
          path: '/mysqledit',
          component: resolve => require(['../pages/mysqledit.vue'], resolve)
        },
        {
          path: '/help',
          component: resolve => require(['../pages/help.vue'], resolve)
        },
        {
          path: '/datarange',
          component: resolve => require(['../pages/datarange.vue'], resolve)
        },
        {
          path: '/yujing_list',
          component: resolve => require(['../pages/yujing_list.vue'], resolve)
        },
			]
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
