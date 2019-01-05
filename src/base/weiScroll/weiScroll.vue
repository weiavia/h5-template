<template>
  <div class="wsc" @touchstart="tStart" @touchmove.prevent="tMove" @touchend="tEnd">
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  mounted() {
    this.documentHeight = document.body.clientHeight
    this.wrapper = document.getElementById('wscWrapper')
    this.items = this.wrapper.children
    this.curIndex = 0
    this.refresh()
  },
  methods: {
    refresh() {
      let documentHeight = document.body.clientHeight
      this.documentHeight = documentHeight
      for(let i = 0; i<this.items.length; i++) {
        this.items[i].style.height = documentHeight + 'px'
      }
      this.wrapper.style.height = documentHeight * this.items.length + 'px'
    },
    tStart(e) {
      let touch = event.targetTouches[0]
      this.touchPos = {
        x: touch.clientX,
        y: touch.clientY
      }
    },
    tMove(e) {
      
    },
    tEnd(e) {
      let touch = e.changedTouches[0]
      let start = this.touchPos.y
      let end = touch.clientY

      var absv = Math.abs(start - end)
      if(absv > 30) {
        if(start - end > 0) {
          this.scrollDown()
        } else {
          this.scrollUp()
        }
      }
    },
    scrollUp() {
      if(this.curIndex == 0)
        return
      let nextPos = --this.curIndex * this.documentHeight
      this.wrapper.style.transform = 'translateY('+ -nextPos +'px)'
    },
    scrollDown() {
      if(this.curIndex == this.items.length - 1)
        return
      let nextPos = ++this.curIndex * this.documentHeight
      this.wrapper.style.transform = 'translateY('+ -nextPos +'px)'
    }
  }
}
</script>

<style scoped>
  .wsc {
    position: absolute;
    width: 100%;
    height: 100%;
    background:lightgoldenrodyellow;
    overflow: hidden;
  }
  .wsc_wrapper {
    transition: all 300ms;
  }
</style>