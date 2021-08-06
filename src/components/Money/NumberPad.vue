<template>
  <div class="numberPad">
    <div class="padNav">
      <label class="note">
        <span class="name">备注:</span>
        <input type="text" placeholder="点击写备注..." v-model="value">
      </label>
      <div class="output">{{output}}</div>
    </div>
    <div class="buttons">
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="remove" class="delete">删除</button>
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="ok" class="ok">确定</button>
      <button class="date">
        <Icon name="date" class="dateIcon"></Icon>
        今天
      </button>
      <button @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from "@/components/Icon.vue";
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component({
  components:{Icon}
})
export default class NumberPad extends Vue{
  value = '';

  @Watch('value')
  onValueChange(value:string){
    this.$emit('update:value',value)
  }
  @Prop() readonly amount!:number
  output = this.amount.toString()
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inputContent(event:MouseEvent){
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    if(this.output.length === 16){return;}
    if(this.output === '0'){
      if('0123456789'.indexOf(input) >= 0){
        this.output = input;
      }else{
        this.output += input;
      }
      return;
    }
    if(this.output.indexOf('.') >= 0 && input ==='.'){
      return;
    }
    this.output += input;
  }
  remove(){
    if(this.output.length === 1){
      this.output = '0';
    }else{
      this.output = this.output.slice(0,this.output.length-1)
    }
  }
  clear(){
    this.output = '0'
  }
  ok(){
    this.$emit('update:amount',parseFloat(this.output))
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad{
  background: $grey;
  font-size:18px;
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
      &.ok{
        height:120px;
        float: right;
      }
      .dateIcon{
        width:20px;
        height:20px;
      }
      &:active{
        background:#C7C7C7;
      }
    }
  }
}
</style>