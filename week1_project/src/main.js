// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay, } from 'swiper'
import App from './App'
import { vfmPlugin } from 'vue-final-modal'

import "bootstrap"; // 從nodeModule中載入Bootstrap
import 'bootstrap/scss/bootstrap.scss'; // Import css file
import 'swiper/swiper-bundle.css'
//引入Scss檔案
import "@/assets/scss/style.scss";
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.use(vfmPlugin)

swiper.use([Navigation, Pagination, Autoplay])
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
