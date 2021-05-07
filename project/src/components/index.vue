<template>
    <div>
      <Header/>
      <Menu/>
      <div class="content">
        <router-view/>
      </div>

      <div id="components-back-top-demo-custom">
        <a-back-top>
          <div class="ant-back-top-inner">
            <i class="fas fa-arrow-up" />
          </div>
        </a-back-top>
      </div>
      <Footter/>
    </div>
</template>
<script>
import Header from './header/Header'
import Menu from './menu/Menu'
import Footter from './footter/Footter'

export default {
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch('fetchUser')
    this.$store.dispatch('fetchProducts')
  },
  methods: {

  },
  components: {
    Header,
    Menu,
    Footter
  },
}
</script>
<style lang="scss">
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #80bb35;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.content {
  width: 100%;
}
</style>
