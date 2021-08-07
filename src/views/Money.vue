<template>
  <div class="wrap">
    <Type :data-type.sync="record.type"/>
    <Tags class="tags" :out-tags.sync="outTags" @update:tags="onTagsChange"/>
    <NumberPad @update:value="onValueChange"
               @submit="saveRecord"
               @update:amount="onAmountChange"/>
    {{record}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from "@/components/Money/Type.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  type:string
  tags:string[]
  notes:string
  amount:number
  createAt:Date
}



@Component({
  components:{Type,Tags,NumberPad}
})
export default class Money extends Vue{
  outTags=['餐饮', '日用', '交通', '买菜', '零食', '娱乐', '通讯', '服饰', '美容', '住房', '缴费', '旅行', '医疗', '汽车', '学习', '快递'];
  record:Record = {
    type : '-',
    tags:[],
    notes:'',
    amount:0
  }
  recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList')) || '[]';
  onTagsChange(selected:string[]){
    this.record.tags = selected
  }
  onValueChange(value:string){``
    this.record.notes = value
  }
  onAmountChange(value:number){
    this.record.amount = value
  }
  saveRecord(){
    const deepClone = JSON.parse(JSON.stringify(this.record))
    this.recordList.push(deepClone)
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
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