<style lang='scss' scoped>
  .container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms;
    opacity: 0;
    z-index: -3;
    transform: scale(1.2)
  }
  .container.show {
    display: flex;
    opacity: 1;
    z-index: 999;
    transform: scale(1)
  }

  .wrpper {
    width: 322px;
    // height: 416.5px;
    background: #fff;
    border: solid 1px rgba(228, 41, 33, 0.97);
    // background: url('../../resource/images/1/0.png') no-repeat;
    background-size: 100% 100%;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    transition: 0.5s all;
  }
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .close {
    width: 25px;
    height: 25px;
    position: absolute;
    right: -12px;
    top: -12px;
  }
</style>
<template>
  <div class="container" :class="{show: show}" ref="container">
    <div class="wrpper">
      <div class="content">
        <slot />
      </div>
      <img src="./0.png" class="close" @click="hide" v-if="close">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false
    };
  },
  mounted() {
    this.container = this.$refs.container

    this.container.addEventListener('transitionend', () => {
      if(!this.show) {
        this.container.style.zIndex = -1
      }
    })
  },
  methods: {
    hide() {
      this.show = false
      this.$emit('close')
    }
  },
  watch: {
    show(boolean) {
      this.container.style.zIndex = 999
    }
  }
}
</script>