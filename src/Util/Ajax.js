import Axios from 'axios'

// 创建axios实例
const service = Axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 0 // 请求超时时间
})
// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器

service.interceptors.response.use(response => {
  const result = response.data
  if (result.status === 0) {
    return result.data
  } else {
    console.log(result)
    return result.data
  }

}, error => {
  // 对响应错误做些什么
  return Promise.reject(error)
})

export default service
