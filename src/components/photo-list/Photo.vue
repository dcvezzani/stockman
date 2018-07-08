<template>
  <router-link :to="routePhoto">
    <article :class="classNames" :style="imgUrl"> </article>
  </router-link>
</template>

<script>
import { filterObj } from './../../utils';

export default {
  name: 'Photo',
  props: [ 'photo' ],
  computed: {
		classNames() {
			return ['photo', this.rotation];
		},
		imgUrl() {
			return `background-image: url('${this.photo.location}');`
		},
		routePhoto() {
      return { name: 'PhotoDetails', params: { id: this.photo.id }};
		},
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      rotation: '',
    }
  },
  sockets:{
    'picture-orientation': function(payload){
      if (!payload.client || !(payload.image === this.name)) return;
      const data = filterObj(payload, ['client']);

      console.log('>picture-orientation:', payload);
      switch(payload.metadata.orientation) {
        case "rotate-90-cw": {
          this.rotation = 'rotate90';
          break;
        }
        case "rotate-90-ccw": {
          this.rotation = 'rotateNeg90';
          break;
        }
        case "rotate-180": {
          this.rotation = 'rotate180';
          break;
        }
        default: {
          this.rotation = '';
        }
      };
      // this.$store.commit('setState', data);
    },
  },
  
  mounted () {
		this.$socket.emit('picture-orientation', {server: true, image: this.name});
  },
  
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
  image-orientation: from-image;
  /* box-shadow: 10px 10px 8px #888888; */
}

  .rotate90 {
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
  }

  .rotateNeg90 {
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
  }

  .rotate180 {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
  }

</style>
