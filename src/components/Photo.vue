<template>
	<article :class="classNames">
		<p class="title">Vertical...</p>
		<p class="subtitle">Top tile</p>
	</article>
</template>

<script>
export default {
  props: [ 'name' ],
  name: 'StockMan',
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

article.photo {
	display: inline-block;
	width: 200px;
	height: 200px;
	margin: 1em;
	background-color: yellow;
	border-radius: 8px;
	padding: 5px;
  /* box-shadow: 10px 10px 8px #888888; */
}

</style>
