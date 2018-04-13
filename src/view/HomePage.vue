<template>
	<div class="cubes-layout">
    <header class="cubes-head">
      <h1>首页</h1>      
      <i class="cubes-head-news iconfont">&#xe633;</i>
      <i class="cubes-head-code iconfont">&#xe62e;</i>
    </header>    
    <div class="cubes-content">          
         <scroll-list-option :value="components" :type="scrollType" 
         	         :pulldown="false" :pullup="false"
		             @pulling-down="onPullingDown"
					 @pulling-up="onPullingUp" >
					    
					   <div slot="item">
	     
					     <image-carousel-option :type="imageCarouselType" :value="imgItems" 
					     	    @change="changePage"
					            @click="clickPage">
					     </image-carousel-option>  
					     
					     <grid-menu-option :type="gridMenType" :value="menuItems" 
					     	@item-click="itemClick">     	
					     </grid-menu-option>
					    	
					     <ul class="cubes-list">
					        <li class="cubes-item border-bottom-1px" @click="selectItem(component,$event)" v-for="(component, index) in components" :key="index">
					          <a class="link" >
					          	{{component.text}}
					          	<i class="cubesic-arrow iconfont">&#xe62d;</i>
					          </a>
					        </li>
					     </ul>	    
	     
	                   </div>	  					 
					     							
          </scroll-list-option>       
    </div>  
    </div>
</template>

<script type="text/ecmascript-6">  
  import ScrollListOption from './components/scroll-list-option'
  import ImageCarouselOption from './components/image-carousel-option'
  import GridMenuOption from './components/grid-menu-option'  
  export default {
    data() {
      return {      	
      	scrollType:"homepage-scroll",
      	imageCarouselType:"image-carousel-top",
      	imgItems: [
          {            
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {           
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }
        ],
        gridMenType:"grid-menu-body",
        menuItems:[
           {img:"//www.w3school.com.cn/ui2017/compatible_chrome.png",text:"菜单1"},
           {img:"//www.w3school.com.cn/ui2017/compatible_firefox.png",text:"菜单2"},
           {img:"//www.w3school.com.cn/ui2017/compatible_ie.png",text:"菜单3"},
           {img:"//www.w3school.com.cn/ui2017/compatible_opera.png",text:"菜单4"},
           {img:"//www.w3school.com.cn/ui2017/compatible_chrome.png",text:"菜单5"},
           {img:"//www.w3school.com.cn/ui2017/compatible_firefox.png",text:"菜单6"},
           {img:"//www.w3school.com.cn/ui2017/compatible_ie.png",text:"菜单7"},
           {img:"//www.w3school.com.cn/ui2017/compatible_opera.png",text:"菜单8"}
        ],
        components: [
          {
            path: '/Login',
            text: '登录'
          },
          {
            path: '/Setting',
            text: '设置'
          },
          {
            path: 'Register',
            text: '注册'
          }           
        ]
      }
    },
    components: {
       ImageCarouselOption,
       GridMenuOption,
       ScrollListOption
    },    
    mounted () {        
       console.log("home-mounted");        
	},
	created () {
	   console.log("home-created");     
	},   
    methods:{
      changePage(current) {
        //console.log('当前轮播图序号为:' + current)
      },
      clickPage(item, index) {
        console.log(item)
      },
      selectItem(item,event){
      	console.log(item);
      },
      itemClick(item, index){
      	console.log(item)
      },
      onPullingDown(scroll) {				
		console.log("down");	
	  },
	  onPullingUp(scroll) {				
		console.log("up");	
	  }
    }
  }
</script>

<style scoped="scoped" lang="less">

.homepage-scroll {
		&.scroll-option {
			height: 100%;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			transform: rotate(0deg);
			overflow: hidden;
		}
}

.cubes-head .cubes-head-news{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 60px;        
        cursor: pointer;
}

.cubes-head .cubes-head-code{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 15px;   
        cursor: pointer;     
}

.image-carousel-top.slide-container{
	height:80px;
}

</style>