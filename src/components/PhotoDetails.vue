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
					<DetailTitle v-bind:title="photo.title" v-bind:description="photo.description" v-on:input="photo[$event.which] = $event.value"></DetailTitle>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child is-danger">
        <div class="content">
					<DetailKeywords v-bind:keywords="photo.keywords" v-on:input="photo.keywords = $event"></DetailKeywords>
        </div>
      </article>
    </div>
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailCategories v-bind:category="photo.category" v-on:input="photo.category = $event" v-bind:availableCategories="availableCategories"></DetailCategories>
        </article>
        <article class="tile is-child is-primary">
					<DetailAttachRelease v-bind:releaseForm="photo.releaseForm" v-on:input="photo.releaseForm = $event"></DetailAttachRelease>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailAdditionalInfo
						:photo="photo"
						v-on:input="photo[$event.which] = $event.value"
					></DetailAdditionalInfo>
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
          <a class="button "> Save </a>
        </div>
        <div id="toast" ref="test" class="content">{{toast}}</div>
      </div>
    </article>

  </div>
</div>
	</div>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
import PhotoDetail from '@/components/PhotoDetail'
import DetailTitle from '@/components/DetailTitle'
import DetailDescription from '@/components/DetailDescription'
import DetailKeywords from '@/components/DetailKeywords'
import DetailCategories from '@/components/DetailCategories'
import DetailAdditionalInfo from '@/components/DetailAdditionalInfo'
import DetailAttachRelease from '@/components/DetailAttachRelease'
import DetailAgencyStatus from '@/components/DetailAgencyStatus'
import _ from 'lodash';

function filterObj(obj, exclude=[]) {
  let newObj = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (!_.includes(exclude, key)) {
      newObj[key] = JSON.parse(JSON.stringify(obj[key]));
    }
  });

  return newObj;
}

export default {
  name: 'PhotoDetails',
  components: { PhotoDetail, DetailTitle, DetailDescription, DetailKeywords, DetailCategories, DetailAdditionalInfo, DetailAttachRelease, DetailAgencyStatus, BulmaAccordion, BulmaAccordionItem },
  computed: {
		titleDescription: function(){
			const {title, description} = this.photo;
			return {title, description}
		},
	},
  data () {
    return {
			toast: null, 
			photo: {
				keywords: "one,two,three,four",
				title: "Broccoli",
				description: "Some good green stuff",
				category: "category 3",
				editorial: false,
				illustration: true,
				adult: false,
				releaseForm: {name: "monopoly-pieces.key"},
			}, 
			availableCategories: [],
    }
  }, 
  sockets:{
    // connect: function(){
    //   console.log('socket connected')
		//   this.$socket.emit('join', {server: true});
    // },
    // joined: function(msg){
    //   console.log('>joined:', msg);
    // },
  },
  methods: {
  },
  mounted () {
		this.availableCategories = _.range(10).map(idx => { return `category ${idx}`; });
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
