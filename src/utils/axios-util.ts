/**
 * import axios from '../axios-util.js'
 *
 * axios({
 *      url: '/user',  // `url` 是用于请求的服务器 URL
 *      method: 'get', // `method` 是创建请求时使用的方法   默认 default  
 *      headers: {'X-Requested-With': 'XMLHttpRequest'},   // `headers` 是即将被发送的自定义请求头
 *      params: {ID: 12345},  // `params` 是即将与请求一起发送的 URL 参数  GET 请求
 *      data: {}  // `data` 是作为请求主体被发送的数据   只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
 *      responseType: 'json', // default   // `responseType` 表示服务器响应的数据类型 相当于 jsonType
 * })
 */

import Axios from 'axios';

const baseURL = ''
const TIMEOUT = 5000

const axios = Axios.create({
	baseURL,
	withCredentials: true,
	xsrfCookieName: 'MMAUTHTOKEN',
	xsrfHeaderName: 'Authorization',
	timeout: TIMEOUT
});

// 请求体预处理
axios.interceptors.request.use(config => {
	// Mind 下手动增加 token
	// if(config.url.includes(MindBaseUrl)) {
	// 	config.url += config.url.includes('?') ? `&access_token=${store.getters.token}` : `?access_token=${store.getters.token}`
	// }
	return config;
}, error => {
	return Promise.reject(error)
})

// 请求返回信息处理
axios.interceptors.response.use(response => {
	// 可以对请求返回的data修改，提前处理返回的 status 等
	if (response.status >= 400 && response.status < 500) {
		return Promise.reject(response)
	} else if(response.status !== 200) {
		return Promise.reject(response)
	}
	const responseData = response.data,
		code = responseData.code;
	switch (code) {
		case 0:
			return responseData.data;
		case -1:
			return Promise.reject(responseData)
		default:
			return responseData;
	}
}, error => {
	return Promise.reject(error);
});

export const post = (url, data = {}) => {
	return axios({
		url,
		method: 'post',
		data,
	})
}

export const get = (url, params = {}) => {
	return axios({
		url,
		method: 'get',
		params
	})
}

export default axios;