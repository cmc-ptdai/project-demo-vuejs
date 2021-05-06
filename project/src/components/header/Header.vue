<template>
    <div class="header">
      <a-row>
        <a-col :span="6" class="login">
          <div class="login__imgUser">
            <i class="fas fa-user" />
            <div class="login__listchose">
              <a-menu>
                <a-menu-item key="1">profile</a-menu-item>
                <a-menu-item key="2">order</a-menu-item>
                <a-menu-item key="3">logout</a-menu-item>
              </a-menu>
            </div>
          </div>
        </a-col>

        <a-col :span="12" class="logo">
          <p>logo</p>
        </a-col>

        <a-col :span="6" >
          <router-link to="/cart" class="cart">
            <i class="fas fa-shopping-cart">
              <span>{{this.$store.state.users.listUser.cart.length ? this.$store.state.users.listUser.cart.length : '0'}}</span>
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
  line-height: 77px;
  text-align: center;
    .login {
      font-size: 15px;
      font-weight: 200;
      color: #ccc;
      &__imgUser {
        position: relative;
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 50px;
        background-color: #fff;
        margin: auto;
        margin-top: 10px;
        i {
          font-size: 25px;
        }
        cursor: pointer;
        &:hover {
          .login__listchose {
            transform: translateY(3px);
            opacity: 1;
            visibility: visible;
          }
        }
      }
      &__listchose {
        position: absolute;
        left: -80%;
        z-index: 50;
        width: 150px;
        transform: translateY(30%);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease-in-out;
        ul {
          background-color: #fff;
          border-radius: 15px;
          border: 2px solid #ccc;
          li {
            font-size: 15px;
            font-weight: 700;
          }
        }
      }
      p {
        cursor: pointer;
      }
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
