<style lang='scss' scoped>
  .panel {
    width: 318.5px;
    border-radius: 6px;
    padding: 10px 20px;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
    border: 1px solid rgba(255,255,255, .2);
    .blur {
      background: rgba(255,255,255, .3);
      filter: blur(40px);
      z-index: -1;
    }
    .name {
      font-size: 15px;
      display: flex;
      align-items: center;
      img {
        width: 16px;
        height: 16px;
      }
      span {
        font-size: 15px;
        margin-left: 4px;
      }
    }
    .text {
      font-size: 11px;
      line-height: 17.6px;
      margin: 10px 0;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
      div {
        width: 74.5px;
        height: 21.5px;
        line-height: 21.5px;
        background-color: #ffffff;
        border-radius: 5px;
        text-align: center;
        color: #261a06;
        font-size: 11px;
      }
      div:last-child {
        background-color: #ffc200;
        margin-left: 5px;
      }
    }
  }
</style>

<template>
  <section class="panel">
    <div class="blur fullscreen" />
    <header class="name">
      <img :src="iconSrc" />
      <span>{{name}}</span>
    </header>
    <p class="text">{{text}}</p>
    <div class="btns">
      <div @click="onDetail">查看详情</div>
      <div @click="onForm">立即申请</div>
    </div>
  </section>
</template>

<script>
import { name, text } from './txt'
export default {
  props: {
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
    };
  },
  methods: {
    onDetail() {
      this.$emit('detail', this.type)
    },
    
    onForm() {
      this.$emit('form', this.type)
    }
  },
  computed: {
    iconSrc() {
      return `http://img.cs26.com/h5/via/loanH/imgs/${this.type}.png`
    },
    name() {
      return name[this.type - 1]
    },
    text() {
      return text[this.type - 1]
    }
  }
}
</script>