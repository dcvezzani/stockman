<template>

  <article :class="classNames">
    <div class="accordion-header toggle">
      <p>{{ label }}</p>
      <button class="toggle" aria-label="toggle"></button>
    </div>
    <div class="accordion-body">
      <div class="accordion-content">
	<div class="card">
		<div class="card-content">
			<div class="content">
				<XSwitch label="Uploaded"></XSwitch>
				<XSwitch label="Submitted"></XSwitch>
				<XSwitch label="Accepted"></XSwitch>
			</div>
		</div>
	</div>

      </div>
    </div>
  </article>

</template>

<script>
// import _ from 'lodash';
import XSwitch from '@/components/XSwitch'

export default {
  props: [ 'name', 'label' ],
  components: { XSwitch },
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
