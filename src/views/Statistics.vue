<template>
  <div class="wrap">
    <div class="nav">
      <div class="title">类别设置</div>
      <ul class="types">
        <li class="expenditure selected">支出</li>
        <li class="income">收入</li>
      </ul>
    </div>

    <div class="tags">
      <ul>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
        <li>
          <Icon name="decrease"></Icon>
          <span>买菜</span>
        </li>
      </ul>
    </div>
    <Layout/>
  </div>
</template>

<script lang="ts">
import Layout from '@/views/Layout.vue';

export default {
  name:"Statistics",
  components:Layout
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrap{
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
  .tags{
    >ul{
      >li{
        border:1px solid red;
        padding:3px;
      }
    }
  }
}
</style>