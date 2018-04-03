<template>
	<div class="phone-message-option">
    <span class="name">{{ name }}</span>
    <input type="text" :placeholder="placeholder" v-model="inputValue">
    <cube-button class="send" :primary="true" @click='sendClick'>验证码</cube-button>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'phone-message-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      placeholder: {
        type: String,
        default:"请输入......"
      },
      value: null     
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
    },
    methods:{
    	sendClick(){
    	   this.$emit('send-Message');
    	}
    }
  }
</script>

<style scoped lang="less">
  @import "../../static/style/variable.less";

 .phone-message-option{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  transform: rotate(0deg);
  overflow: hidden;
}
.phone-message-option .name {
  flex: 0 0 auto;
  width: @option-name-size-small;
  padding-left: 10px;
  display: inline-flex;
  align-items: center;
}
.phone-message-option input {
  flex: 1 1 auto;
  min-width: 1px;
  padding: 0 10px;
  background-color: @color-white;
  border-left: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 0 1px 1px #eee inset;
  outline: none;
}
.phone-message-option input:focus {
  outline: #fc9153 solid 1px;
  outline-offset: -1px;
}

.phone-message-option .send{
  flex: 0 0 100px;
}

</style>