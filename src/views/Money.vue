<template>
  <div class="wrap">
    <Type :data-type.sync="record.type"/>
    <Tags class="tags"
          :tag-type="record.type"
          :all-tags.sync="Tags"
          @update:tags="onTagsChange"/>
    <NumberPad @update:value="onValueChange"
               @submit="createRecord"
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

const recordList = recordListModel.fetch();
@Component({
  components: {Type, Tags, NumberPad}
})
export default class Money extends Vue {
  Tags = window.tagList;//设定初始tags的值，页面加载完毕之后只获取了Tags
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

  createRecord() {
    recordListModel.create(this.record)//将新创建的记账事件存进recordList
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