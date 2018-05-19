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
        <textarea class="textarea" placeholder="Keywords & tags"></textarea>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'DetailKeywords',
  computed: {
		classNames() {
			return ['photo'];
		},
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
	.content .card-header-title {
		margin-bottom: 0;
	}
</style>
