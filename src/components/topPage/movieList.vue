<template>
  <div id="movieList">
    <div v-for="movie in movies" :key="movie.movieno"  class="card">
      <div class="card-body">
        <div class="card-title">
          <h5>{{movie.title}}</h5>
        </div>
        <p class="card-text">
          {{movie.description}}
        </p>
        <router-link :to="{name:'watch', query: {movieid: movie.movieno}}" tag="input" type="button" value="視聴する" class="btn btn-success" />
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
  #movieList{
    width:90%;
    max-width:1500px;
    margin:0 auto;
    margin-top:5vh;
    .card{
      max-width:1000px;
      margin: 15px auto;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      movies: [
        {
          title: 'テスト配信',
          description: 'これはテストです。10:00~　より配信します。',
          movieno: '10'
        },
        {
          title: 'テスト配信2',
          description: '自動リスト表記のテストです。',
          movieno: '11'
        }
      ]
    }
  }
}
</script>
