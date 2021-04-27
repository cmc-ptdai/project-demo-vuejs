<template lang="">
  <div class="list__menu">
    <a-row>
      <a-col :span="18">
        <ul >
          <MenuItem :menu="menu"/>
        </ul>
      </a-col>

      <a-col :span="6">
        <Search/>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import MenuItem from './MenuItem'
import Search from './Search'

export default {
  data() {
    return {
      menu: [
        {
          title: 'Trang chủ',
          path: '/'
        },
        {
          title: 'Sản Phẩm',
          path: '/products',
          children: [
            {
              title: 'Rau xanh',
              path: '/vegetable'
            },
            {
              title: 'Củ',
              path: '/tubers',
              children: [
                {
                  title: 'Quả tươi',
                  path: '/t'
                },
                {
                  title: 'Quả khô',
                  path: '/k'
                }
              ]
            },
            {
              title: 'Quả',
              path: '/fruit',
              children: [
                {
                  title: 'Quả tươi',
                  path: '/t'
                },
                {
                  title: 'Quả khô',
                  path: '/k'
                }
              ]
            },
            {
              title: 'Nấm',
              path: '/mushroom',
              children: [
                {
                  title: 'Quả tươi',
                  path: '/t'
                },
                {
                  title: 'Quả khô',
                  path: '/k'
                }
              ]
            },
          ]
        },
        {
          title: 'Tin tức',
          path: '/vegetable'
        },
        {
          title: 'Giới thiệu',
          path: '/tubers'
        },
        {
          title: 'Liên hệ',
          path: '/fruit'
        },
        {
          title: 'Chỉ đường',
          path: '/mushroom'
        }
      ]
    }
  },

  components: {
    MenuItem,
    Search
  }
}
</script>
<style lang="scss">

$Orange: #fe9705;
$Green: #80bb35;

.list__menu {
  width: 100%;
  text-align: center;
  line-height: 35px;
  margin: auto;
  padding: 0px 10%;
  background-color: $Green;
  margin-bottom: 20px;
  a {
    color:#fff !important;
    font-size: 20px;
    font-weight: 500;
  }
  li {
    position: relative;
    transition: all 0.35s ease;
    width: 150px;
    padding: 8px;
  }
  li:hover {
    background-color: $Orange
  }
  .active {
    background-color: $Orange;
  }
  &__children {
    top: 100%;
    left: 0;
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 0 15px -5px rgba(0,0,0,0.4);
    display: flex;
    li {
      &:hover {
        background-color: #ccc;
      }
    }
    a {
      color: black !important;
      font-weight: 400;
      font-size: 18px;
    }
  }
  li > ul {
    display: none;
  }
  li:hover > ul{
    display: block;
    animation-duration: 0.5s;
    z-index: 10;
  }

}
</style>
