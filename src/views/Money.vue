<template>
  <div class="wrap">
    <Type :data-type.sync="record.type"/>
    <Tags class="tags"
          :tag-type="record.type"
          :all-tags.sync="tagList"
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
import {Component} from 'vue-property-decorator';

@Component({
  components: {Type, Tags, NumberPad},
  computed:{
    recordList(){
      return this.$store.state.recordList
    },
    tagList(){
      return this.$store.state.tagList
    }
  }
})
export default class Money extends Vue {
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    type: '-',
    tags: [],
    notes: '',
    amount: 0
  };

  created(){
    this.$store.commit('fetchRecords')
    this.$store.commit('fetchTags')
  }

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
    this.$store.commit('createRecord',this.record)//将新创建的记账事件存进recordList
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