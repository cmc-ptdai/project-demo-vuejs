import axiosClient from './apiClient'

const productApi = {
  getAll: (params) => {
    const url = '/products'
    return axiosClient.get(url, { params })
  },

  getById: (id) => {
    const url = `/products/?id=${id}`
    return axiosClient.get(url)
  },
  // deleteProduct: (id) => {
  //   const url = `/products/${id}`
  //   return axiosClient.delete(url)
  // },
  getSlide: () => {
    const url = '/slide'
    return axiosClient.get(url)
  }
}

export default productApi
