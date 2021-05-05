<template lang="">
  <div class="search">
    <div class="search__group">
      <input type="text" name="search" placeholder="tên sản phẩm ..."  v-model="valueInput"/>
      <router-link
        to='/searchProduct'
      >
        <button @click="searchProduct"><i class="fas fa-search" /></button>
      </router-link>
    </div>
  </div>
</template>
<script>
import productApi from '../../api/productApi'

export default {
  data() {
    return {
      valueInput: '',
      listProducts: []
    }
  },
  computed: {

  },
  created() {
    this.fetchProductApi()
  },
  methods: {
    async fetchProductApi() {
      const respons = await productApi.getAll()
      this.listProducts = respons
    },
    searchProduct() {
      const productSearch = this.listProducts.filter(item => item.name.toLowerCase().indexOf(this.valueInput) !== -1)
      this.valueInput = ''
      this.$store.commit('SET_DATASEARCH', productSearch)
    }
  },
}
</script>
<style lang="scss" scoped>
.search {
  padding: 8px;
  &__group {
    position: relative;
    width: 200px;
    input {
      border: none;
      width: 100%;
      border-radius: 50px;
      padding: 0px 10px;
    }
    button {
      position: absolute;
      right: 10px;
      border: none;
      background: none;
      color: black;
      &:hover {
        color: #007bff;
      }
      i {
      }
    }
  }
}
</style>
