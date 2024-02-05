import qs from 'qs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
type CustomRequestOptions = UniApp.RequestOptions & { query?: Record<string, any> }

const baseUrl = import.meta.env.VITE_BASE_URL

// 拦截器
const httpInterceptor = {
  invoke(options: CustomRequestOptions) {
    // 处理请求参数，将 query 参数拼接到 url 上
    if (options.query) {
      const queryStr = qs.stringify(options.query)
      if (options.url.includes('?')) {
        options.url += `&${queryStr}`
      } else {
        options.url += `?${queryStr}`
      }
    }
    // 处理请求地址，如果以 http 开头则不做处理，否则加上 baseUrl
    if (options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 处理请求超时时间，默认为 3 秒
    options.timeout = 3000
    // 处理请求头
    // TODO token 未处理
    options.header = {
      ...options.header,
      platform: 'mp-weixin'
    }
  }
}

uni.addInterceptor('request', httpInterceptor)

export const http = <T>(options: CustomRequestOptions) => {
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 请求成功
          resolve(res.data as T)
        } else if (res.statusCode === 401) {
          // 登录失效处理
          reject(res)
        } else {
          // 其他错误
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export default http
