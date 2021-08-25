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
import clone from '@/models/clone';

@Component
export default class tagList extends Vue {
  @Prop() readonly tagType!: string;

  get tagList() {
    return this.$store.state.tagList;
  }
  get outTags() {
    return this.tagList.filter(item => item.type === '-');
  }
  get inTags() {
    return this.tagList.filter(item => item.type === '+');
  }

  created() {
    this.$store.commit('fetchTags');
  }

  removeTag(tagName:string) {
    this.$store.commit('removeTag', tagName);
  }

  createTag() {
    const tagName = window.prompt('请输入你要添加的标签名');
    const createType = clone(this.tagType);
    const icon = 'addIcon'
    this.$store.commit('createTag', {tag: tagName, type: createType,icon});
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