<template>
  <div class="select-option">
    <span class="name">{{ name }}</span>    
    <cube-select class="select" v-model="selected" placeholder="请选择" :options="options" @change="change"></cube-select>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'select-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      options: {
        type: Array
      },
      defaultIndex: {
        type: Number,
        default:-1
      },
      value: null
    },
    data() {
      return {
        selected: this.value,
        selectIndex:this.defaultIndex
      }
    },
    watch: {
      selected: function (newValue) {
        this.$emit('update:value', newValue,this.selectIndex)
      }
    },
    mounted() {
      
    },
    methods: {
      change(value,index,text) {
         this.selected=value
         this.selectIndex=index
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/style/variable.less";

.select-option {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
}
.select-option .name {
  flex: 0 0 auto;
  width: @option-name-size-small;
  display: inline-flex;
  padding-left: 10px;
  align-items: center;
  text-align: right;
}
.select-option .select {
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  padding-left: 10px;  
  border-left: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 0 1px 1px #eee inset;    
  border: 0px solid @color-orange;
}
.select-option .select:focus {
  border: 1px solid @color-orange;
}

.cube-select::after {    
    border: 0px solid #ccc;    
    border-left: 1px solid rgba(0,0,0,0.1);
}

</style>
