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
import userApi from '../../../../api/userApi'

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
      if(this.getIdUser.id) {
        const newCart = this.getIdUser.cart;

        if (newCart.length > 0) {
          const index = newCart.findIndex(item => item.id === this.product.id)
          if (index !== -1) {
            const newproduct = {
              ...newCart[index],
              count: newCart[index].count + 1,
              countPay: newCart[index].countPay - 1
            }


            newCart.splice(index, 1, newproduct)
            const newUser = {
              ...this.getIdUser,
              cart: newCart
            }

            userApi.addCart(this.getIdUser.id, newUser)
          } else {
            const newproduct = {
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              img: this.product.img,
              count: 1,
              countPay: this.product.countPay - 1,
            }
            newCart.push(newproduct)
            const newUser = {
              ...this.getIdUser,
              cart: newCart
            }

            userApi.addCart(this.getIdUser.id, newUser)
          }
        } else {
          const newproduct = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            img: this.product.img,
            count: 1,
            countPay: this.product.countPay - 1,
          }
          newCart.push(newproduct)
          const newUser = {
              ...this.getIdUser,
              cart: newCart
            }
          console.log(newUser);
          userApi.addCart(this.getIdUser.id, newUser)
        }
      } else {
        this.$store.commit('addCartByHome', this.product)
        console.log('aaaaaaa');
      }
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
