<template>
	<div class="container">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">

					<PhotoDetail :name="$route.params.name"></PhotoDetail>

        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailTitle></DetailTitle>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child is-danger">
        <div class="content">
					<DetailKeywords></DetailKeywords>
        </div>
      </article>
    </div>
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailCategories></DetailCategories>
        </article>
        <article class="tile is-child is-primary">
					<DetailAttachRelease></DetailAttachRelease>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailAdditionalInfo></DetailAdditionalInfo>
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child is-success">
      <div class="content">
        <div class="content">
          <DetailAgencyStatus></DetailAgencyStatus>
        </div>
        
        <div class="content">
          <a @click="savePhotoDetails" class="button "> Save </a>
        </div>
        <div id="toast" ref="test" class="content">{{toast}}</div>
      </div>
    </article>

  </div>
</div>
	</div>
</template>

<script>
import PhotoDetail from '@/components/PhotoDetail'
import DetailTitle from '@/components/DetailTitle'
import DetailDescription from '@/components/DetailDescription'
import DetailKeywords from '@/components/DetailKeywords'
import DetailCategories from '@/components/DetailCategories'
import DetailAdditionalInfo from '@/components/DetailAdditionalInfo'
import DetailAttachRelease from '@/components/DetailAttachRelease'
import DetailAgencyStatus from '@/components/DetailAgencyStatus'
import _ from 'lodash';
import { filterObj } from '../utils';

export default {
  name: 'PhotoDetails',
  components: { PhotoDetail, DetailTitle, DetailDescription, DetailKeywords, DetailCategories, DetailAdditionalInfo, DetailAttachRelease, DetailAgencyStatus },
  computed: {
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      toast: '',
      saveLocked: false,
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
    'fetch-data': function(payload){
      if (!payload.client) return;
      const data = filterObj(payload, ['client']);
      console.log('>fetch-data:', payload);
      this.$store.commit('setState', data);
    },
    'save-data': function(payload){
      if (!payload.client) return;
      const data = filterObj(payload, ['client']);
      console.log('>save-data:', payload);
      this.toast = "Photo was saved";
      this.saveLocked = false;
      setTimeout(() => { this.toast = ""; }, 2000);
    },
  },
  methods: {
    savePhotoDetails: function() {
      if (this.saveLocked === false) {
        this.saveLocked = true;
        const data = this.$store.getters.state;
        this.$socket.emit('save-data', {server: true, ...data});
      }
    },
  },
  mounted () {
		this.$socket.emit('fetch-data', {server: true});
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
	background-color: yellow;
	border-radius: 8px;
  /* box-shadow: 10px 10px 8px #888888; */
}

/* .notification { */
/* 	background-color: transparent; */
/* 	padding: 1em; */
/* } */

/* .tile .content { */
/* 	background-color: blue; */ 
/* 	display: block; */
/* 	width: 100%; */
/* 	height: 100px; */
/* 	border-radius: 8px; */ 
/* } */

/* .tile .content.h-200 { */
/* 	height: 200px; */
/* } */

.tile.is-primary {
	background-color: transparent;
	border: 1px solid #00d1b2;
	border: 0;
}
.tile.is-danger {
	background-color: transparent;
	border: 1px solid #ff3860;
	border: 0;
}
.tile.is-success {
	background-color: transparent;
	border: 1px solid #23d160;
	border: 0;
}
</style>
