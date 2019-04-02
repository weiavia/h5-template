<style lang='scss' scoped>
  .superstratum {
    position: relative;
    z-index: 1000;
    .logo {
      left: 16px;
      top: 19px;
      width: 147px;
	    height: 26px;
    }
  }
  .section {
    position: relative;
    overflow: scroll;
    .logo {
      left: 16px;
      top: 19px;
      width: 147px;
	    height: 26px;
    }
    .block {
      width: 321px;
      color: #ffffff;
      margin: 0 auto 20px;
      display: block;
      img {
        display: block;
        margin: 0 auto 10px;
      }
      p {
        width: 321px;
        top: 280px;
        color: #ffffff;
        border: 1px dashed #f8cbc8;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 11px;
        line-height: 22.1px;
      }
    }
  }
  .section1 {
    background: #da121b url('../resource/images/0/bg.jpg') no-repeat left top;
    background-size: 100% auto;
    .h1 {
      top: 100px;
      width: 256.5px;
	    height: 99.5px;
    }
    .h2 {
      width: 255px;
      top: 211px;
    }
    .text {
      width: 321px;
      height: 106.5px;
      top: 280px;
      color: #ffffff;
      border: 1px dashed #f8cbc8;
      border-radius: 4px;
      padding: 10px;
      box-sizing: border-box;
      h2 {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      p {
        font-family: PingFang-SC-Regular;
        font-size: 12px;
        color: #ffffff;
        line-height: 1.5;
      }
    }
    .bottom {
      width: 100%;
      bottom: 0;
    }
  }
  .section2 {
    .block1  {
      padding-top: 30px;
      img {
        width: 152.5px;
        height: 41.5px;
      }
    }
    .block2 img {
      width: 152.5px;
	    height: 41.5px;
    }
    .block3 img {
      width: 182.5px;
      height: 41.5px;
    }
  }
  .section3 {
    .theme {
      width: 146.5px;
      padding-top: 20px;
      margin: 0 auto 10px;
      img {
        width: 100%;
        display: inline-block;
      }
      .h1 {
        margin-bottom: 8px;
      }
    }
    .block1 {
      margin-bottom: 2px;
    }
    .block {
      p {
        border: none;
        font-size: 13px;
      }
      img {
        width: 162.5px;
        height: 41.5px;
      }
    }
  }
  .section5 {
    .bottom {
      width: 80%;
      bottom: 0;
    }
  }
  .section_background {
    background: #da121b url('../resource/images/bg.jpg') no-repeat left top;
    background-size: 100% auto;
  }
  .panel {
    margin: 0 auto 15px;
  }
</style>

<template>
  <div class="boot">
    <section class="superstratum">
      
    </section>

    <wei-scroll>
      
      <section class="section1 section">
        <img src="../resource/images/0/logo.png" class="logo absolute" />
        <div class="jackInTheBox animated" style="background: red;">
          <img src="../resource/images/0/h1.png" class="h1 pcenter">
        </div>
        <img src="../resource/images/0/h2.png" class="h2 pcenter">

        <div class="text pcenter animated fadeIn">
          <h2>给力贷——华融湘江银行小微金融专属品牌。</h2>
          <p>"给力贷小微金融涵盖传统信贷产品、特色融资产品和行业模式化解决方案等金融服务，审批高效、品种齐全、担保灵活、服务全面。"</p>
        </div>
        <img src="../resource/images/0/bg_bottom.png" class="bottom pcenter" />
      </section>

      <section class="section2 section section_background">
        <!-- <img src="../resource/images/0/logo.png" class="logo absolute" /> -->
        <div class="block block1 animated fadeInUp">
          <img src="../resource/images/1/0.png" />
          <p>流动资金类授信业务、固定资产类贷款和国内贸易融资业务，能够覆盖小微企业客户的基本融资需求</p>
        </div>
        <div class="block block2  animated fadeInUp delay-0-2s">
          <img src="../resource/images/1/1.png" />
          <p>根据小微企业经营特点和融资需求特点，有针对性地开发了税联E贷、政采贷、惠农担、创业贷、多抵贷、信用贷、联保贷等十几款小微企业特色融资产品，涵盖资产组合担保、强抵押弱担保以及信用贷款等业务品种，能够全方位满足各种类型小微企业客户的一般融资需求。</p>
        </div>
        <div class="block block3  animated fadeInUp delay-0-2s">
          <img src="../resource/images/1/2.png" />
          <p>根据小微企业集聚共生的特性，建立标准化、规范化的操作与管理流程，形成了审批前移、平行作业的模式化批量授信审批机制，推出了核心企业平台模式、政府信用平台模式、园区商圈平台模式和商会协会平台模式等小微企业批量化金融服务方案。</p>
        </div>
      </section>

      <section class="section3 section section_background">
        <!-- <img src="../resource/images/0/logo.png" class="logo absolute" /> -->
        <div class="theme">
          <img src="../resource/images/0/h1.png" class="h1">
          <img src="../resource/images/0/h2.png" class="h2">
        </div>
        <div class="block block1">
          <img src="../resource/images/1/0.png" />
          <p>华融湘江银行小微特色产品适用于小微企业或从事经营活动的自然人，具体申请材料请联系就近支行网点客户经理获取材料清单</p>
        </div>
        <panel class="panel flipInX animated delay-0-2s" @detail="onDetail" @form="onForm"/>
        <panel class="panel flipInX animated delay-0-4s" type="2"  @detail="onDetail" @form="onForm" />
      </section>

      <section class="section4 section3 section section_background">
        <!-- <img src="../resource/images/0/logo.png" class="logo absolute" /> -->
        <div class="theme">
          <img src="../resource/images/0/h1.png" class="h1">
          <img src="../resource/images/0/h2.png" class="h2">
        </div>
        <panel class="panel flipInX animated delay-0-2s" type="3"  @detail="onDetail" @form="onForm"/>
        <panel class="panel flipInX animated delay-0-4s" type="4"  @detail="onDetail" @form="onForm"/>
        <panel class="panel flipInX animated delay-0-6s" type="5"  @detail="onDetail" @form="onForm"/>
      </section>

      <section class="section5 section3 section section_background">
        <!-- <img src="../resource/images/0/logo.png" class="logo absolute" /> -->
        <div class="theme">
          <img src="../resource/images/0/h1.png" class="h1">
          <img src="../resource/images/0/h2.png" class="h2">
        </div>
        <panel class="panel flipInX animated delay-0-2s" type="6"  @detail="onDetail" @form="onForm"/>
        <panel class="panel flipInX animated delay-0-4s" type="7"  @detail="onDetail" @form="onForm"/>
        <img src="../resource/images/2/0.png" class="bottom pcenter"/>
      </section>
      
    </wei-scroll>
    <detail ref="detail" @form="onForm"/>
    <v-form ref="form"/>
  </div>
</template>

<script>
import WeiScroll from '@/base/weiScroll/weiScroll'
import Panel from '@/components/panel/panel'
import Detail from '@/components/detail/detail'
import VForm from '@/components/form/form'

export default {
  data () {
    return {
    };
  },
  methods: {
    onDetail(type) {
      this.$refs.detail.show(type)
    },
    onForm(type) {
      this.$refs.detail.hide()
      this.$refs.form.show(type)
    }
  },
  components: {
    WeiScroll,
    Detail,
    Panel,
    VForm
  }
}
</script>