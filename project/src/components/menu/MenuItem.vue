<template>
  <div class="menu-flex">
    <li v-for="item in menu" :key="item.title">
      <a>{{ item.title }}</a>
      <ul v-if="item.children" class="list__menu__children">
        <MenuItem :menu="item.children"/>
      </ul>
    </li>
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
