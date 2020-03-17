import { api } from '../../api';
import axios from 'axios'

function setAxiosHeaders(token) {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function login(store, creds) {
	return new Promise((resolve, reject) => {
		api
			.login(creds)
			.then((response) => {
				store.commit('login', response.data);
				setAxiosHeaders(response.data.token);

				resolve(response);
			})
			.catch((e) => {
				reject(e.response);
			});
	});
}

export function logout(store) {
	return new Promise((resolve) => {
		store.commit('logout');
		resolve();
	});
}