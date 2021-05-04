<template>
    <div class="header">
      <a-row>
        <a-col :span="6" >
          <p>dang nhap</p>
        </a-col>

        <a-col :span="12">
          <p>logo</p>
        </a-col>

        <a-col :span="6" >
          <router-link to="/cart" class="cart">
            <i class="fas fa-shopping-cart">
              <!-- {newCart ? newCart.length : '0'} -->
              <span>0</span>
            </i>
          </router-link>
        </a-col>

    </a-row>
    </div>
</template>
<script>
export default {
    data() {
      return {

      }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: black;
  color:  #fff;
  height: 80px;
  line-height: 80px;
    .login {
      font-size: 15px;
      font-weight: 200;
      color: #ccc;
    }
    .logo {
      font-size: 50px;
      font-weight: 500;
      text-align: center;
    }
    .cart {
      font-size: 20px;
      font-weight: 200;
      text-align: right;
      i {
        font-size: 40px;
        position: relative;
        color: #fe9705;
        span {
          position: absolute;
          top: 2px;
          right: 13px;
          color: #fff;
          font-size: 23px;
        }
    }
  }
}
</style>
