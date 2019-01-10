<template>
  <div class="music">
    <i class="icon"  v-bind:class="{ active: isPlay}" @click="isPlay=!isPlay" />
    <audio src="http://img.cs26.com/h5/lw/pigdraw/bgm.mp3" ref="audio" loop="loop" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPlay: false
    };
  },
  methods: {
    play() {
      this.isPlay = true
    },
  },
  watch: {
    isPlay(isPlay) {
      if(isPlay) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
</script>

<style scoped>
  .icon {
    width: 30px;
    height: 30px;
    background: url(./pause.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 20px;
    top: 20px;
    display: block;
    z-index: 1000;
    /* animation: rotate 2s infinite linear; */
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg)
    }

    100% {
      transform: rotate(360deg)
    }
  }
  .icon.active {
    background: url(./play.png) no-repeat;
    background-size: 100% 100%;

  }
</style>