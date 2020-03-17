import axios from 'axios';

export default {
	login(creds) {
		return axios.post(`${this.apiUrl}/login`, creds);
	},
};
