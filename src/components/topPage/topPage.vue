<template>
    <div>
      <div class="main">
      </div>
      <description />
      <movieList />
    </div>
</template>
<script>
import description from './description.vue'
import movieList from './movieList.vue'
export default {
  components: {
    description,
    movieList
  }
}
</script>
<style lang="scss" scoped>
  .main{
    height:40vh;
    width:100%;
    overflow: hidden;
    background-image: url("../../assets/main.jpg");
    background-size: cover;
  }
</style>
