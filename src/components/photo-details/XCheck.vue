<template>

	<div class="field">
		<label class="checkbox" :for="checkId">
			<input type="checkbox" :name="checkId">
			{{ label }}
		</label>
	</div>			

</template>

<script>
import _ from 'lodash';

export default {
  props: [ 'name', 'label' ],
  name: 'XCheck',
  computed: {
		checkId() {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.field {
		text-align: left; 
	}
</style>
