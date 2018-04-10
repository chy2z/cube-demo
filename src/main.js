import FastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  CheckboxGroup,
  Radio,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  CascadePicker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList,
  Swipe,
  Upload
} from 'cube-ui'

Vue.use(Button)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Textarea)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Rate)
Vue.use(Validator)
Vue.use(Loading)
Vue.use(Tip)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(CascadePicker)
Vue.use(TimePicker)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(IndexList)
Vue.use(Swipe)
Vue.use(Upload)
Vue.use(VueLazyload)
FastClick.attach(document.body) 
import "./static/style/iconfont/iconfont.less" 
import "./static/style/common.less" 
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App },
  data: {
     currentPageName: ''
  },
  mounted () {
        this.currentPageName = this.$route.name; 
        console.log(this.currentPageName);        
  },
  created () {
  
  }
})