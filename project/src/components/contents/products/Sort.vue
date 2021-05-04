<template>
  <div>
    <a-dropdown>
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">Giá từ cao đến thấp</a-menu-item>
        <a-menu-item key="2">Giá từ thấp đến cao</a-menu-item>
        <a-menu-item key="3">Từ A -> Z</a-menu-item>
        <a-menu-item key="4">Từ Z -> A</a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px"> Sắp xếp <a-icon type="down" /> </a-button>
    </a-dropdown>
  </div>
</template>
<script>
import EventBus from '../../../EventBus';

export default {
  data() {
    return {

    }
  },
  methods: {
    handleMenuClick(e) {
      EventBus.$emit('sortByProduct', e.key);
    }
  },
}
</script>
<style lang="">

</style>
