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
				<!-- XCheck v-for="category in categories" :key="category.name" :label="category.name"></XCheck -->

				<div class="field">
					<div class="select" style="z-index: 1000">
						<select v-model="category" >
							<option v-for="cat in categories" :value="cat.name" :key="cat.name">{{ cat.name }}</option>
						</select>
					</div>			
				</div>			
				
			</div>
		</div>
	</div>

</template>

<script>
import _ from 'lodash';
import XCheck from '@/components/XCheck'

export default {
  name: 'DetailCategories',
  sync:['category'],
  components: { XCheck },
  computed: {
		classNames() {
			return ['photo'];
		},
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			categories: [],
    }
  }, 
	mounted () {
		this.categories = _.range(10).map(idx => { return {name: `category ${idx}`}; });
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
