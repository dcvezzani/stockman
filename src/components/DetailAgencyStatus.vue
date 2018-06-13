<template>

<section class="accordions">

<BulmaAccordion
:dropdown="true"
:icon="'caret'"
:caretAnimation="{
    duration: '.6s',
    timerFunc: 'ease-in-out',
}"
:slide="{
    duration: '.9s',
    timerFunc: 'ease',
}"
> <!-- The wrapper component for all the items -->
		<DetailAgencyStatusEntry v-for="agency in agencies" :label="agency.name" :key="agency.name"></DetailAgencyStatusEntry>
</BulmaAccordion>



</section>

</template>

<script>
import _ from 'lodash';
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
import DetailAgencyStatusEntry from '@/components/DetailAgencyStatusEntry'
import XSwitch from '@/components/XSwitch'

export default {
  // props: [ 'name', 'label' ],
  name: 'DetailAgencyStatus',
  components: { DetailAgencyStatusEntry, BulmaAccordion, BulmaAccordionItem, XSwitch },
	
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
