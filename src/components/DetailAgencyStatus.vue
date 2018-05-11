<template>

<section class="accordions">
	<DetailAgencyStatusEntry v-for="agency in agencies" :key="agency.name" :label="agency.name"></DetailAgencyStatusEntry>

	<div class="field add-new-agency has-addons">
		<p class="control">
			<input class="input is-rounded" type="text" placeholder="Add new agency">
		</p>
		<p class="control">
			<a class="button is-rounded is-primary">Add</a>
		</p>
	</div>

</section>

</template>

<script>
import _ from 'lodash';
import DetailAgencyStatusEntry from '@/components/DetailAgencyStatusEntry'

export default {
  // props: [ 'name', 'label' ],
  name: 'DetailAgencyStatus',
  components: { DetailAgencyStatusEntry },
  computed: {
		// checkId() {
		// 	return ((!_.isEmpty(this.name)) ? this.name : this.label.toLowerCase().replace(/ +/g, '-'));
		// },
		// classNames() {
		// 	return ['photo'];
		// },
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			agencies: [
			  {name: 'Dreamstime'},
			  {name: 'Istock'},
			  {name: 'Fotolia'},
			  {name: 'Shutterstock'},
			  {name: 'Mostphotos'},
			  {name: 'Pond5'},
			],
    }
  }, 
	mounted () {
		this.$nextTick(() => {
			require('../../node_modules/bulma-extensions/bulma-accordion/dist/bulma-accordion.min.js');
		});
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.field.add-new-agency {
		margin-top: 1em;
	}
	div.add-new-agency p:nth-child(1) {
    width: 85%;
	}
</style>
