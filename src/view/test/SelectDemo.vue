<template>
	<cubes-page :type="type"
	 :title="title">
		<template slot="content">	
		    <div class="options">
				<div class="option-list">
					<div class="group">
						<input-option class="item sub" name="手机" :value="phone"
		                          @update:value="updatePhone"></input-option>
		                <input-option class="item sub" name="姓名" :value="name"
		                          @update:value="updateName"></input-option>
		                <picker-option class="item sub" name="性别" :value="sexOptions[0]" :defaultIndex="sexSelectIndex"
		                          @update:value="updateSex" :options="sexOptions"></picker-option>
		                <select-option class="item sub" name="爱好" :value="liking" 
		                          @update:value="updateLike" :options="likeOptions"></select-option>
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
	import CubesPage from './../components/cubes-page'
	import InputOption from './../components/input-option'
	import PickerOption from './../components/picker-option'
	import SelectOption from './../components/select-option'
	import ajaxHelper from '../../static/js/ajaxHelper.js'
	import  * as utils from '../../static/js/utils.js'
	export default {
		data() {
			return {
				title: "注册",
				type: "register-view",				 
		        phone: '18955545432',
		        name: 'chy',	
		        sex:"",
		        sexSelectIndex:0,
		        sexOptions: [
			          {
			            text: '男',
			            value: '男'
			          },
			          {
			            text: '女',
			            value: '女'
			          }
			    ],
			    liking:"",
			    likeOptions:[
			          {
			            text: '音乐',
			            value: '音乐'
			          },
			          {
			            text: '游戏',
			            value: '游戏'
			          },
			          {
			            text: '电影',
			            value: '电影'
			          }
			    ]
			}
		},
		components: {
			CubesPage,
			InputOption,
			PickerOption,
			SelectOption
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
		    updateSex(option,selectIndex){
		        //console.log(option);	
		        //console.log(selectIndex);	
		        this.sex=option.value;
		    },
		    updateLike(val,selectIndex){
		    	this.liking=val;
		    	utils.vLog(this.liking);
		    	utils.vLog(selectIndex);
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