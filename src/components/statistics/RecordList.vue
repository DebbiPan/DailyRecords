<template>
  <div class="wrapper">
    <div class="day" v-for="group in groupedList" :key="group.title">
      <div class="dayTitle">
        <div class="dateRecord">
          <span class="date">{{ group.title }}</span>
          <span class="week">{{formatWeek(group.title)}}</span>
        </div>
        <div class="total">
          <div class="out">
            <span class="text">收入：</span>
            <span class="number">{{group.total.in}}</span>
          </div>
          <div class="in">
            <span class="text">支出：</span>
            <span class="number">{{group.total.out}}</span>
          </div>
        </div>
      </div>
      <div class="count" v-for="(item,index) in group.items" :key="index">
        <Icon name="car" class="icon"/>
        <div class="text">{{item.tags.tag}}</div>
        <div class="notes">{{ item.notes }}</div>
        <div class="amount" v-if="item.type === '-'">-{{ item.amount }}</div>
        <div class="amount" v-if="item.type === '+'">{{ item.amount }}</div>
      </div>
    </div>
    <div class="block"></div>
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
  formatWeek(string:string){
    const week = dayjs(string).format('d')
    switch (week){
      case '1':
        return '星期一';
      case '2':
        return '星期二';
      case '3':
        return '星期三';
      case '4':
        return '星期四';
      case '5':
        return '星期五';
      case '6':
        return '星期六';
      case '0':
        return '星期天';
    }
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get groupedList() {
    const {recordList} = this;

    const newList = clone(recordList)
        .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());//排序，将数组按照时间从小到大排序

    type Total = { all: number, in: number, out: number };
    type Result = { title: string, total?: Total, items: RecordList[] }[]

    if (newList.length === 0) {return [];}
    const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});

      }
    }
    for (let i = 0; i < result.length; i++) {
      let inAmount = 0;
      let outAmount = 0;
      let allAmount = 0;
      const current = result[i].items;
      if (current) {
        current.filter(i => i.type === '+').map(i =>
            inAmount += i.amount);
        current.filter(i => i.type === '-').map(i =>
            outAmount -= i.amount);
      } else {
        return [];
      }
      allAmount = inAmount + outAmount;
      result[i].total = {all: allAmount, in: inAmount, out: outAmount};
    }
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

      .notes {
        font-size: 14px;
        margin-left: 10px;
        color: $darkgrey;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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