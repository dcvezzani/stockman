<template>

	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Keywords / Tags
			</p>
			<a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</a>
		</header>
		<div class="card-content">
			<div class="content">
        <textarea v-bind:value="keywords" v-on:input="$emit('input', $event.target.value)" class="textarea" placeholder="Keywords & tags"></textarea>
			</div>
		</div>
	</div>

</template>

<script>
import _ from 'lodash';

export default {
  props: ['keywords'], 
  name: 'DetailKeywords',
  computed: {
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.content .card-header-title {
		margin-bottom: 0;
	}
</style>
