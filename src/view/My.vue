<template>
	<div class="cubes-layout">		
    <header class="cubes-head">
      <h1>我的</h1>      
      <i class="cubes-head-kefu iconfont">&#xe625;</i>
      <i class="cubes-head-code iconfont">&#xe632;</i>
    </header>    
    <section class="cubes-content">
           <div class="cubes-content-top">
             
           </div>
           <div class="cubes-content-menu">
           
           </div>
    </section>
    </div>
</template>

<script type="text/ecmascript-6">  
  export default {
    data() {
      return {
        
      }
    },
    components: {
     
    }
  }
</script>

<style scoped="scoped" lang="less">
.cubes-head {
	.cubes-head-kefu{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 15px;        
        cursor: pointer;
    }
    .cubes-head-code{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 60px;   
        cursor: pointer;     
    }
}

.cubes-content  {
	.cubes-content-top{
		 height: 100px;		 
		 background-image: url(../assets/my-bg.jpg);
	}
}

</style>
