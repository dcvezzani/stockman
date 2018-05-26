// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

require('../node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js');

Vue.config.productionTip = false

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
