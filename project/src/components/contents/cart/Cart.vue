<template>
  <div class="cart">
    <div style="margin-bottom: 16px"></div>
    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="getCart"
      rowKey="id"
    >
      <template slot="image" slot-scope="text, record">
        <div class="cart__box-img">
          <img :src="record.img" :alt="record.name" />
        </div>
      </template>

      <template slot="text" slot-scope="text">
        <div class="cart__box-text">
          <p>{{ text }}</p>
        </div>
      </template>

      <template slot="action" slot-scope="text, record">
        <div class="cart__box--delete">
          <a-popconfirm
            title="Sure to delete?"
            @confirm="() => onDeletepProduct(record.id)"
          >
            <a-button type="danger"> Delete </a-button>
          </a-popconfirm>
          <!-- <div class="" :id="`${record.id}delete`"></div> -->
        </div>
      </template>

      <template slot="countPrice" slot-scope="text, record">
        <div className="cart__box-text">
          <p>
            {{
              (record.price * record.count)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
            VND
          </p>
        </div>
      </template>

      <template slot="count" slot-scope="text, record">
        <div class="cart__box-count">
          <button
            class="cart__box-text--minus"
            @click="() => decrement(record.id)"
            :disabled="record.count === 1 ? true : false"
          >
            -
          </button>
          <input
            type="text"
            :value="text"
            :id="record.id"
            @change="getValueNumber"
          />
          <button
            class="cart__box-text--plus"
            @click="() => increment(record.id)"
            :disabled="record.count > record.countPay ? true : false"
          >
            +
          </button>

          <!-- <div class="" :id="record.id"></div> -->
        </div>
      </template>
    </a-table>
    <div>
      <h2>tổng tiền: {{ totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} VND</h2>
    </div>
    <div  class="groupButton">
      <a-button
        type="danger"
        :disabled="!hasSelected"
        :loading="loadingdelete"
        @click="deleteListProduct"
      >
        Xóa
      </a-button>
      <a-button
        type="primary"
        :disabled="!hasSelected"
        :loading="loading"
        @click="payCart"

      >
        Thánh toán
      </a-button>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "Sản phẩm",
    dataIndex: "img",
    scopedSlots: { customRender: "image" },
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "name",
    scopedSlots: { customRender: "text" },
  },
  {
    title: "Giá sản phẩm",
    dataIndex: "price",
    scopedSlots: { customRender: "text" },
  },
  {
    title: "Số lượng",
    dataIndex: "count",
    scopedSlots: { customRender: "count" },
  },
  {
    title: "ĐVT",
    dataIndex: "dvt",
    scopedSlots: { customRender: "text" },
  },
  {
    title: "Thành tiền",
    dataIndex: "thanhtien",
    scopedSlots: { customRender: "countPrice" },
  },
  {
    title: "Xoá",
    dataIndex: "delete",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  data() {
    return {
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      loadingdelete: false,
      totalMoney: 0,
    };
  },
  watch: {
    // selectedRowKeys(e) {
    //   const dataCart = [...this.getCart]
    //   let sum = 0
    //   e.map(item => {
    //     // const div = document.getElementById(item);
    //     // const div2 = document.getElementById(`${item}delete`);
    //     // div.classList.add("overlay");
    //     // div2.classList.add("overlay");
    //     dataCart.map(product => {
    //       if (item === product.id) {
    //         sum = sum + (product.price * product.count)
    //       }
    //     })
    //   })
    //   this.totalMoney = sum
    // },
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },

    getCart() {
      return this.$store.state.users.listUser.cart;
    },
  },
  methods: {
    onDeletepProduct(id) {
      this.$store.dispatch("deleteProductByCart", id);
      setTimeout(() => {
        this.$store.dispatch("fetchUser");
      }, 100);
    },

    decrement(id) {
      this.$store.dispatch("decrementProjectByCart", id);
      setTimeout(() => {
        this.$store.dispatch("fetchUser");
      }, 100);
      this.onSelectChange(this.selectedRowKeys)
    },

    async increment(id) {
      await this.$store.dispatch("incrementProjectByCart", id);
      setTimeout(() => {
        this.$store.dispatch("fetchUser");
      }, 100);
      this.onSelectChange(this.selectedRowKeys)
    },

    payCart() {
      this.loading = true;
      this.$store.dispatch("addOder", this.selectedRowKeys)
      this.deleteListProduct()
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },

    deleteListProduct() {
      // this.loadingdelete = true;
      this.$store.dispatch("deleteListProduct", this.selectedRowKeys);
      setTimeout(() => {
        // this.loadingdelete = false;
        this.$store.dispatch("fetchUser");
        this.selectedRowKeys = [];
      }, 500);
      this.totalMoney = 0
    },

    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
      const dataCart = [...this.getCart]
      let sum = 0
      selectedRowKeys.map(item => {
        dataCart.map(product => {
          if (item === product.id) {
            sum = sum + (product.price * product.count)
          }
        })
      })
      this.totalMoney = sum
    },

    getValueNumber(event) {
      this.$store.dispatch("changeNumberProjectByCart", { number: event.target.value, id:event.target.id});
      setTimeout(async () => {
        await this.$store.dispatch("fetchUser");
        await this.onSelectChange(this.selectedRowKeys)
      }, 1000);
    }
  },
};
</script>
<style lang="scss">
.disabled {
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #ccc;
}
.cart {
  &__box-img {
    img {
      width: 100px;
      height: 100px;
    }
  }
  &__box-text {
    font-weight: 600;
    font-size: 18px;
  }
  &__box-count {
    position: relative;
    width: 82px;
    text-align: center;
    border: 1px solid #ccc;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background:rgba($color: #000000, $alpha: 0.1);
      z-index: 10;
    }

    button {
      background-color: #fff;
      width: 20px;
      border: none;
      cursor: pointer;
      transition: all 0.25s ease;
      &:hover {
        background-color: #ccc;
      }
    }
    input {
      text-align: center;
      width: 40px;
      border: none;
    }
  }
  &__box--delete{
    position: relative;
    width: 73px;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background:rgba($color: #000000, $alpha: 0.1);
      z-index: 10;
    }
  }
  h2 {
    margin: 15px;
    text-align: right;
  }
  &__button {
    &--pay {
      float: right;
    }
  }
}
.ant-modal-footer {
  display: none;
}

.groupButton {
  display: flex;
  justify-content: space-between;
}
.btnSubmit {
  padding: 5px 30px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 75px;
}
.ant-form-item-control-input-content {
  display: flex;
}
.ant-notification {
  margin-top: 50px;
}
.ant-notification-notice {
  background-color: #ccc;
}
</style>
