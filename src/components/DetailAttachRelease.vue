<template>

	<div class="card">
		<header class="card-header">
			<p class="card-header-title">
				Release Form
			</p>
			<a href="#" class="card-header-icon" aria-label="more options">
				<span class="icon">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</a>
		</header>
		<div class="card-content">
			<div class="content">

	<div class="file has-name is-boxed">
		<label class="file-label">
			<input v-bind:releaseForm="releaseForm" v-on:input="$emit('input', $event.target.files[0])" class="file-input" type="file">
			
			<span class="file-cta">
				<span class="file-icon">
					<i class="fas fa-upload"></i>
				</span>
				<span class="file-label">
					Choose a file…
				</span>
			</span>
			<span class="file-name">
{{ releaseFormName }}
			</span>
		</label>
	</div>
			
			</div>
		</div>
	</div>
	

</template>

<script>

export default {
  props: ['releaseForm'],
  name: 'DetailAttachRelease',
  computed: {
		releaseFormName: function() {
			return (this.releaseForm) ? this.releaseForm.name : "n/a";
		}
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
	label {
		margin: 0 auto;
	}
	.file-name {
		text-align: center;
	}
</style>
