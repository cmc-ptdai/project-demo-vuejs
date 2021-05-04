<template>
  <div class="search">
    <div class="box">
       <div class="search__title">
          <p>Loại sản phẩm</p>
        </div>
        <div class="search__content">
          <ul>
            <li v-for="item in typeProduct" :key="item.name"> {{item.name}}</li>
          </ul>
        </div>
    </div>

    <div class= "box" >
        <div class="search__title">
          <p>GIÁ SẢN PHẨM</p>
        </div>
        <div class="search__content">
          <ul>
            <li v-for="(item, index) in prices" :key="index" @click="searchByPrice(item)">
              <p>
                {{item.price1 === 0 ? 'dưới' : item.price1 === 1000000 ? 'trên' : item.price1 + '->'}}
                {{item.price2 === 9999999999999 ? '1000000' : item.price2}}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class= "box" >
        <div class="search__title">
          <p>quốc gia</p>
        </div>
        <div class="search__content">
          <ul>
            <li v-for="item in countrys" :key="item"> {{item}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
import EventBus from '../../../EventBus'

export default {
  data() {
    return {
      countrys: ['canada', 'Hoa kỳ', 'Việt Nam', 'Úc'],
      typeProduct: [
        {
          type: 'rau',
          name: 'Rau',
        },{
          type: 'cu',
          name: 'Củ',
        },{
          type: 'qua',
          name: 'Quả',
        },{
          type: 'nam',
          name: 'Nấm',
        }
      ],
      prices: [
        {
          price1: 0,
          price2: 100000
        },
        {
          price1: 100000,
          price2: 200000
        },
        {
          price1: 200000,
          price2: 300000
        },
        {
          price1: 300000,
          price2: 500000
        },
        {
          price1: 500000,
          price2: 1000000
        },
        {
          price1: 1000000,
          price2: 9999999999999
        }
      ]
    }
  },
  methods: {
    searchByPrice(key) {
      EventBus.$emit('sortByPrice', key)
    }
  },
}
</script>
<style lang="scss">
.search {
  .box {
    margin-top: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    border-top: none;
  }
  &__title {
    background-color: #80bb35;
    border-radius: 10px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
  }

  &__content {
    margin-top: 10px;
    font-weight: 500;
    padding: 10px;
    li {
      margin: 5px 0px;
      transition: all 0.2s ease;
    }
    li:hover {
      color: #80bb35;
    }
  }
}

</style>
