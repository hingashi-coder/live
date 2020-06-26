<template>
    <div>
      <div class="main" :style="{'background-image' : `url('${bg}')`}">
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
  },
  data () {
    return {
      bg: require('@/assets/main.jpg')
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    height:40vh;
    width:100%;
    overflow: hidden;
    background-size: cover;
  }
</style>
