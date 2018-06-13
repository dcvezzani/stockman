<template>
  <div class="stock-man">
		<div class="select is-rounded">
			<select>
				<option>dreamstime</option>
				<option>istock</option>
				<option>fotolia</option>
				<option>shutterstock</option>
				<option>mostphotos</option>
				<option>pond5</option>
			</select>
		</div>

		<div class="container">
			<Photo v-for="photo in photos" :key="photo.id" :photo="photo"></Photo>
		</div>
  </div>
</template>

<script>
import Photo from '@/components/Photo'
import { filterObj } from '../utils';
import { fetchPhotos, } from './../models/photos';

export default {
  name: 'StockMan',
  components: { Photo },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			photos: [], 
			xphotos: [
				{name: '1', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: '2', submitees: ['dreamstime', 'mostphotos', 'pond5']}, 
				{name: '3', submitees: ['dreamstime', 'mostphotos', 'pond5']}, 
				{name: '4', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: '5', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: '6', submitees: ['shutterstock', 'mostphotos', 'pond5']}, 
				{name: '7', submitees: ['dreamstime', 'mostphotos', 'pond5']}, 
				{name: '8', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: '9', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: '0', submitees: ['shutterstock', 'mostphotos', 'pond5']}, 
			],
    }
  }, 
	mounted () {
		fetchPhotos((err, photos) => {
			if (err) return console.error("Unable to load photo details", err);

			this.photos = photos;
			console.log("Successfully loaded list of photos", photos);
		});
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

article {
	display: inline-block;
	width: 200px;
	height: 200px;
	margin: 1em;
	background-color: yellow;
	border-radius: 8px;
	padding: 5px;
  /* box-shadow: 10px 10px 8px #888888; */
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
	
}
</style>
