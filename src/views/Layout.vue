<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
      <div class="bottom"></div>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
export default{
  name:'Layout'
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  height:100%;
  .content{
    .bottom{
      width:100%;
      height: 5vh;
    }
  }
  Nav{
    width:100%;
    height:5vh;
    position: fixed;
    bottom:0;
  }
}

</style>