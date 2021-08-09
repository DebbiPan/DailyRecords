<template>
  <div class="wrap">
    <Type :data-type.sync="record.type"/>
    <Tags class="tags" :out-tags.sync="outTags" @update:tags="onTagsChange"/>
    <NumberPad @update:value="onValueChange"
               @submit="saveRecord"
               @update:amount="onAmountChange"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel'
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagsList = tagListModel.fetch();
@Component({
  components: {Type, Tags, NumberPad}
})
export default class Money extends Vue {
  outTags = tagsList;//设定初始tags的值，页面加载完毕之后只获取了Tags
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    type: '-',
    tags: [],
    notes: '',
    amount: 0
  };
  recordList = recordList//将获取的历史数据给recordList，此时历史数据放在recordList中

  onTagsChange(selected: string[]) {
    this.record.tags = selected;
  }

  onValueChange(value: string) {
    this.record.notes = value;
  }

  onAmountChange(value: number) {
    this.record.amount = value;
  }

  saveRecord() {
    const record2 = recordListModel.clone(this.record)
    record2.createAt = new Date();
    this.recordList.push(record2);//将新创建的记账事件存进recordList
  }
  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList)//当发现recordList发生改变时调用save方法将recordList存进localStorage
  }
}

</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tags {
    flex: 1;
    overflow: auto;
  }
}
</style>