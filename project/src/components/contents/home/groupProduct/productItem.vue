<template>
  <div class="item">
    <a-card
      class="item__card"
      hoverable
    >
      <img
        slot="cover"
        alt="example"
        :src="product.img"
      />
        <p>{{product.name}}</p>
        <h3>{{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} VND</h3>

        <router-link
            :to="'/ProductDetail/'+ product.id"
        >
          <button class="item__card--seeMore">Xem thêm</button>
        </router-link>

        <a>
          <button
            :class="product.countPay > 0 ? 'item__card--buy' : 'item__card--disabledBuy'"
            :disabled="product.countPay > 0 ? false : true"
            @click="addCart"
            >
            Mua Ngay
          </button>
        </a>
    </a-card>
  </div>
</template>
<script>
//import { prototype } from 'vue/types/umd'

export default {
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    getIdUser() {
      return this.$store.state.users.listUser
    }
  },
  methods: {
    addCart() {
      this.$store.dispatch('addCart', {item: this.product, count: 1})
      setTimeout(() => {
        this.$store.dispatch('fetchUser')
      }, 100);
    }
  },
}
</script>
<style lang="scss" scoped>
.item {
  margin-top: 20px;
  width: 90% !important;
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
    text-align: center;
    border-radius: 10px;
    button {
      width: 75px;
      border: none;
      border-radius: 5px;
      font-weight: 500;
      height: 30px;
      transition: all 0.3s ease;
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
</style>
