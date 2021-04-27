<template>
    <div>
      <Header/>
      <Menu/>
      <Home/>
    </div>
</template>
<script>
import Header from './header/Header'
import Menu from './menu/Menu'
import Home from './contents/home/Home'


export default {
  components: {
      Header,
      Menu,
      Home
  },
}
</script>
<style lang="scss" scoped>

</style>
