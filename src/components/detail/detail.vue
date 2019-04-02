<style lang='scss' scoped>
  .header {
    text-align: center;
    .name {
      font-weight: normal;
      font-size: 17.6px;
      color: #161616;
      margin-bottom: 20px;
    }
  }
  .text {
    font-size: 11px;
    line-height: 16.6px;
    color: #000000;
    margin-bottom: 25px;
  }
  .feild {
    font-size: 11px;
    color: #000000;
    p {
      margin-bottom: 5px;
      line-height: 1.5;
      span {
        color: #e42921;
        padding-right: 5px;
        
      }
    }
  }
  .btn {
    display: block;
    margin: 32px auto 0;
    width: 192.5px;
	  height: 37px;
  }
</style>

<template>
  <container ref="container">
    <header class="header">
      <img :src="iconSrc" class="icon"/>
      <h2 class="name">{{name}}</h2>
    </header>
    <p class="text">{{text}}</p>
    <div class="feild">
      <p v-for="item in details"><span>{{item.name}}:</span>{{item.text}}</p>
    </div>
    <img src="../../resource/images/2/1.png" class="btn" @click="onForm"/>
  </container>
</template>

<script>
import Container from '@/base/container/container'
import { name, text, detail_text } from '../panel/txt'

export default {
  data () {
    return {
      type: 1
    };
  },
  methods: {
    onForm() {
      this.$emit('form', this.type)
    },
    show(type) {
      this.type = type
      this.$refs.container.show = true
    },
    hide() {
      this.$refs.container.show = false
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
    },
    details() {
      return detail_text[this.type - 1].field
    }
  },
  components: {
    Container
  }
}
</script>