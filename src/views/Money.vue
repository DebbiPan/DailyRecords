<template>
  <div class="wrap">
    <Type :data-type.sync="record.type" class="type"/>
    <Tags class="tags"
          :tag-type="record.type"
          :all-tags.sync="tagList"
          @update:tags="onTagsChange"/>
    <NumberPad @update:value="onValueChange"
               class="numberPad"
               @submit="createRecord"
               @update:amount="onAmountChange"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Type from '@/components/Money/Type.vue';
import Tags from '@/components/Money/Tags.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Type, Tags, NumberPad},
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    type: '-',
    tags: {},
    notes: '',
    amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
  }

  // eslint-disable-next-line no-undef
  onTagsChange(selected: Tag) {
    this.record.tags = selected;
  }

  onValueChange(value: string) {
    this.record.notes = value;
  }

  onAmountChange(value: number) {
    this.record.amount = value;
  }

  createRecord() {
    const tag = this.record.tags.tag;
    if (tag) {
      this.$store.commit('createRecord', this.record);//将新创建的记账事件存进recordList
    } else if (!tag) {
      window.alert('请选择标签!');
    }

  }
}

</script>

<style lang="scss" scoped>
.wrap {
  position: relative;

  .type {
    position: fixed;
    top: 0;
  }

  .tags {
    overflow: auto;
    margin-top: 50px;
    margin-bottom: 300px;
  }

  .numberPad {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
</style>