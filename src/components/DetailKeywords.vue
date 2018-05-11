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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
				<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
				<br>
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
