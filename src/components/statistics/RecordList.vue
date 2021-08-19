<template>
  <div class="wrapper">
    <div class="day" v-for="(group,index) in groupedList" :key="index">
      <div class="dayTitle">
        <div class="dateRecord">
          <span class="date">{{ group.title }}</span>
          <span class="week">星期三</span>
        </div>
        <div class="total">
          <div class="out">
            <span class="text">收入：</span>
            <span class="number">0.00</span>
          </div>
          <div class="in">
            <span class="text">支出：</span>
            <span class="number">0.00</span>
          </div>
        </div>
      </div>
      <div class="count" v-for="(item,index) in group.items" :key="index">
        <Icon name="car" class="icon"/>
        <div class="text">{{item.tags}}</div>
        <div class="notes">{{item.notes}}</div>
        <div class="amount" v-if="item.type === '-'">-{{item.amount}}</div>
        <div class="amount" v-if="item.type === '+'">{{item.amount}}</div>
      </div>
    </div>
    <div class="block"></div>
    {{ groupedList }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import dayjs from 'dayjs';
import clone from '@/models/clone';

@Component
export default class RecordList extends Vue {
  created() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }
  // tagString(tags: Tag[]) {
  //   return tags.length === 0 ? '无' : tags.map(t => t.name).join(',');
  // }

  get groupedList() {
    const {recordList} = this;

    const newList = clone(recordList)
        .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());

    if (newList.length === 0) {return [];}
    type Result = { title: string, total?: number, items: RecordList[] }[] //使用数组变成有序的
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.wrapper {
  .day {

    .dayTitle {
      font-size: 16px;
      color: $darkgrey;
      padding: 5px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid $darkgrey;

      .dateRecord {
        .date {
          margin: 0 5px;
        }
      }

      .total {
        display: flex;
        flex-direction: row;

        > .in {
          margin: 0 5px;
        }
      }
    }

    > .count {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 5px;;

      .icon {
        width: 24px;
        height: 24px;
        margin: 5px;
      }
      .notes{
        font-size: 14px;
        margin-left:10px;
        color:$darkgrey;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
      }
      .amount {
        flex-grow: 1;
        text-align: right;
      }
    }
  }

  > .block {
    height: 5vh;
  }
}
</style>