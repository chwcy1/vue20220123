// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import axios from 'axios';
import http from './utils/http';
import VueResource from 'vue-resource';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);
//Vue.directive('click-outside', {
//  undefined,
//  bind: function (el, binding, vnode) {
//    undefined
//    el.clickOutsideEvent = function (event) {
//      undefined
//      // here I check that click was outside the el and his childrens
//      if (!(el == event.target || el.contains(event.target))) {
//        undefined
//        // and if it did, call method provided in attribute value
//        vnode.contextbinding.expression
//      }
//    }
//    document.body.addEventListener('click', el.clickOutsideEvent)
//  },
//  unbind: function (el) {
//    undefined
//    document.body.removeEventListener('click', el.clickOutsideEvent)
//  }
//})
// const jwt = require('jsonwebtoken');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


