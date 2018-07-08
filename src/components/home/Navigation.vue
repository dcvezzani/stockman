<template>
  <div class="navigation">

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <div class="logo"></div>
        </a>
      </div>
      <div class="navbar-menu">

        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            My Stock
          </a>
          <a class="navbar-item">
            Education
          </a>
          <a class="navbar-item">
            Pricing
          </a>
          <a class="navbar-item">
            Login/Sign up
          </a>
        </div>

      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['name'],
  // components: { Junk },
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
    "Navigation:blah": function(data){
		  console.log('Navigation:blah', data);
			this.$socket.emit('Navigation:blah', {msg: 'bleh'});
    },
  },
  mounted () {
		window.Event.$on('Navigation:activate', (data) => {
		  console.log('Navigation:blah', data);
			window.Event.$emit('Navigation:activated', {msg: 'done'});
		});
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 250px;
  height: 100px;
  background-image: url("../../assets/logo-smez.png");
  background-repeat: no-repeat;
}

.navigation {
  text-align: left;
  font-family: 'Poppins', sans-serif;
}

.navigation-items {
  display: inline-block;
  border: 1px solid orange;
}

.navigation-item {
  display: inline-block;
}

</style>

