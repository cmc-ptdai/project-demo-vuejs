import axiosClient from './apiClient'

const userApi = {
  getUser: () => {
    const url = '/users'
    return axiosClient.get(url)
  }
}
export default userApi