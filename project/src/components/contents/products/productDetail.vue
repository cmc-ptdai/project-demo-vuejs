<template>
  <div>
    <div class="row">
      <div class="col-lg-3">
        <div class="box">
          <div class="search__title">
            <p>SẢN PHẨM NỔI BẬT</p>
          </div>
          <div class="search__content">
            <h1>danh sách sản phẩm</h1>
          </div>
        </div>
      </div>

      <div  class="col-lg-9 profile">
        <div class="row">
          <div class="col-md-7">
            <div>
              <img
                :src="product.img"
                :alt="product.name"
              />
            </div>
          </div>

          <div class="col-md-5 profile__content">

            <h2 class="title">{{product.name}}</h2>

            <p class="status">Trạng Thái:
              <span
                v-if="product.countPay > 0"
                class="status--stocking"
              >
                <i class="fas fa-check"></i>
                Còn hàng
              </span>

              <span
                v-else class="status--OutOfStock">
                <i class="fas fa-times"/>
                Hết hàng
              </span>
            </p>

            <h2 class="price">{{formatPrice}}</h2>

            <div class="nutrition">
              giá trị dinh dưỡng
            </div>

            <div class="profile__addCart">
              <label>Số lượng: </label>

              <div class="addNumber">
                <button class="minus" @click="decrement">-</button>
                <input type="number" v-model="number"/>
                <button class="plus" @click="increment">+</button>
              </div>

              <button
                :class="product.countPay > 0 ? 'buy' : 'disabledBuy'"
                :disabled ="product.countPay > 0 ? false : true"
                @click="addToCart"
              >
                Mua hàng
              </button>

            </div>
            <p>Địa chỉ: <span>aaaaa</span></p>
          </div>

        </div>
      </div>
    </div>
    <div class="myTabs">
      <a-tabs default-active-key="1" @change="callback">

        <a-tab-pane key="1" tab="Mô tả" >
          mô tả sản phẩm
        </a-tab-pane>

        <a-tab-pane key="2" tab="Thông tin" >
          thông tin sản phẩm
        </a-tab-pane>

        <a-tab-pane key="3" tab="Đánh giá">
          <h3>Đánh giá sản phẩm</h3>
          <a-rate v-model="value" />
          <span >
            <button class="evaluate" @click="showModal">Đánh giá sản phẩm</button>
            <!-- <span style={{display: user.id === undefined ? 'block' : 'none'}}>( Đằng nhập để gửi đánh giá của bạn )</span> -->
          </span>

          <a-modal v-model="visible" title="Title" on-ok="handleOk">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">
                cancel
              </a-button>
              <a-button key="submit" type="primary" @click="handleOk">
                gửi
              </a-button>
            </template>

              <span>Đánh giá của bạn về sản phẩm: </span>
              <a-rate v-model="myValue" />
          </a-modal>
        </a-tab-pane>

        <a-tab-pane key="4" tab="Bình luận" >
          thông tin sản phẩm
        </a-tab-pane>

      </a-tabs>
    </div>

  </div>
</template>
<script>
import axiosProduct from '../../../api/productApi'


export default {
  data() {
    return {
      product: {},
      number: 0,
      value: 3,
      visible: false,
      myValue: 0,
    }
  },
  computed: {
    formatPrice() {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(this.product.price)
    }
  },
  created() {
    this.fetchApi()
  },
  methods: {
    async fetchApi() {
      const respons = await axiosProduct.getById(this.$route.params.id)
      this.product = respons[0]
    },

    increment() {
      this.number++
    },

    decrement() {
      this.number--
    },

    addToCart() {
      console.log(this.number);
      this.number = 0
    },
    callback() {

    },

    showModal() {
      this.visible = true;
    },

    handleOk() {
        this.visible = false;
        console.log(this.myValue);
    },

    handleCancel() {
      this.visible = false;
    },
  },
}
</script>
<style lang="scss">
.search__title {
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
.profile {
  img {
    width: 100%;
    height: 400px;
    border-radius: 15px;
  }
  &__content {
    .title {
      font-weight: 700;
      font-size: 30px;
    }
    .status {
      font-size: 20px;
      margin: 15px 0px;
      span {
        color: #fff;
        font-weight: 600;
        padding: 5px;
        border-radius: 5px;
        margin-left: 10px;
        font-size: 16px;
      }
      &--stocking {
        background-color: #80bb35;
      }
      &--OutOfStock {
        background-color: #fe9705;
      }
    }
    .price {
      font-weight: 700;
      font-size: 28px;
      color: #fe9705;
    }
    .nutrition {
      width: 100%;
      height: 100px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }
  &__addCart {
    display: flex;
    margin-top: 20px;
    label {
      font-weight: 600;
      font-size: 20px;
    }
    .addNumber {
      position: relative;
      input {
        width: 90px;
        height: 100%;
        text-align: center;
        border: 1px solid black;
        margin: 0px 15px;
        padding-left: 10px;
      }
      .plus {
        cursor: pointer;
        position: absolute;
        border: none;
        background-color: #fff;
        top: 1px;
        right: 16px;
        width: 20px;
        height: 95%;
        transition: all 0.25s ease;
        &:hover {
          background-color: #ccc;
        }
      }
      .minus {
        cursor: pointer;
        position: absolute;
        border: none;
        background-color: #fff;
        top: 1px;
        left: 16px;
        width: 20px;
        height: 95%;
        transition: all 0.25s ease;
        &:hover {
          background-color: #ccc;
        }
      }
    }
    .buy {
      cursor: pointer;
      border: 1px solid #80bb35;
      background-color: #80bb35;
      border-radius: 10px;
      width: 80px;
      color: #fff;
      font-weight: 600;
    }
    .disabledBuy {
      border: 1px solid #ccc;
      background-color: #ccc;
      border-radius: 10px;
      width: 80px;
      color: #fff;
      font-weight: 600;
    }
  }
}
.evaluate {
  margin-left: 310px;
  background-color: #80bb35;
  border: 1px solid #80bb35;
  border-radius: 5px;
  padding: 5px 10px ;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.myTabs {
  margin: 30px 0px;
  .ant-tabs-nav-wrap {
    .ant-tabs-tab-active{
      background-color: #fe9705 !important;
      color: #fff !important;
    }
    .ant-tabs-tab {
      background-color: #80bb35;
      color: #fff !important;
      margin-right: 10px;
    }
    .ant-tabs-ink-bar {
      display: none !important;
    }
  }
  .ant-tabs .ant-tabs-top-content > .ant-tabs-tabpane, .ant-tabs .ant-tabs-bottom-content > .ant-tabs-tabpane {
    border-radius: 10px;
    padding: 20px 10px;
    background-color: #fff;
  }
}



</style>
