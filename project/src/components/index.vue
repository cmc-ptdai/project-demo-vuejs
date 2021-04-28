<template>
    <div>
      <Header/>
      <Menu/>
      <div class="content">
        <router-view />
      </div>
    </div>
</template>
<script>
import Header from './header/Header'
import Menu from './menu/Menu'


export default {
  components: {
      Header,
      Menu
  },
}
</script>
<style lang="scss">
.content {
  width: 100%;
}
</style>
