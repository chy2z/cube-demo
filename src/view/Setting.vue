<template>	
	<cubes-page :type="type" :title="title">
	<template slot="content">	
	<div class="wrapper">
		<main class="cubes-page-content">
			<ul class="cubes-list">
				<li class="cubes-item border-bottom-1px" v-for="(component, index) in components" :key="index">
					<template v-if="component.link">	
						<router-link class="link" :to="component.path">{{component.text}}
							<i class="cubesic-arrow iconfont">&#xe62d;</i>
						</router-link>
					</template>		
					<template v-else>
						<a class="link" @click="checkUpdate" href="#">
							{{component.text}}
							<i class="cubesic-arrow iconfont">&#xe62d;</i>
						</a>
					</template>
				</li>
			</ul>
		</main>
	</div>	
    </template>
	</cubes-page>
</template>

<script type="text/ecmascript-6">  
  import ajaxHelper from '../static/js/ajaxHelper.js'
  import  * as utils from '../static/js/utils.js'
  import CubesPage from './components/cubes-page'
  export default {
    data() {
      return {
      	title: "设置",
		type: "setting-view",
        components: [
          {
            path: '/',
            text: '检测更新',
            link:false
          },
          {
            path: '/',
            text: '帮助中心',
            link:true
          },
          {
            path: '/',
            text: '建议反馈',
            link:true
          },
          {
            path: '/',
            text: '关于我们',
            link:true
          }
        ]
      }
    },
    methods:{
    	back(){
    		 this.$router.back();
    	},
    	checkUpdate(){
    		utils.vToast(this,"已经是最新版本");
    	}
    },
    components: {
     CubesPage
    }
  }
</script>

<style lang="less">	
  
</style>
