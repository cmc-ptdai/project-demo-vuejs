<template>
  <div class="group-product">
    <div class="group-product__title">
      <p>{{title}}</p>
    </div>
      <VueSlickCarousel
        :arrows="true"
        :dots="true"
        :slidesToShow="3"
        :slidesToScroll="3"
        :autoplay="true"
        :speed="2000"
        :autoplaySpeed="3000"
        :dotsClass= "'slick-dots custom-dot-class'"
        >
        <div v-for="item in listProduct" :key="item.id">
          <ProductItem :product="item"/>
        </div>
      </VueSlickCarousel>
      <div class="group-product__seeMore" onClick={seeMoreProduct}>
        <a >xem thêm <i class="fad fa-chevron-double-right"></i></a>
      </div>
    </div>
</template>
<script>
 import ProductItem from './productItem'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'



export default {
  name: 'MyComponent',
  data() {
    return {
    }
  },
  computed: {
    listProduct: function() {
      return this.products.filter(item => item.typeID === this.loai || item.species === this.species)
    }
  },
  props: {
    products: {
      type: Array
    },
    title: {
      type: String
    },
    loai: {
      type: String
    },
    species: {
      type : String
    }
  },
  components: { VueSlickCarousel,ProductItem },
}
</script>
<style lang="scss" >
.group-product {
  width: 100%;
  margin-top: 40px;
  margin-left: 15px;
  .slick-prev:before, .slick-next:before {
    color: #ccc;
    font-size: 30px
  }
  &__title {
    width: 15%;
    background-color: #80bb35;
    border-radius: 50px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }
  &__seeMore {
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    margin-top: 20px;

    border-bottom: 1px solid #ccc;

    font-size: 18px;
    font-weight: 500;
    color: #007bff;
    cursor: pointer;

    i {
      animation: mymove 2s infinite;
      background-color: none;
    }
    @keyframes mymove {
      from { color: #cae2fa; left: 0px;}
      to {left: 15px;}
    }
  }
}

</style>
