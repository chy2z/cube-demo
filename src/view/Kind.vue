<template>
	<div class="cubes-layout">		
    <header class="cubes-head">
      <h1>分类</h1>          
    </header>    
    <section class="cubes-content">     
     <div class="view-wrapper">
        <div class="index-list-wrapper custom">
          <cube-index-list :data="singerData">
            <cube-index-list-group v-for="(group, index) in singerData" :key="index" :group="group">
              <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item" @select="selectItem">
                <div class="custom-item">
                  <img class="avatar" v-lazy="item.avatar">
                  <span class="name">{{item.name}}</span>
                </div>
              </cube-index-list-item>
            </cube-index-list-group>
          </cube-index-list>
        </div>
      </div>         
    </section>  
    </div>
</template>

<script type="text/ecmascript-6">  
import singerData from './data/singer.json'
export default {
    components: {
     
    },
    data() {
      return {
        singerData: singerData
      }
    },
    mounted () {        
       console.log("kind-mounted");        
	},
	created () {
	   console.log("kind-created");     
	},
    methods: {
      selectItem(item) {
        console.log(item.name)
        this.$router.push("/Login");
      },
      clickTitle(title) {
        console.log(title)
      }
    }
 }  
</script>

<style  lang="less">
@import "../static/style/variable.less";

.view-wrapper {
  position: fixed;
  top: @head-height;
  left: 0;
  bottom: 0;
  width: 100%;
}
.view-wrapper .index-list-wrapper {
  height: 98%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-content {
  background-color: #f1f1f3;
  color: #2f2929;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-group {
  padding-bottom: 30px;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-anchor {
  background-color: #333;
  color: #fff;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 20px;
}
.view-wrapper .index-list-wrapper.custom .custom-item {
  display: flex;
  align-items: center;
  padding: 20px 0 0 30px;
}
.view-wrapper .index-list-wrapper.custom .custom-item .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.view-wrapper .index-list-wrapper.custom .custom-item .name {
  margin-left: 20px;  
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-nav {
  padding: 20px 0;
  border-radius: 10px;
  background: rgba(0,0,0,0.3);
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-nav >ul >li {
  padding: 4px;
  font-size: 12px;
  color: #FFFFFF;
}
.view-wrapper .index-list-wrapper.custom .cube-index-list-nav >ul >li.active {
  color: #ffcd32;
}
</style>
