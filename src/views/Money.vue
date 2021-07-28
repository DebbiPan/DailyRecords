<template>
  <div class="wrap">
    <nav>
      <Icon name="back" class="back"></Icon>
      <ul class="types">
        <li class="expenditure selected">支出</li>
        <li class="income">收入</li>
      </ul>
    </nav>
    <div class="tags">
      <ul>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">餐饮</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">购物</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">日用</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">交通</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">蔬菜</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">水果</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">餐饮</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">购物</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">日用</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">交通</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">蔬菜</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">水果</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">餐饮</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">购物</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">日用</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">交通</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">蔬菜</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">水果</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">餐饮</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">购物</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">日用</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">交通</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">蔬菜</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">水果</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">餐饮</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">购物</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">日用</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">交通</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">蔬菜</span>
        </li>
        <li>
          <Icon name="dining" class="icon"/>
          <span class="tag">水果</span>
        </li>
      </ul>
    </div>
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
  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";

export default {
  name:'money',
  components:{Icon}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrap{
  >nav{
    width:100%;
    height: 50px;
    line-height: 50px;
    background: $pink;
    color:$white;
    >.back{
      float: left;
      width:30px;
      height:30px;
      position: relative;
      top:10px;
    }
    >ul{
      display: flex;
      flex-direction: row;
      justify-content:space-around ;
      font-size: $font-nav;
      >li {
        position:relative;
        &.selected::after{
          content:'';
          width:60px;
          height:3px;
          background: $white;
          position:absolute;
          bottom:0;
          left:-5px;
        }
      }
    }
  }
  >.tags{
    overflow: auto;
    margin-bottom: 20px;
    >ul{
      display:flex;
      flex-flow: row wrap;
      >li{
        width:25vw;
        display: flex;
        flex-direction:column;
        align-items: center;
        >.icon{
          width:60px;
          height:60px;
          background: $grey;
          border-radius: 50px;
          margin:15px 10px 5px 10px;
          padding:5px;
        }

      }
    }
  }
  >.numberPad{
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
}
</style>