// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'

import "bootstrap"; // 從nodeModule中載入Bootstrap
import 'bootstrap/scss/bootstrap.scss'; // Import css file
//引入Scss檔案
import "@/assets/scss/style.scss";
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
