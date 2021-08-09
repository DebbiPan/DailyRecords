<template>
  <div class="tags">
    <ul v-for="tag in tags" :key="tag">
      <li class="show">
        <span @click="chooseDelete" class="iconWrap">
          <Icon name="decrease" class="icon"></Icon>
        </span>
        <span class="text">{{tag}}</span>
      </li>
      <li class="delete" v-if="showDelete" @click="hideDelete">删除</li>
    </ul>
    <button @click="createTag" >添加</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel';


@Component
export default class tagList extends Vue{
  tags = tagListModel.data

  showDelete = false
  chooseDelete(){
    const show = this.showDelete
    if(!show){
      this.showDelete = true
    }else if(show){
      this .showDelete = false
    }
    console.log(show);
  }
  hideDelete(){
    this.showDelete = false;
  }
  createTag(){
    const tagName = window.prompt('请输入你要添加的标签名')
    if(tagName){
      const message = tagListModel.create(tagName)
      if(message === 'success'){
        window.alert('添加标签成功')
      }else if(message === 'duplicate'){
        window.alert('标签名不能重复')
      }
    }else{
      window.alert('标签不能为空')
    }
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

    >.show{
      width:100vw;
      border-bottom:1px solid #333;
      padding:5px;
      display:flex;
      flex-direction: row;
      align-items: center;
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
      width:20vw;
      height:50px;
      font-size:18px;
      background:red;
      color:#fff;
      line-height: 50px;
      text-align: center;
    }
  }
  > button{
    display:block;
    padding:10px 20px;
    border-radius: 10px;
    margin:10px auto;

  }
}
</style>