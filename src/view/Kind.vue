<template>
	<div class="cubes-layout">
		
    <header class="cubes-head">
      <h1>种类</h1>          
    </header>
    
    <section class="cubes-content">
     
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

.cubes-head .cubes-head-kefu{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 15px;        
        cursor: pointer;
}

.cubes-head .cubes-head-code{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 60px;   
        cursor: pointer;     
}

</style>
