<template>
  <div class="nav">
    <div class="title">类别设置</div>
    <ul class="types">
      <li class="expenditure"
          @click="changeType('-')"
        :class="{selected: tagType==='-'}"
      >
        支出
      </li>
      <li class="income"
          :class="{selected: tagType==='+'}"
          @click="changeType('+')">
        收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class LabelNav extends Vue {
  @Prop() readonly  tagType!:string
  changeType(value:string){
    if(this.tagType!=='+'&&this.tagType!=='-'){
      throw new Error('出差了')
    }else{
      this.$emit('update:value',value)
    }

  }

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