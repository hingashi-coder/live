<template>
  <div>
    <div id="watch">
      <iframe id="player" :width="deviceWidth" :height="deviceWidth * 0.5625" :src="youtubeLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      youtubeLink: '',
      deviceWidth: this.calcwidth()
    }
  },
  props: [
    'client'
  ],
  mounted () {
    window.addEventListener('resize', () => {
      this.deviceWidth = this.calcwidth()
    })
    this.client.getEntry(this.$route.query.movieid).then(entry => {
      this.youtubeLink = 'https://www.youtube.com/embed/' + entry.fields.youtubeUrl + '?autoplay=1'
    })
  },
  methods: {
    calcwidth: function () {
      const marginWeight = 1
      const widescreenRatio = 0.562
      const topbarHeight = 50 + 1 // `1` is added as safety margin to avoid y-axis overflow.
      let width = window.innerWidth
      let height = window.innerHeight
      if (width * widescreenRatio > height - topbarHeight) {
        width = (height - topbarHeight) / widescreenRatio
      }
      return width * marginWeight
    }
  }
}
</script>
<style lang="scss" scoped>
  #watch{
    display: flex;
    #player{
      margin: 0 auto;
    }
  }

</style>
