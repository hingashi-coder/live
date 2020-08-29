<template>
  <div>
    <div style="text-align:center;">{{error}}</div>
    <div id="watch">
      <iframe v-if="!isLive" id="player" :width="deviceWidth" :height="deviceWidth * 0.5625" :src="youtubeLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe v-if="isLive" src="https://video.ibm.com/embed/23953177" style="border: 0; margin: 0 auto;" webkitallowfullscreen allowfullscreen frameborder="no" :width="deviceWidth" :height="deviceWidth * 0.5625" ></iframe>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      youtubeLink: '',
      isLive: false,
      deviceWidth: this.calcwidth(),
      error: ''
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
      if (entry.fields.youtubeUrl === 'live') {
        this.isLive = true
      } else {
        this.youtubeLink = 'https://www.youtube.com/embed/' + entry.fields.youtubeUrl + '?autoplay=1'
      }
    }).catch(e => {
      this.error = '動画が見つかりません。5秒後にトップページへ戻ります。'
      setTimeout(() => {
        this.$router.push('/')
      }, 5000)
    })
    window.youtube = this
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
