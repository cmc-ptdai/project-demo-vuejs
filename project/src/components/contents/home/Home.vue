<template>
  <div class="home">
    <Slide/>
    <GroupProduct :products="products" title="rau xanh" loai="rau" path="/products/vegetable"/>
    <GroupProduct :products="products" title="củ tươi" loai="cu" path="/products/tubers"/>
    <GroupProduct :products="products" title="quả tươi" loai="qua" path="/products/fruit"/>
    <GroupProduct :products="products" title="nấm" loai="nam" path="/products/mushroom"/>
    <GroupProduct :products="products" title="đồ tươi" species="tuoi" path="/products/vegetable"/>
    <GroupProduct :products="products" title="đồ khô" species="kho" path="/products/vegetable"/>
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

</style>
