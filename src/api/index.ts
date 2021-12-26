import axios from '@/axios/index'

export const getSearchBook = (queryParams: any, config: any) => {
  return axios.get('/path/path', queryParams, config)
}
export const testPost1 = (queryParams: any, config: any) => {
  return axios.post('/path/path', queryParams, config)
}
