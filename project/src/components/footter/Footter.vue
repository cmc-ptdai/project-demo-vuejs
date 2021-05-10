<template>
  <div class="footter">
s
  </div>
</template>
<script>
export default {
  data() {
    return {
      visiable: false,
    }
  },
  methods: {
    lolphong() {
      this.visiable = !this.visiable
    }
  },
}
</script>
<style lang="scss">
  .footter {
    width: 100%;
    height: 150px;
    background-color: #ccc;
    margin-top: 50px;
  }
</style>
