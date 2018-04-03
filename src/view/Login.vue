<template>
	<cubes-page :type="type"
	 :title="title">
		<template slot="content">

			<div class="login-body">

                <div class="label">用户名 </div>   

				<div class="login-body-item">
					<cube-input v-model="nameInput.value"
					 :placeholder="nameInput.placeholder"
					 :type="nameInput.type"
					 :maxlength="nameInput.maxlength"
					 :autofocus="nameInput.autofocus"
					 :clearable="nameInput.clearable"></cube-input>
				</div>

                <div class="label">密码 </div>

				<div class="login-body-item">
					<cube-input v-model="pwdInput.value"
					 :placeholder="pwdInput.placeholder"
					 :type="pwdInput.type"
					 :maxlength="pwdInput.maxlength"
					 :autofocus="pwdInput.autofocus"
					 :clearable="pwdInput.clearable"
					 :eye="pwdInput.eye"></cube-input>
				</div>			
				

			</div>

            <div class="login-forget">
				<span class="forgetpwd">忘记密码</span>
				<span class="split">|</span>
				<span class="regedit">用户注册</span>	
			</div>	

			<div class="login-button">
				<cube-button @click='loginClick'>立即登录</cube-button>
			</div>				

			<div class="login-line"></div>			
			
			<div class="login-select">
				<div class="group">
					<img src="../assets/qqlogin.png" />					
				</div>	
				<div class="group">
					<img src="../assets/wxlogin.png" />		
				</div>	
				<div class="group">
					<img src="../assets/weibologin.png" />							
				</div>	
			</div>	

		</template>
	</cubes-page>
</template>

<script type="text/ecmascript-6">
	import CubesPage from './components/cubes-page'
	import ajaxHelper from '../static/js/ajaxHelper.js'
	import  * as utils from '../static/js/utils.js'
	export default {
		data() {
			return {
				title: "登录",
				type: "login-view",
				nameInput: {
					value: '',
					placeholder: '请输入登录名称',
					type: 'text',
					maxlength: 20,
					autofocus: true,
					clearable: true
				},
				pwdInput: {
					value: '',
					placeholder: '请输入登录 密码',
					type: 'password',
					maxlength: 20,
					autofocus: true,
					clearable: true,
					eye: {
						open: false
					}
				}
			}
		},
		components: {
			CubesPage
		},
		methods: {
			loginClick() {
				
				utils.vToast(this,"测试");
				
				/*
				ajaxHelper.get(this,"/user", {}, () => {

				}, () => {
					
				});
				
				ajaxHelper.post(this,"/login", {}, () => {

				}, () => {
					
				});
				
				*/
			}
		}
	}
</script>

<style lang="less">	
	.login-view {		
		.login-body {
			margin: 30px 0;
			.login-body-item {
				margin: 10px 0;
			}
		}		
		.login-button {
			margin: 20px 0;
		}		
		.login-line {
			background-color: gainsboro;
			margin: 50px auto;
			width: 80%;
			height: 1px;			
			padding: 0px;
			overflow: hidden;
		}
		.login-forget{
			margin: 10px 0;
			text-align: center;
			height: 44px;
            line-height: 44px; 
            span{
            	color: #FFAE40;
            	cursor: pointer;
            }              
		}
		.login-select{
		    display: flex;
		    flex-direction: row;
		    justify-content: center;
		    .group{
		    	margin: 0 5px;
		    	img{
		    		width:64px;
		    		height:64px;
		    	}
		    }		    
		}
		.label {
		      color:#000;
			  margin: 15px 5px;
		}
		
	}


</style>