export const myRoutes = [
	{
		path: '/login', component: () => import('../components/auth/Login'), name: 'loginRoute',
		meta: { requiresLogin: false }
	},
	{
		path: '/users', component: () => import('../components/Pages/Users'), name: 'usersRoute',
		meta: { requiresLogin: true }
	},
	{ path: '*', component: () => import('../components/Pages/PageNotFound') }
];