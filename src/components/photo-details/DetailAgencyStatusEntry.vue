<template>

    <BulmaAccordionItem>
        <p slot="title">{{ label }}</p>
				<div slot="content" class="card">
					<div class="card-content">
						<div class="content">
							<XSwitch label="Uploaded"></XSwitch>
							<XSwitch label="Submitted"></XSwitch>
							<XSwitch label="Accepted"></XSwitch>
						</div>
					</div>
				</div>
        <button v-if="label === 'Fotolia'" class="button is-primary" slot="footer">Click Me!</button>
    </BulmaAccordionItem> <!-- add as many of these items as you need - fill them with content via the slots -->
		
</template>

<script>
// import _ from 'lodash';
import { BulmaAccordionItem } from 'vue-bulma-accordion'
import XSwitch from '@/components/photo-details/XSwitch'

export default {
  props: [ 'name', 'label' ],
  components: { BulmaAccordionItem, XSwitch },
  name: 'DetailAgencyStatusEntry',
  computed: {
		accordionId() {
			return ((!_.isEmpty(this.name)) ? this.name : this.label.toLowerCase().replace(/ +/g, '-'));
		},
		classNames() {
			return ['accordion', (this.isActive === true) ? 'is-active' : ''];
		},
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			isActive: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
