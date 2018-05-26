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
			<Photo v-for="photo in photos" :key="photo.name" :name="photo.name"></Photo>
		</div>
  </div>
</template>

<script>
import Photo from '@/components/Photo'
import { filterObj } from '../utils';

export default {
  name: 'StockMan',
  components: { Photo },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			photos: [
				{name: 'http://localhost:8085/stock/photos/session01/IMG_4057.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/IMG_4058.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/IMG_4059.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4060.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4061.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4062.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4063.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4064.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
				{name: 'http://localhost:8085/stock/photos/session01/img_4065.jpg', submitees: ['dreamstime', 'istock', 'fotolia', 'shutterstock', 'mostphotos', 'pond5']}, 
			],
    }
  },

  sockets:{
    disconnect: function(){
      this.$store.commit('setFlags', {socketIoLoading: false, socketIoLoaded: false});
    },
    connect: function(){
      if (this.$store.getters.flags.socketIoLoading || this.$store.getters.flags.socketIoLoaded) return;

      this.$store.commit('setFlags', {socketIoLoading: true});
      console.log('socket connected')
		  this.$socket.emit('join', {server: true});
    },
    joined: function(msg){
      if (!this.$store.getters.flags.socketIoLoading) return;
    
      this.$store.commit('setFlags', {socketIoLoading: false, socketIoLoaded: true});
      console.log('>joined:', msg);
    },
  },

  mounted () {
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
