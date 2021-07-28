<template>
  <div class="wrap">
    <Nav/>
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
import Nav from "@/components/Money/Nav.vue";

export default {
  name:'money',
  components:{Icon,Nav}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrap{
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