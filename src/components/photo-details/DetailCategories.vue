<template>

	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Categories
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
					<div class="select" style="z-index: 1000">

						<select v-on:change="$emit('input', $event.target.value)">
							<option>Select category</option>
							<option v-for="cat in availableCategories" :value="cat" :key="cat" v-bind:selected="cat === category">{{ cat }}</option>
						</select>
									
					</div>			
				</div>			
				
			</div>
		</div>
	</div>

</template>

<script>
import _ from 'lodash';

export default {
  props: ['category', 'availableCategories'],
  name: 'DetailCategories',
  computed: {
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
    }
  }, 
	mounted () {
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
