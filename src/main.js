// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

require('../node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js');

Vue.config.productionTip = false
Vue.use(Vuex);

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
    count: 0, 
    keywords: ['one', 'two', 'three'],
    title: "Broccoli is great!", 
    description: " Dolor quae recusandae vitae hic magni. Iure tempore error assumenda laudantium quidem Architecto maxime possimus facere dicta eligendi Exercitationem a ipsum itaque tempore eaque possimus. Dignissimos nesciunt officiis dicta numquam!  ", 
    agencies: ['aaa', 'bbb', 'ccc', 'ddd'], 
    // category: ['category 1', 'category 3', 'category 4'], // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
    category: 'category 1', // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
    releaseForm: "/stock/static/doc/releaseForm.pdf", 
    editorial: true, 
    illustration: false, 
    adult: false, 
  },
  getters: {
    getField,
    // editorial: state => state.editorial,
  },
  mutations: {
    updateField,
    // editorial: (state, payload) => state.editorial = payload.editorial, 
    
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
