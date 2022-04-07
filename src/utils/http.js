import axios from '../utils/request'
const http = {
	get(url, params) {
		return this.request("GET", url, params, undefined)
	},
	post(url, data) {
		return this.request("POST", url, undefined, data)
	},
	put(url, data) {
		return this.request("PUT", url, undefined, data)
	},
	delete(url, data) {
		return this.request("DELETE", url, undefined, data)
	},
	request(method, url, param, data) {
		return new Promise((resolve, reject) => {
			axios.request({
				url: url,
				method: method,
				params: param,
				data: data
			}).then(res => {
				resolve(res);
			}).catch(err => {
				reject(err)
			})
		});
	}
}
export default http
