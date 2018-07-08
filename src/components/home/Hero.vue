<template>

<section class="hero is-small" >
  <div class="hero-body" style="position: relative;">
    <div class="banner2 "> </div>
    <div class="banner2 banner-color"> </div>
    <div class="container">
      <h1 class="title">
        ORGANIZE, FIND & MANAGE <br/> YOUR STOCK
      </h1>
      <div class="body">
        <p>{{ description }}</p>
      </div>
      <a class="button is-rounded" href="">Start a free trial</a>
    </div>
  </div>
</section>    

</template>

<script>
export default {
  name: 'Hero',
  props: ['name'],
  // components: { Junk },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      description: "An online tool to help you manage and optimize the submission process for your stock photos, vector art, videos, and music!  We've done the work so you can create more and worry less with Stock Made EZ!",
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
    "Hero:blah": function(data){
		  console.log('Hero:blah', data);
			this.$socket.emit('Hero:blah', {msg: 'bleh'});
    },
  },
  mounted () {
		window.Event.$on('Hero:activate', (data) => {
		  console.log('Hero:blah', data);
			window.Event.$emit('Hero:activated', {msg: 'done'});
		});
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  height: 100pt;
  background-image: url("../../assets/wix-cameras.png");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.banner2 {
  position: absolute;
  z-index: -1;   
  width: 100%;
  height: 100%;
  background-color: #103F54;
  background-image: url("../../assets/wix-cameras.png");
  background-size: cover;
  opacity: 0.7;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.banner2.banner-color {
  background-image: none;
}

.hero .container .button, 
.hero .container h1, 
.hero .container p, 
.hero .container h2 {
  color: white; 
  font-family: 'Poppins', sans-serif;
}

.hero .container h1, 
.hero .container p, 
.hero .container h2 {
  width: 550px;
  text-align: center;
  margin: 5px auto;
  line-height: normal;
}

.hero .container h1, 
.hero .container h2 {
  font-weight: 400;
  letter-spacing: 0.3em;
  font-size: 43px;
  display: block;
}

.hero .container .body {
  margin: 1em 0 2em 0;
}

.hero .container p {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3em;
}

.hero .container h1 {
  font-weight: 700;
}

.hero .container .button {
  background-color: #5B3A56;
  border: 2px solid #5B3A56;
  color: white; 
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1em;
}

.hero .container .button:hover {
  background-color: transparent;
}

</style>

