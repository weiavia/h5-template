<template>
  <div class="app fullscreen">
    <router-view />
  </div>
</template>

<script>
import weiScroll from '@/base/weiScroll/weiScroll'

export default {
  data () {
    return {
    };
  },
  mounted() {
    this.$vux.alert.show({
      content: 'sunny'
    })
  }
}
</script>

<style lang='scss' scoped>
  .app {
    display: flex;
  }
  #box {
    width: 100px;
    height: 100px; 
    background: red;
  }
</style>