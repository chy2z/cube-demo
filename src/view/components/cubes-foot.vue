<template>
	 <footer class="cubes-foot">       
		  <div class="cubes-tabbar cubes-hairline--top-bottom cubes-tabbar--fixed">
			<div v-for="(item, index) in tabItems" :key="index" 
				@click="tabClick(index,item.path)" 
				:class="item.active?'cubes-tabbar-item cubes-tabbar-item--active':'cubes-tabbar-item'">
				<div class="cubes-tabbar-item__icon">
					<i class="iconfont" v-html="item.icon"></i> 
                </div>
				<div class="cubes-tabbar-item__text">
					<span>{{item.title}}</span>
				</div>
			</div>
		</div>
     </footer>
</template>

<script>	
  export default {
    data(){
    	return {
    		activeTable:2,
    		tabItems:[
    		   {
    		   	 icon:"&#xe630;",active:false,title:"首页",path:"/HomePage"
    		   },{
    		   	icon:"&#xe631;",active:false,title:"分类",path:"/Kind"
    		   },{
    		   	icon:"&#xe645;",active:true,title:"订单",path:"/Order"
    		   },{
    		   	icon:"&#xe62f;",active:false,title:"我的",path:"/My"
    		   }
    		]
    	}
    },
    methods: {
       tabClick(key,path){
           console.log(key);
           this.tabItems[this.activeTable].active=false;
           this.activeTable=key;
       	   this.tabItems[this.activeTable].active=true;
       	   this.$emit('foot-click', path);
       }
    },
    components:{
    	
    }
  }
	
</script>

<style scoped="scoped" lang="less">
@import "../../static/style/variable.less";

.cubes-foot {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: @foot-tab-height;
  line-height: @foot-tab-height;
  text-align: center;
  color: #ffDE40;
  background-color: #000;
  box-shadow: 0 1px 6px #ccc;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.cubes-tabbar {
    position: relative;
    width: 100%;
    height: @foot-tab-height;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;    
}

.cubes-tabbar--fixed {
    left: 0;
    bottom: 0;
    position: fixed;
}


.cubes-tabbar-item {
    cursor: pointer;
}

.cubes-tabbar-item--active {
    color: #fff;
}

.cubes-tabbar-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;    
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    line-height: 1;
    font-size: 8px;    
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}

.cubes-tabbar-item__icon {
    margin-bottom: 5px;
    position: relative;
}
</style>