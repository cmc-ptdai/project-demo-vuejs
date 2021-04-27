import axiosClient from './apiClient'

const Slides = {
  getSlides: () => {
    const url = '/slides/'
    return axiosClient.get(url)
  }
}

export default Slides
