<template>
  <div class="wrapTag">
    <div class="tags" v-if="tagType==='-'">
      <div v-for="tag in outTags" :key="tag.tag" class="tagItem">
        <div class="tag">
          <Icon :name="tag.icon" class="icon"></Icon>
          <span class="text">{{ tag.tag }}</span>
        </div>
        <div class="delete" @click="removeTag(tag.tag)">
          <Icon name="delete" class="icon"/>
        </div>
      </div>
    </div>
    <div class="tags" v-if="tagType==='+'">
      <div v-for="tag in inTags" :key="tag.tag" class="tagItem">
        <div class="tag">
          <Icon :name="tag.icon" class="icon"></Icon>
          <span class="text">{{ tag.tag }}</span>
        </div>
        <div class="delete" @click="removeTag(tag.tag)">
          <Icon name="delete" class="icon"/>
        </div>
      </div>
    </div>
    <button @click="createTag">添加</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';


@Component
export default class tagList extends Vue {
  @Prop() readonly tagType!: string;
  tagList = window.tagList;
  get outTags(){
    return this.tagList.filter(item => item.type === '-')
  }
  get inTags (){
    return this.tagList.filter(item => item.type === '+')
  }

  removeTag(tagName: string) {
    tagListModel.remove(tagName);
  }

  createTag() {
    const tagName = window.prompt('请输入你要添加的标签名');
    const createType = this.tagType;
    if (tagName) {
      const message = tagListModel.create(tagName,createType);
      if (message === 'success') {
        window.alert('添加标签成功');
      } else if (message === 'duplicate') {
        window.alert('标签名不能重复');
      }
    } else {
      window.alert('标签不能为空');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.wrapTag {
  .tags {
    margin: 10px 5px;

    > .tagItem {
      height: 50px;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid $darkgrey;

      > .tag {
        width: 100vw;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;

        > .icon {
          width: 30px;
          height: 30px;
          border-radius: 30px;
          background: $grey;
        }

        > .text {
          font-size: 18px;
          margin-left: 10px;
        }
      }

      > .delete {
        > .icon {
          width: 30px;
          height: 30px;
          margin-top: 10px;
          color: #870000;
        }
      }
    }
  }

  > button {
    display: block;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px auto;
  }
}

</style>