<template>
  <div class="tags">
    <ul :class="{moveLeft:showDelete}">
      <li class="show">
        <span @click="chooseDelete" class="iconWrap">
          <Icon name="decrease" class="icon"></Icon>
        </span>
        <span class="text">买菜</span>
      </li>
      <li class="delete">删除</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class tagList extends Vue{
  showDelete = false
  chooseDelete(){
    this.showDelete = true;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags{
  >ul{
    height:50px;
    width:100vw;
    display:flex;
    flex-direction: row;
    overflow: hidden;
    &.moveLeft{
      transition: transform 500ms ease;
      transform:translate(-100px,0);
    }
    >.show{
      width:100vw;
      border-bottom:1px solid #333;
      padding:5px;
      display:flex;
      flex-direction: row;
      align-items: center;
      flex-shrink: 0;
      >.iconWrap{
        >.icon{
          width:15vw;
          height:40px;
        }
      }
      > .text{
        font-size:18px;
      }
    }
    >.delete{
      width:15vw;
      height:50px;
      background:red;
      color:#fff;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>