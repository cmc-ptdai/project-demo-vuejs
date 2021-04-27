<template>
    <div class="header">
      <a-row>
        <a-col :span="6" >
          <p>dang nhap</p>
        </a-col>

        <a-col :span="12">
          <p>logo</p>
        </a-col>

        <a-col :span="6">
          <p>cart</p>
        </a-col>

    </a-row>
    </div>
</template>
<script>
export default {
    data() {
      return {

      }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
    .header {
      height: 100px;
      background-color: black;
      color: #fff;
      line-height: 100px;
    }
</style>
