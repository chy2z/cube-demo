/**
 * import ajaxHelper from '../static/js/ajaxHelper.js'
 */

import axios from 'axios';
import env from '../../../build/env';

const ajax= axios.create({
		baseURL: env === 'development' ? 'http://127.0.0.1:8888' : 'http://127.0.0.1:8888',
		timeout: 30000
})

let ajaxHelper = {
	get: function(vue,url, params,successEvent,errorEvent) {
		let ajaxToast = vue.$createToast({
	        txt: '正在努力加载数据...',
	        mask: true
	        })
		ajaxToast.show();
		ajax.get(url, {
				params: params
			})
			.then(function(res) {
				ajaxToast.hide();
				console.log(res);
				successEvent&&successEvent(res);
			})
			.catch(function(err) {
				ajaxToast.hide();
				console.log(err);
				errorEvent&&errorEvent(err);
			});
	},
	post: function(vue,url, params,json,successEvent,errorEvent) {
		let ajaxToast = vue.$createToast({
	        txt: '正在努力加载数据...',
	        mask: true
	        })
		ajaxToast.show();
		ajax.post(url,params)
			.then(function(res) {
				ajaxToast.hide();
				console.log(res);
				successEvent&&successEvent(res);
			})
			.catch(function(err) {
				ajaxToast.hide();
				console.log(err);
				errorEvent&&errorEvent(err);
			});

	}
};

export default ajaxHelper;