<template>
	<div class="cubes-layout">
		
    <header class="cubes-head">
      <h1>首页</h1>      
      <i class="cubes-head-news iconfont">&#xe633;</i>
      <i class="cubes-head-code iconfont">&#xe62e;</i>
    </header>
    
    <section class="cubes-content">
      <ul class="cubes-list">
        <li class="cubes-item border-bottom-1px" v-for="(component, index) in components" :key="index">
          <router-link class="link" :to="component.path">
          	{{component.text}}
          	<i class="cubesic-arrow iconfont">&#xe62d;</i>
          </router-link>
        </li>
      </ul>
    </section>  
    
    </div>
</template>

<script type="text/ecmascript-6">  

  export default {
    data() {
      return {
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
          },
          {
            path: '/radio',
            text: 'Radio'
          }          
        ]
      }
    },
    components: {
     
    }
  }
</script>

<style scoped="scoped" lang="less">

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

</style>
