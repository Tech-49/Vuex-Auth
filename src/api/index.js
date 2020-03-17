import auth from './auth';

export const api = {
	apiUrl: 'https://reqres.in/api',
	...auth
};

export default ({ Vue }) => {
	Vue.prototype.$api = api;
};
