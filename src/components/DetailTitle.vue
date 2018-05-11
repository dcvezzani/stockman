<template>

	<div class="title-description">
		<div class="field">
			<p class="card-header-title">Title <span>(optional)</span></p>
			<input class="input is-rounded" type="text" placeholder="Photo title">
		</div>
		<div class="field">
			<p class="card-header-title">Description <span>(max 200 words)</span> </p>
			<textarea class="textarea" placeholder="Photo description"></textarea>
		</div>
	</div>

</template>

<script>
export default {
  name: 'DetailTitle',
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
.field p {
	text-align: left;
}
.field textarea {
	height: 152px;
}
.field p span {
	font-weight: normal;
	margin-left: 5px;
}

</style>
