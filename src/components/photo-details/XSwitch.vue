<template>

	<div class="field">
		<input @click="toggleCheckbox" :id="switchId" type="checkbox" :name="switchId" class="switch is-rounded" :checked="checked">
		<label :for="switchId">{{ label }}</label>
	</div>			

</template>

<script>
import _ from 'lodash';

export default {
  props: [ 'name', 'label', 'sync2' ],
  name: 'XSwitch',
  computed: {
		switchId() {
			return ((!_.isEmpty(this.name)) ? this.name : this.label.toLowerCase().replace(/ +/g, '-'));
		},
		classNames() {
			return ['photo'];
		},
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			checked: false,
    }
  }, 
	methods: {
		toggleCheckbox: function(evt) {
			let data = {};
			data[`${this.sync2}`] = this.checked;
			window.Event.$emit('form-event', data);
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.field {
		text-align: left; 
	}
</style>
