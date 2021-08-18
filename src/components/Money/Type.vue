<template>
  <nav>
    <router-link to="/"  class="back">
      <Icon name="back" class="icon"></Icon>
    </router-link>

    <ul class="types">
      <li :class="dataType === '-' && 'selected'"
          @click="selectType('-')">
        支出
      </li>
      <li :class="dataType === '+' && 'selected'"
          @click="selectType('+')">
        收入
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator';


@Component
export default class Type extends Vue{
  @Prop() readonly dataType!:string;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type:string){
    if(type !== '-' && type !== '+'){
      throw new Error ('type is unknow');
    }else{
      this.$emit('update:dataType',type);
    }
  }

  @Watch('dataType')
  dataTypeChange(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav{
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
    left:5px;
    >.icon{
      width:30px;
      height:30px;
    }
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
</style>