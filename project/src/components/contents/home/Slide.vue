<template>
  <div class="">
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="item in slides" :key="item.id">
        <b-carousel-slide :img-src="item.img"></b-carousel-slide>
      </div>

    </b-carousel>
  </div>
</template>
<script>
import axiosSlide from '../../../api/slides'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      slides: []
    }
  },
  created() {
    this.fetchSlide()
  },
  methods: {
    async fetchSlide() {
      const respons = await axiosSlide.getSlides()
      this.slides = respons
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  },
}
</script>
<style lang="scss">
#carousel {
  width: 100%;
  height: 600px;
  .carousel-inner {
    border-radius: 20px;
    img {
      overflow: hidden;
      object-fit: cover;
      width: 100%;
      height: 600px !important;
      image-rendering: pixelated;
    }
  }
}
</style>
