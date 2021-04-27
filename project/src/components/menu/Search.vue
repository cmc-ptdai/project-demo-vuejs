<template lang="">
  <div class="search">
    <div class="search__group">
      <input type="text" name="search" placeholder="tên sản phẩm ..."  />
      <button><i class="fas fa-search"></i></button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.search {
  padding: 8px;
  &__group {
    position: relative;
    width: 200px;
    input {
      border: none;
      width: 100%;
      border-radius: 50px;
      padding: 0px 10px;
    }
    button {
      position: absolute;
      right: 10px;
      border: none;
      background: none;
      &:hover {
        color: #007bff;
      }
    }
  }
}
</style>
