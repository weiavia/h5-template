import axios from 'axios'

export default (param) => {
  return axios({
    method: param.method || 'get',
    url: param.url,
    data: Object.assign(param.data, {}),
    withCredentials: true
  })
}