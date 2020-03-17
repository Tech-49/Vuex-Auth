import Vue from 'vue';

export function login(state, { token }) {
	localStorage.setItem('token', token);
	Vue.set(state, 'token', token);
}

export function logout(state) {
	localStorage.removeItem('token');
	Vue.set(state, 'token', '');
}