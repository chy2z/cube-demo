<template>
  <div id="app">
    <cubes-view></cubes-view>
    <cubes-foot @foot-click="footClick"></cubes-foot>
  </div>
</template>

<script>
	import CubesFoot from './view/components/cubes-foot'
	import CubesView from './view/components/cubes-view'	
	export default {
    data(){
    	return {
    		
    	}
    },
    methods: {
       footClick(path){
       	   this.$router.push(path);
       }
    },
    components:{
    	CubesFoot,
    	CubesView
    }
  }
	
</script>

<style>	
#app{
	height: 100%;
	padding: 0; 
	margin: 0;
	overflow: hidden;
}
</style>