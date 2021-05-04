<template>
    <div>
      <Header/>
      <Menu/>
      <div class="content">
        <router-view />
      </div>

      <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">
        <i class="fas fa-arrow-up" />
      </div>
    </a-back-top>
  </div>
    </div>
</template>
<script>
import Header from './header/Header'
import Menu from './menu/Menu'
import UserApi from '../api/userApi'

export default {
  data() {
    return {

    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      const respons = await UserApi.getUser()
      this.$store.commit('SET_USERS', respons);
    }
  },
  components: {
    Header,
    Menu
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
