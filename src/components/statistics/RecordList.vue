<template>
<div class="wrapper">
  <div class="day">
    <div class="dayTitle">
      <div class="dateRecord">
        <span class="date">08月18号</span>
        <span class="week">星期三</span>
      </div>
      <div class="total">
        <div class="out">
          <span class="text">收入：</span>
          <span class="number">0.00</span>
        </div>
        <div class="in">
          <span class="text">支出：</span>
          <span class="number">0.00</span>
        </div>
      </div>
    </div>
    <div class="count">
      <Icon name="car" class="icon"/>
      <div class="text">购物</div>
      <div class="amount">-20</div>
    </div>
    <div class="count">
      <Icon name="car" class="icon"/>
      <div class="text">购物</div>
      <div class="amount">-20</div>
    </div>
    <div class="count">
      <Icon name="car" class="icon"/>
      <div class="text">购物</div>
      <div class="amount">-20</div>
    </div>
  </div>
  <div class="block"></div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class RecordList extends Vue{

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrapper{
  .day{

    .dayTitle{
      font-size: 16px;
      color: $darkgrey;
      padding:5px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom:1px solid $darkgrey;
      .dateRecord{
        .date{
          margin:0 5px;
        }
      }
      .total{
        display: flex;
        flex-direction: row;
        >.in{
          margin:0 5px;
        }
      }
    }
    >.count{
      display:flex;
      flex-direction: row;
      align-items: center;
      margin:0 5px; ;
      .icon{
        width:24px;
        height:24px;
        margin:5px;
      }
      .amount{
        flex-grow: 1;
        text-align: right;
      }
    }
  }
  >.block{
    height:5vh;
  }
}
</style>