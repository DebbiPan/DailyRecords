<template>
<nav>
  <router-link to="/labels" class="item" active-class="selected">
    <div class="item-content">
      <Icon name="Label"/>
      标签
    </div>
  </router-link>
  <router-link to="/money" class="item" active-class="selected">
    <div class="item-center">
      记一笔
    </div>
  </router-link>
  <router-link to="/Statistics" class="item" active-class="selected">
    <div class="item-content">
      <Icon name="Statistics"/>
      流水
    </div>
  </router-link>
</nav>
</template>

<script lang="ts">
export default {
  name:'Nav'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
  display:flex;
  flex-direction: row;
  font-size:12px;
  box-shadow:0 0 3px rgba(0,0,0,0.25) ;
  >.item{
    width:33.3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    &:nth-child(2){
      background: $blue;
      border-radius: 8px;
      color:#fff;
      box-shadow: 3px 3px 3px rgb(0,0,0,0.25);
    }
    >.item-center{
      text-align: center;
      font-size: 18px;
    }
    >.item-content{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  >.item.selected{
    color:$pink;
    font-weight: bold;
    &:nth-child(2){
      color:#fff;
    }
  }
}
</style>