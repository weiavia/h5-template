<style lang='scss' scoped>
  .form {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 11px;
      justify-content: space-between;
      span {
        flex-basis: 64px;
        font-size: 12px;
        margin-right: 4px;
        text-align: right;
      }
      .input {
        width: 206px;
        height: 30.5px;
        background-color: #ffffff;
        border: solid 0.5px #d3d3d3;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
    .textarea {
      align-items: flex-start;
      .input {
        padding: 10px;
        height: auto;
        min-height: 100px;
        
      }
    }
    .address {
      .input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        text-align: center;
        div {
          flex-grow: 1;
        }
        span:first-child {
          color: #cfcfcf;
        }
      }
    }

    .btn {
      width: 192.5px;
      height: 37px;
      display: block;
      margin: 20px auto 0;
    }
  }
</style>

<template>
  <container ref="form_container">
    <div class="form">
      <div class="item">
        <span>企 业 名 称:</span>
        <input type="text" class="input" v-model="enterprise_name" maxlength="30" required/>
      </div>
      <div class="item">
        <span>联系人姓名:</span>
        <input type="text" class="input" v-model="name" maxlength="6" required/>
      </div>
      <div class="item">
        <span>联系人电话:</span>
        <input type="text" class="input" v-model="phone" maxlength="11" required/>
      </div>
      <div class="item address">
        <span>企业所属地:</span>
        <div class="input" @click="showAddress = true">
          <div><span v-show="!province">请选择</span>{{province}}<span v-show="!province">省</span></div>
          <div><span v-show="!city">请选择</span>{{city}}<span v-show="!province">市</span></div>
          <div><span v-show="!area">请选择</span>{{area}}<span v-show="!province">区</span></div>
        </div>
      </div>
      <div class="item textarea">
        <span>您 的 需 求:</span>
        <textarea class="input" v-model="demand"></textarea>
      </div>
      <img src="../../resource/images/2/2.png" class="btn" @click="onSubmit"/>
    </div>
    <x-address style="display:none;" title="title" v-model="value" @on-hide="selected" :list="addressData" placeholder="请选择地址" :show.sync="showAddress" :popup-style="popupStyle" @on-shadow-change="addressChange"/>
  </container>
</template>

<script>
import Container from '@/base/container/container'
import { XAddress, ChinaAddressV4Data  } from 'vux'
import { name } from '../panel/txt'

export default {
  data () {
    return {
      value: [],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      popupStyle: {
        'zIndex': 10000
      },
      names: [],
      province: '',
      city: '',
      area: '',
      name: '',
      phone: '',
      demand: '',
      enterprise_name: ''
    };
  },
  methods: {
    onSubmit() {
      if(!this.phone || !this.name || !this.enterprise_name) {
        this.$vux.alert.show({
          content: '请把字段填写完整在提交',
        })
        return
      }

      let that = this
      this.$vux.loading.show({
        text: '提交中'
      })

      $.getJSON('http://g.vsene.cn/index.php?m=guestbook&c=index&a=publish&callback=?', {
        title: 1,
        'extension[企业名称]': this.enterprise_name,
        'extension[电话]': this.phone,
        'extension[姓名]': this.name,
        'extension[省市区]': this.province + ' ' + this.city + ' ' + this.area,
        'extension[需求]': this.demand,
        'extension[type]': name[this.type-1],
         extcode:'geilidai',
      },
      function(json, textStatus) {

        if (+json.errno == 0) {
          that.$vux.toast.show({
            text: '提交成功'
          })
          that.phone = ''
          that.name = ''
          that.province = ''
          that.city = ''
          that.area = ''
          that.enterprise_name = ''
          that.demand = ''
          that.hide()
        }else{
          that.$vux.toast.show({
            text: '提交失败，请稍后重试'
          })
        }
        that.$vux.loading.hide()
      }
      );
    },
    addressChange(ids, names) {
      this.names = names
    },
    selected(selected) {
      if(selected) {
        this.province = this.names[0]
        this.city = this.names[1]
        this.area = this.names[2]
      }
    },
    show(type) {
      this.type = type
      this.$refs.form_container.show = true
    },
    hide() {
      this.$refs.form_container.show = false
    }
  },
  components: {
    Container,
    XAddress
  }
}
</script>