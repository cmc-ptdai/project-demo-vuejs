<template>
  <div class="products">
    <div class="col-12">
      <span>Link</span>
    </div>

    <div class="row">
        <div class="col-lg-3">
          <SearchProduct />
        </div>
        <div class="col-lg-9">
          <div class="col-12 sort">
            <Sort />
          </div>
          <div class="row">
            <div class="col-lg-12">
              <a-pagination
                v-model="current"
                show-size-changer
                :page-size.sync="pageSize"
                :total="listSort.length"
                @showSizeChange="onShowSizeChange"
              />
            </div>

            <div class="row">
              <div
                class="col-sm-12 col-lg-4 item"
                v-for="item in listSort"
                :key="item.id"
              >
                <ProductItem :product="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import SearchProduct from './Search'
import Sort from './Sort'
import axiosProduct from '../../../api/productApi'
import ProductItem from '../home/groupProduct/productItem'
import EventBus from '../../../EventBus'

export default {
  data() {
    return {
      listProduct: [],
      listSort: [],
      keySort: '',
      pageSize: 5,
      current: 1,
      numberProduct: [],
    }
  },
  created() {

    if (this.$route.name === 'searchProduct') {
      console.log(this.$store.state.users.dataSearch);
      this.listProduct=this.$store.state.users.dataSearch
      this.listSort=this.$store.state.users.dataSearch
    } else {
      this.fetchProduct()
      EventBus.$on('sortByProduct', (key) => {
      if(key === "1"){
        this.listSort.sort((item1, item2) => {
          if (item1.price > item2.price) {
            return -1
          } else {
            return 0
          }
        })
      }
      if(key === "2"){
        this.listSort.sort((item1, item2) => {
          if (item1.price < item2.price) {
            return -1
          } else {
            return 0
          }
        })
      }
      if(key === "3"){
        this.listSort.sort((item1, item2) => {
          if (item1.name < item2.name) {
            return -1
          } else {
            return 0
          }
        })
      }
      if(key === "4"){
        this.listSort.sort((item1, item2) => {
          if (item1.name > item2.name) {
            return -1
          } else {
            return 0
          }
        })
      }
    });

    EventBus.$on('sortByPrice', (key) => {
      const newArr = this.listProduct.filter(item => (item.price >= key.price1 && item.price <= key.price2))
      this.listSort = newArr
    })
    }
    // EventBus.$on('dataSearch', (listProduct) => {
    //   this.listSort = listProduct
    // })
  },

  // updated() {
  //   this.setProductPage()
  //   console.log(this.numberProduct);
  // },
  watch: {
    '$route': 'fetchProduct',
    // pageSize(val) {
    //   console.log('pageSize', val);
    // },

    // current() {
    //   for(let i = 0; i < this.page * this.current; i++) {
    //     this.numberProduct.push(this.listSort[i]);
    //   }
    //   console.log(this.numberProduct);
    // },
  },
  methods: {
    async fetchProduct() {
      const params = {
        typeID: ''
      }
      if (this.$route.name !== '') {
        params.typeID = this.$route.name
      }
      try {
        if (params.typeID === '') {
          const respons = await axiosProduct.getAll()
          this.listProduct = respons
          this.listSort = respons

        } else {
          const respons = await axiosProduct.getAll(params)
          this.listProduct = respons
          this.listSort = respons
        }
      } catch (err) {
        console.log(err);
      }
    },

    setProductPage() {
      for (let i = 0; i < 5; i++) {
        this.numberProduct.push(this.listSort[i]);
      }
    },

    onShowSizeChange(current, pageSize) {
      this.current = 1
      this.pageSize = pageSize
    },
  },
  components: {
    SearchProduct,
    Sort,
    ProductItem
  }
}
</script>
<style lang="scss">
.products {
  .sort {
    text-align: right;
  }
  .item {
    text-align: center;
    margin-top: 20px;
    img {
      width: 90%;
      height: 200px;
      margin: auto;
      margin-top: 15px;
      transition: all 0.5s ease;
    }
    &:hover img {
      transform: scale(1.1);
    }
    &__card {
      border-radius: 10px;
      button {
        width: 75px;
        border: none;
        border-radius: 5px;
        height: 30px;
        &:nth-child(1) {
          margin-right: 5px;
        }
      }
      &--seeMore {
        background-color: #80bb35;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-color: #fe9705;
        }
      }
      &--buy {
        background-color: #80bb35;
        color: #fff;
        cursor: pointer;
        &:hover {
          background-color: #fe9705;
        }
      }
      &--disabledBuy {
        background-color: #ccc;
        color: #fff;
      }
    }
  }
}

@media only screen and (max-width: 739px) {

}

@media only screen and (min-width: 740px) and (max-width: 1024px) {

}
</style>
