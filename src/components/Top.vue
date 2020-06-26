<template>
  <div>
    <topBar />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import topBar from '@/components/topBar'
export default {
  components: {
    topBar
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
