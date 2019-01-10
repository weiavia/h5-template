import axios from 'axios'

export default (param) => {
  
  return new Promise((resolve, reject) => {
    window.vm  && vm.$vux.loading.show({ text: 'Loading' })
    axios({
      method: param.method || 'get',
      url: param.url,
      data: Object.assign(param.data || {}, {}),
      withCredentials: true
    }).then((res) => {
      vm.$vux.loading.hide()
      if(res.data.errno >= '1000') {
        vm.$vux.alert.show({
          title: res.data.errmsg
        })
        return
      }
      resolve(res.data.data)
    })
  })
  
}