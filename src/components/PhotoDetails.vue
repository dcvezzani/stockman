<template>
	<div class="container">
<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child is-primary">

					<PhotoDetail></PhotoDetail>

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
	},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
