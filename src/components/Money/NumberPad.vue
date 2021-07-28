<template>
  <div class="numberPad">
    <div class="padNav">
      <label class="note">
        <span class="name">备注:</span>
        <input type="text" placeholder="点击写备注...">
      </label>
      <div class="output">0.00</div>
    </div>
    <div class="buttons">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="date">
        <Icon name="date" class="dateIcon"></Icon>
        今天
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button class="delete">删除</button>
      <button class="ok">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";

export default{
  name:'NumberPad',
  components:{Icon}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  background: $grey;
  >.padNav{
    display:flex;
    flex-direction: row;
    height:50px;
    line-height: 50px;
    border-top:1px solid black;
    >.note{
      flex-grow: 1;
      >.name{
        margin:0 5px;
      }
      >input{
        background: transparent;
      }
    }
    >.output{
      margin:0 10px;
    }
  }
  >.buttons{
    >button{
      width:25%;
      height:60px;
      border-top:1px solid #555555;
      border-right:1px solid #555555;
      &:nth-of-type(4n){
        border-right:none;
      }
      .dateIcon{
        width:20px;
        height:20px;
      }
    }
  }
}
</style>