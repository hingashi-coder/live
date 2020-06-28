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
        space: 'itjnbdo8ahaq',
        accessToken: 'hyiBgihqnytV5L9as0iTFXPNTklVD9mk7kgP3LUcuus'
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
