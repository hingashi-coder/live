<template>
  <div>
    <topBar />
    <router-view></router-view>
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
