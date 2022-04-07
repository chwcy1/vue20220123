import axios from 'axios'
import router from '@/router'
import {
	Message
} from 'element-ui'
import {baseURL} from '../api/base.js'

var instance = axios.create({
	// 本地地址
	baseURL: baseURL

})
instance.interceptors.request.use(config => {
	let token = localStorage.getItem("token")
	if (token) {
		config.headers.Authorization = 'Bearer ' + token
	}
	return config
}, error => {
	console.log(error) // for debug
	return Promise.reject(error);
})
instance.interceptors.response.use(response => {
	// let code = response.data.code
	// if (code == 400) {
	//   Toast.fail('身份已过期')
	//   localStorage.removeItem('token')
	//   router.push('/login')
	// }
	// console.log(response)
	return response.data;
}, error => {
  console.log(error.response.data) // for debug
  return error.response.data;
	// Message.error(error.response.data.msg)
	// return error.response.data;
});
export default instance;
