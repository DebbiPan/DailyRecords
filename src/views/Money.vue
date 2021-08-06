<template>
  <div class="wrap">
    <Type/>
    <Tags class="tags"/>
    <NumberPad class="number"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from "@/components/Money/Type.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import {Component} from 'vue-property-decorator';

@Component({
  components:{Type,Tags,NumberPad}
})
export default class Money extends Vue{
  outTags=[
    '餐饮', '日用', '交通', '买菜', '零食', '娱乐', '通讯', '服饰', '美容', '住房', '缴费', '旅行', '医疗', '汽车', '学习', '快递']
}

</script>

<style lang="scss" scoped>
.wrap{
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  .tags{
    flex:1;
    overflow: auto;
  }
}
</style>