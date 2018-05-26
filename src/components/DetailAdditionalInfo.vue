<template>

	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Additional Info
			</p>
			<a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</a>
		</header>
		<div class="card-content">
			<div class="content">

        <div class="field">
          <input v-model="editorial" type="checkbox" id="editorial" class="switch is-rounded">
          <label for="editorial">Editorial</label>
        </div>			
        <div class="field">
          <input v-model="illustration" type="checkbox" id="illustration" class="switch is-rounded">
          <label for="illustration">Illustration</label>
        </div>			
        <div class="field">
          <input v-model="adult" type="checkbox" id="adult" class="switch is-rounded">
          <label for="adult">Adult</label>
        </div>			

			</div>
		</div>
	</div>

</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'DetailAdditionalInfo',
  computed: {
    ...mapFields([ 'editorial', 'illustration', 'adult', ]),
	},
  methods: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
