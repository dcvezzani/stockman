<template>
  <div class="home">
		Home
    <Navigation></Navigation>
    <Hero></Hero>
  </div>
</template>

<script>
import Navigation from '@/components/home/Navigation';
import Hero from '@/components/home/Hero';
export default {
  components: { Navigation, Hero,},
  name: 'Home',
  props: ['name'],
  // components: { Navigation, Hero, Junk },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    stuff: function() {
			return 'stuff';
		},
  },
  methods: {
    junk: function() {
		},
  },
  sockets:{
    "Home:blah": function(data){
		  console.log('Home:blah', data);
			this.$socket.emit('Home:blah', {msg: 'bleh'});
    },
  },
  mounted () {
		window.Event.$on('Home:activate', (data) => {
		  console.log('Home:blah', data);
			window.Event.$emit('Home:activated', {msg: 'done'});
		});
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
