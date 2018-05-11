<template>

  <article :class="classNames">
    <div class="accordion-header toggle">
      <p>{{ label }}</p>
      <button class="toggle" aria-label="toggle"></button>
    </div>
    <div class="accordion-body">
      <div class="accordion-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </div>
  </article>

</template>

<script>
// import _ from 'lodash';

export default {
  props: [ 'name', 'label' ],
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
