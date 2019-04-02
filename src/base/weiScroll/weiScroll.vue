<template>
  <div class="wsc" @touchstart="touchStart"  @touchend="touchEnd" @touchmove.prevent>
    <img src="./images/arrow_down.png" class="arrow" v-show="arrowShow"/>
    <div id="wscWrapper" class="wsc_wrapper">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: '2'
    }
  },
  data () {
    return {
      zIndex: 1,
      preIndex: 0,
      arrowShow: true
    };
  },
  mounted() {
    this.wrapper = document.getElementById('wscWrapper')
    this.sections = this.wrapper.children
    this.curIndex = 0

    this.flag = true

    if(this.type === '1') {
      this.initType1()
    } else {
      this.initType2()
    }
    
  },
  methods: {
    initType1() {
      let documentHeight = document.body.clientHeight
      this.documentHeight = documentHeight
      // 设置section高度为文档高度
      for(let i = 0; i<this.sections.length; i++) {
        this.sections[i].style.height = documentHeight + 'px'
      }
      // 设置section容器高度为所有section高度总和
      this.wrapper.style.height = documentHeight * this.sections.length + 'px'

      this.wrapper.addEventListener('transitionend', () => {
        this.transitionend()
      })
    },
    initType2() {
      let documentHeight = document.body.clientHeight

      this.sections[0].style.opacity = 1
      this.sections[0].style.transform = 'translate3d(0,0,0)'
      this.wrapper.classList.add('type2')

      for(let i = 0; i<this.sections.length; i++) {
        this.sections[i].addEventListener('transitionend', () => {
          console.log('end')
          this.transitionend()
        })
      }
    },
    touchStart(e) {
      let touch = event.targetTouches[0]
      this.touchPos = {
        x: touch.clientX,
        y: touch.clientY
      }
    },
    touchEnd(e) {
      let touch = e.changedTouches[0]
      let start = this.touchPos.y
      let end = touch.clientY

      var absv = Math.abs(start - end)
      if(absv > 30) {
        if(start - end > 0) {
          if(this.type === '2') {
            this.scrollDown2()
          } else {
            this.scrollDown()
          }
        } else {
          if(this.type === '2') {
            this.scrollUp2()
          } else {
            this.scrollUp()
          }
        }
      }
    },
    transitionend() {
      this.sections[this.preIndex].classList.remove('animation')
    },
    scrollUp2() {
      this.arrowShow = true
      if(this.curIndex == 0)
        return
      this.preIndex = this.curIndex
      let index = --this.curIndex 

      let elem = this.sections[this.curIndex]
      this.wrapper.classList.remove('transition')
      elem.style.zIndex = ++this.zIndex
      elem.style.transform = 'translate3d(0,-100%,0)'
      elem.style.opacity = 0
      elem.clientWidth

      setTimeout(() => {
        this.wrapper.classList.add('transition')
        elem.style.zIndex = ++ this.zIndex
        elem.style.transform = 'translate3d(0,0,0)'
        elem.style.opacity = 1
      })
      this.sections[this.curIndex].classList.add('animation')

    },
    scrollDown2() {
      if(this.curIndex == this.sections.length - 1)
        return
      if(this.curIndex == this.sections.length - 2) {
        this.arrowShow = false
      }
      // this.wrapper.classList.remove('transition')
      this.preIndex = this.curIndex
      let index = ++this.curIndex 
      
      let elem = this.sections[this.curIndex]
      this.wrapper.classList.remove('transition')
      elem.style.zIndex = ++this.zIndex
      elem.style.transform = 'translate3d(0,100%,0)'
      elem.style.opacity = 0
      elem.clientWidth

      setTimeout(() => {
        this.wrapper.classList.add('transition')
        elem.style.zIndex = ++ this.zIndex
        elem.style.transform = 'translate3d(0,0,0)'
        elem.style.opacity = 1
      })
      this.sections[this.curIndex].classList.add('animation')
      // elem.clientWidth

    },
    scrollUp() {
      this.arrowShow = true
      if(this.curIndex == 0)
        return
      this.preIndex = this.curIndex
      let nextPos = --this.curIndex * this.documentHeight
      this.wrapper.style.transform = 'translateY('+ -nextPos +'px)'
      this.sections[this.curIndex].classList.add('animation')
      
    },
    scrollDown() {
      if(this.curIndex == this.sections.length - 1)
        return
      if(this.curIndex == this.sections.length - 2) {
        this.arrowShow = false
      }
     
      this.preIndex = this.curIndex
      let nextPos = ++this.curIndex * this.documentHeight

      this.wrapper.style.transform = 'translateY('+ -nextPos +'px)'
      this.sections[this.curIndex].classList.add('animation')
    }
  }
}
</script>

<style lang="scss" scoped>
  .wsc {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(196,14,29);
    overflow: hidden;
  }

  .wsc_wrapper {
    transition: all 300ms;
    transition-timing-function: linear;
  }

  .arrow {
    position: fixed;
    bottom: 10px;
    z-index: 2000;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    animation: arrow infinite 1s;
  }

  @keyframes arrow {
    0% {
      bottom: 10px;
    }

    100% {
      opacity: 0;
      bottom: 25px;
    }
  }

  .wsc_wrapper.type2 {
    .section {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      transform: translateY(100%);
      opacity: 0;
      overflow: scroll;
      
    }
  }

  .wsc_wrapper.transition {
    .section {
      transition-duration: 300ms;
      transition-property: opacity ,transform;
      transition-timing-function: ease;
    }
  }
  
</style>