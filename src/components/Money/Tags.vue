<template>
  <div class="tags">
    <ul v-if="tagType === '-'">
      <li v-for="tag in outTags" :key="tag.tag"
          @click="select(tag)" class="item">
        <Icon :name="tag.icon" class="icon"
              :class="{selected : selectedName === tag.tag}"/>
        <span class="tag">{{ tag.tag }}</span>
      </li>
      <router-link to="/labels"  class="item">
        <Icon name="setup"></Icon>
        <span>设置</span>
      </router-link>
    </ul>
    <ul v-if="tagType === '+'">
      <li v-for="tag in inTags" :key="tag.tag"
          @click="select(tag)" class="item">
        <Icon :name="tag.icon" class="icon"
              :class="{selected : selectedName === tag.tag}"/>
        <span class="tag">{{ tag.tag }}</span>
      </li>
      <router-link to="/labels"  class="item">
        <Icon name="setup"></Icon>
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
  // eslint-disable-next-line no-undef
  @Prop() readonly allTags!:Tag[];
  @Prop() readonly tagType!:string;
  outTags = this.allTags.filter(item => item.type ==='-');
  inTags = this.allTags.filter(item => item.type === '+')
  // eslint-disable-next-line no-undef
  selectedTag:Tag = {};//选中的标签决定是否高亮
  get selectedName (){
    return this.selectedTag.tag
  }

  // eslint-disable-next-line no-undef
  select(tag:Tag){
    this.selectedTag = tag
    this.$emit('update:tags',this.selectedTag)
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