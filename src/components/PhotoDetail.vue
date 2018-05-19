<template>

	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Photo
			</p>
			<a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</a>
		</header>
		<div class="card-content">
      <article :class="classNames" :style="imgUrl"> </article>
		</div>
	</div>

</template>

<script>
export default {
  props: [ 'name' ],
  name: 'PhotoDetail',
  computed: {
		classNames() {
			return ['content', 'photo'];
		},
		imgUrl() {
			return `background-image: url('/stock/static/img/${this.name}.png');`
		},
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card-content .content {
		height: 200px;
		background-size: cover;
	}
</style>
