<template>
  <div class="home">
    <Slide/>
    <GroupProduct :products="products" title="rau xanh" loai="rau"/>
    <GroupProduct :products="products" title="củ tươi" loai="cu"/>
    <GroupProduct :products="products" title="quả tươi" loai="qua"/>
    <GroupProduct :products="products" title="nấm" loai="nam"/>
    <GroupProduct :products="products" title="đồ tươi" species="tuoi"/>
    <GroupProduct :products="products" title="đồ khô" species="kho"/>
  </div>
</template>
<script>
import axiosProduct from '../../../api/productApi'
import Slide from './Slide'
import GroupProduct from './groupProduct/index'

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.fetchProduct()
  },
  components: {
    Slide,
    GroupProduct
  },
  methods: {
    async fetchProduct() {
      const respons = await axiosProduct.getAll()
      this.products = respons
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 80%;
  margin: auto;
}
</style>
