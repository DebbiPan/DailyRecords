<template>
  <div class="nav">
    <div class="title">类别设置</div>
    <ul class="types">
      <li class="expenditure selected">支出</li>
      <li class="income">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelNav extends Vue {

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.nav{
  background: $pink;
  font-weight: bold;
  text-align: center;
  .title{
    font-size:24px;
    padding:5px;
  }
  .types{
    display:flex;
    flex-direction: row;
    justify-content: center;
    >li{
      margin-bottom:10px;
      padding:5px 50px;
      &.expenditure{
        border:1px solid #fff;
        border-radius: 10px 0 0 10px;
      }
      &.income{
        border:1px solid #fff;
        border-radius: 0 10px 10px 0;
      }
      &.selected{
        background: #fff;
      }
    }
  }
}
</style>