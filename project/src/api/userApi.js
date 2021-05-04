import axiosClient from './apiClient'

const userApi = {
  getUser: () => {
    const url = '/users/1'
    return axiosClient.get(url)
  }
}
export default userApi
