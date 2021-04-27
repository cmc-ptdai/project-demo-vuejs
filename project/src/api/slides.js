import axiosClient from './apiClient'

const Slides = {
  getSlides: () => {
    const url = '/slide'
    return axiosClient.get(url)
  }
}

export default Slides
