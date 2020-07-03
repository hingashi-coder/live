<template>
  <div>
    <topBar />
    <transition mode="out-in">
      <router-view :client=client></router-view>
    </transition>
  </div>
</template>

<script>
import topBar from '@/components/topBar'
export default {
  components: {
    topBar
  },
  data () {
    const contentful = require('contentful')
    return {
      contentful,
      client: contentful.createClient({
        space: 'jlpohh01g2d6',
        accessToken: 'skUSElMndYSdlHc-RctrLuyNdc5ffgNwFpKeDIK_nE4'
      })
    }
  }
}
</script>
<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity .5s
}

.v-enter, .v-leave-to {
  opacity: 0
}
</style>
