/**
 * import  * as utils from '../static/js/utils.js'
 */

export function vLog(msg,target){
	console.log(msg);
}

export function vToast(vue, txt, mask, time, type) {
	let config = {
		txt: txt,
		mask: mask || false,
		type: 'warn',
		time: time * 1000 || 3000,
	};

	const toast = vue.$createToast(config)

	toast.show();
}