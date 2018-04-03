<template>
  <div class="input-option">
    <span class="name">{{ name }}</span>
    <input type="text" :placeholder="placeholder" v-model="inputValue">
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'input-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      value: null,
      placeholder: {
        type: String,
        default:"请输入......"
      }
    },
    data() {
      return {
        inputValue: this.value
      }
    },
    watch: {
      inputValue: function (newValue) {
        this.$emit('update:value', newValue)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/style/variable.less";

 .input-option {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  transform: rotate(0deg);
  overflow: hidden;
}
.input-option .name {
  flex: 0 0 auto;
  width: @option-name-size-small;
  padding-left: 10px;
  display: inline-flex;
  align-items: center;
}
.input-option input {
  flex: 1 1 auto;
  min-width: 1px;
  padding: 0 10px;
  background-color: @color-white;
  border-left: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 0 1px 1px #eee inset;
  outline: none;
}
.input-option input:focus {
  outline: #fc9153 solid 1px;
  outline-offset: -1px;
}

</style>
