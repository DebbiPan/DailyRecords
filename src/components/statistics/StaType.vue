<template>
<div class="wrapper">
  <div class="title">统计页面</div>
  <div class="statistics">
    <div class="date">
      <div class="year">2021年</div>
      <div class="month">
        8月
        <Icon name="expendDowm"></Icon>
      </div>
    </div>
    <div class="type">
      <div class="out">
        <div class="text">收入</div>
        <div class="number">0.00</div>
      </div>
      <div class="in">
        <div class="text">支出</div>
        <div class="number">0.00</div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class StaType extends Vue{

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrapper{
  background: $pink;
  height:115px;
  >.title{
    text-align: center;
    font-size:24px;
    padding:10px 0;
    border-bottom: 1px solid #fff;
  }
  >.statistics{
    font-size:16px;
    display:flex;
    flex-direction: row;
    >.date{
      flex-grow: 1;
      text-align: center;
      >.month{
        font-size: 20px;
        transform: translate(10px);
      }
    }
    >.type{
      display:flex;
      flex-direction: row;
      flex-grow: 5;
      justify-content: space-around;
      .text{
        font-size: 20px;
      }
    }
  }
}
</style>