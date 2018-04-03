<template>
	<cubes-page :type="type"
	 :title="title">
		<template slot="content">	
		    <div class="options">
				<div class="option-list">
					<div class="group">
						<input-option class="item sub" name="用户名" :value="name" placeholder="请输入用户名"
		                          @update:value="updateName"></input-option>
						<input-option class="item sub" name="手机号" :value="phone" placeholder="请输入手机号"
		                          @update:value="updatePhone"></input-option>	
		                <phone-message-option class="item sub" name="验证码" :value="message" placeholder="请输入验证码"
		                          @update:value="updateMessage" @send-Message="sendMessage" ></phone-message-option>
					</div>
				</div>
		    </div>      
		    <div class="register-bottom">
				<cube-button @click='registerClick'>立即注册</cube-button>
			</div>	
		</template>
	</cubes-page>
</template>

<script type="text/ecmascript-6">
	import CubesPage from './components/cubes-page'
	import InputOption from './components/input-option'
	import PhoneMessageOption from './components/phone-message-option'
	import ajaxHelper from '../static/js/ajaxHelper.js'
	import  * as utils from '../static/js/utils.js'
	export default {
		data() {
			return {
				title: "注册",
				type: "register-view",				 
		        phone: '',
		        name: '',
		        message:''
			}
		},
		components: {
			CubesPage,
			InputOption,
			PhoneMessageOption
		},
		methods: {
			registerClick() {				
				utils.vToast(this,"测试");				
			},
			updatePhone(val) {
		        this.phone = val;
		    },
		    updateName(val) {
		        this.name = val;
		    },
		    updateMessage(){
		    	this.message=val;
		    },
		    sendMessage(){
		    	utils.vToast(this,"验证码已发送");		
		    }
		}
	}
</script>

<style lang="less">
	.register-view {
		.register-bottom {
			margin: 50px 0;
		}	
	}
</style>