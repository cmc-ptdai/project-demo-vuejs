<template>
  <div class="menu-flex">
      <router-link
        tag="li"
        :to="item.path"
        v-for="item in menu" :key="item.title"
      >
        <a>{{ item.title }}</a>
        <ul v-if="item.children" class="list__menu__children">
          <MenuItem :menu="item.children"/>
        </ul>
      </router-link>
  </div>
</template>
<script>

export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Array
    }
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss">
  .menu-flex {
    display: flex;
    width: 100%;
  }
</style>
