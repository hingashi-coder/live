<template>
  <div class="background">
    <div id="movieList">
      <div v-for="movie in movies" :key="movie.movieno"  class="card">
        <div class="card-body">
          <div class="card-title">
            <h5>{{movie.fields.title}}</h5>
          </div>
          <p class="card-text">
            {{movie.fields.detail}}
          </p>
          <div class="rightside">
            <router-link :to="{name:'watch', query: {movieid: movie.sys.id}}" tag="input" type="button" value="視聴する" class="btn btn-success" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .background{
    background:white;
  }
  .rightside{
    text-align: right;
  }
  #movieList{
    width:90%;
    max-width:1500px;
    margin:0 auto;
    padding-top:5vh;
    padding-bottom:5vh;
    .card{
      max-width:1000px;
      margin: 15px auto;
    }
  }
</style>
<script>
export default {
  mounted () {
    this.client.getEntries().then(entries => {
      this.movies = entries.items
    })
  },
  data () {
    return {
      movies: []
    }
  },
  props: [
    'client'
  ]
}
</script>
