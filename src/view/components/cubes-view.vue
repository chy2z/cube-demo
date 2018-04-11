<template>
	<div id="route-view">
  <transition name="fade"> 
    <keep-alive>
	    <router-view v-if="$route.meta.keepAlive" class="cube-view" >
	        <!-- 这里是会被缓存的视图组件-->
	    </router-view>
    </keep-alive>		
   </transition>
   <transition name="page-move">
    <router-view v-if="!$route.meta.keepAlive">
		    <!-- 这里是不被缓存的视图组件 -->
	</router-view>	
  </transition> 
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
    	return {
    		
    	}
    },
    methods: {
      
    },
    components:{
    	
    }
  }
</script>

<style lang="less">
	#route-view{
		height: 100%;
		padding: 0; 
		margin: 0;
		overflow: hidden;
  }	
  
  .cube-view{
    transform: translate3d(0, 0, 0);
   }
   
  .page-move-enter, .page-move-leave-active{
    transform: translate3d(100%, 0, 0);
    }
  .page-move-enter-active, .page-move-leave-active{
    transition: transform .3s;
    }
    
  .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to  {
	  opacity: 0;
	}    
</style>