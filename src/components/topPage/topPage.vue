<template>
    <div class="bg" :style="{'background-image' : `url('${bg}')`}">
      <div class="main" >
      </div>
      <description />
      <movieList :client="client" />
      <foot />
    </div>
</template>
<script>
import description from './description.vue'
import movieList from './movieList.vue'
import foot from './footer'
export default {
  components: {
    description,
    movieList,
    foot
  },
  props: [
    'client'
  ],
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
  }
  .bg{
    background-attachment: fixed;
    background-size: cover;
  }
</style>
