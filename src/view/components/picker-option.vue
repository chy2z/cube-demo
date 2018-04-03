<template>
  <div class="select-option">
    <span class="name">{{ name }}</span>
    <span class="select" @click="showPicker">{{ selected.text }}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'picker-option'
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
        type: Number
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
      const self = this         
      this.picker = this.$createPicker({
        title: `选择 ${this.name}`,
        data: [this.options],
        cancelTxt: '取消',
        confirmTxt: '确认',
        onValueChange(selectValue,selectIndex,selectText) {
        	  self.selectIndex=selectIndex[0];
            self.selected=self.options[selectIndex[0]];
        }
      })
    },
    methods: {
      showPicker() {
        this.picker.show()
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
}
.select-option .select {
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
  border-left: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 0 1px 1px #eee inset;
  background-color: @color-white;
}
.select-option .select:focus {
  border: 1px solid @color-orange;
}

</style>
