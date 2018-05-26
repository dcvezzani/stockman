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
					<DetailTitle :title.sync="photo.title" :description.sync="photo.description"></DetailTitle>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child is-danger">
        <div class="content">
					<DetailKeywords :keywords.sync="photo.keywords"></DetailKeywords>
        </div>
      </article>
    </div>
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">
					<DetailCategories :category.sync="photo.category"></DetailCategories>
        </article>
        <article class="tile is-child is-primary">
					<DetailAttachRelease :releaseForm.sync="photo.releaseForm"></DetailAttachRelease>
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

export default {
  // props: [ 'name' ],
  name: 'PhotoDetails',
  components: { PhotoDetail, DetailTitle, DetailDescription, DetailKeywords, DetailCategories, DetailAdditionalInfo, DetailAttachRelease, DetailAgencyStatus },
  computed: {
		classNames() {
			return ['photo'];
		},
		image() {
			return `/stock/static/img/${this.name}.png`
		}, 
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
			fields: ["image", "keywords", "title", "description", "agencies", "categories", "releaseForm", "editorial", "illustration", "adult"], 
			photo: {
				// image: "0.png",
				keywords: ['one', 'two', 'three'],
				title: "Broccoli is great!", 
				description: " Dolor quae recusandae vitae hic magni. Iure tempore error assumenda laudantium quidem Architecto maxime possimus facere dicta eligendi Exercitationem a ipsum itaque tempore eaque possimus. Dignissimos nesciunt officiis dicta numquam!  ", 
				agencies: ['aaa', 'bbb', 'ccc', 'ddd'], 
				// category: ['category 1', 'category 3', 'category 4'], // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
				category: 'category 1', // ['eee', 'fff', 'ggg', 'hhh', 'iii'], 
				releaseForm: "/stock/static/doc/releaseForm.pdf", 
				editorial: true, 
				illustration: false, 
				adult: false, 
			},
    }
  }, 
  methods: {
    sendMessage: function(name, data = {}) {
      window.Event.$emit(name, data);
    },
    savePhotoDetails: function() {
      this.sendMessage("gatherFormData", {resp: "formDataFetched"});
      // save title
      // save description
      // save keywords
      // save categories
      // save additional info
      // save release form
      // save agency status
    },
  },
  mounted () {
    // console.log(this.$route.params.name);

    // window.Event.$on("formDataFetched", (formData) => {
    //   console.log({formData});
    // });

		window.Event.$on('form-event', (data) => {
		
		});
		
    
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
