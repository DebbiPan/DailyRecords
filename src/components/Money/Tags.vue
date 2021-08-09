<template>
  <div class="tags">
    <ul>
      <li v-for="outTag in outTags" :key="outTag"
          @click="select(outTag)" class="item">
        <Icon name="dining" class="icon"
              :class="{selected : selectedTag.indexOf(outTag) >= 0}"/>
        <span class="tag">{{ outTag }}</span>
      </li>
      <router-link to="/labels"  class="item">
        <Icon name="add"></Icon>
        <span>设置</span>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop() readonly outTags!:string;
  selectedTag:string[] = [];
  select(tag:string){
    const selected = this.selectedTag;
    if(selected.length === 0){
      selected.push(tag);
    }else if(selected.length === 1){
      selected.splice(0,1);
      selected.push(tag);
    }
    this.$emit('update:tags',selected)
  }
  addTag(){
    const tagName = window.prompt('请输入你要添加的标签名')
    if(tagName === ''){
      window.alert('标签名不能为空')
    }else{
      this.$emit('update:outTags',[...this.outTags,tagName])
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags{
  margin-bottom: 1px;
  >ul{
    display:flex;
    flex-flow: row wrap;
    >.item{
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
        padding:10px;
        &.selected{
          background: $pink;
        }
      }
    }
  }
}
</style>