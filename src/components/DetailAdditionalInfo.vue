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
				<XSwitch label="Editorial"></XSwitch>
				<XSwitch label="Illustration"></XSwitch>
				<XSwitch label="Adult"></XSwitch>
			</div>
		</div>
	</div>

</template>

<script>
import XSwitch from '@/components/XSwitch'

export default {
  components: { XSwitch },
  name: 'DetailAdditionalInfo',
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

</style>
