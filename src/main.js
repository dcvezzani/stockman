// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client';

// Require the main Sass manifest file
require('./assets/sass/main.scss');

require('../node_modules/vue-bulma-accordion/dist/vue-bulma-accordion.browser.js');

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueSocketio, io('http://127.0.0.1:3000', { path: '/io'}));

window.Event = new Vue();

Vue.mixin({
	beforeCreate(){
  	const sync = this.$options.sync
  	if(sync){
    	if(!this.$options.computed){
      	this.$options.computed = {}
      }
      const attrs = Object.keys(this.$attrs)
      sync.forEach(key => {
      	if(!attrs.includes(key)){
        	Vue.util.warn(`Missing required sync-prop: "${key}"`, this)
        }
        this.$options.computed[key] = {
        	get(){
          	return this.$attrs[key]
          },
          set(val){
          	this.$emit('update:' + key, val)
          }
        }
      })
    }
  }
})

import { getField, updateField } from 'vuex-map-fields';

const store = new Vuex.Store({
  state: {
    socketIoLoading: false,
    socketIoLoaded: false,
    count: 0, 
    id: -1,
    keywords: [],
    title: "", 
    description: "",
    agencies: [], 
    // category: ['category 1', 'category 3', 'category 4'], // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
    category: '', // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
    releaseForm: "", 
    editorial: false, 
    illustration: false, 
    adult: false, 
  },
  getters: {
    getField,
    keywordsAsArray: state => {
      if (typeof state.keywords === 'string') {
        return state.keywords.split(/ *, */);
      }
      return state.keywords;
    },
    state: state => state,
    flags: flags => flags,
  },
  mutations: {
    updateField,
    setState: (state, payload) => {
      // console.log("in setState", Object.keys(state))
      Object.keys(state).forEach(key => state[key] = payload[key]);
    },
    setFlags: (flags, payload) => {
      Object.keys(flags).forEach(key => flags[key] = payload[key]);
    },
  },
})

//   getters: {
//     counter: state => state.counter * 2,
//     editorial: state => state.editorial,
//     illustration: state => state.illustration,
//     adult: state => state.adult,
//   },
//   mutations: {
//     // Mutations
//     editorial: (state, payload) => state.editorial = payload.editorial, 
//     illustration: (state, payload) => state.illustration = payload.illustration, 
//     adult: (state, payload) => state.adult = payload.adult, 
//   }
// 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store: store,
  template: '<App/>'
})
