<template>
  <div class="app fullscreen">
    <div id="box" />
  </div>
</template>

<script>

export default {
  data () {
    return {
    };
  },
  mounted() {
    this.$vux.alert.show({
      content: 'sunny'
    })
  },
  components: {
    
  }
}
</script>

<style lang='scss' scoped>
  .app {
    display: flex;
  }
  #box {
    width: 200px;
    height: 200px; 
    background: red;
  }
</style>