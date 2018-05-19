<template>
  <router-link :to="routePhoto">
    <article :class="classNames" :style="imgUrl"> </article>
  </router-link>
</template>

<script>
export default {
  props: [ 'name' ],
  name: 'StockMan',
  computed: {
		classNames() {
			return ['photo'];
		},
		imgUrl() {
			return `background-image: url('/static/img/${this.name}.png');`
		},
		routePhoto() {
      return { name: 'PhotoDetails', params: { name: this.name }};
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
	/* background-color: yellow; */
	border-radius: 8px;
	padding: 5px;
  /* background-image: url("../assets/1.png"); */
  background-size: cover;
  background-repeat: no-repeat;
  /* box-shadow: 10px 10px 8px #888888; */
}

</style>
