<template>
  <Layout class="wrapper">
    <StaType class="type"/>
    <RecordList  class="record"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/views/Layout.vue';
import {Component} from 'vue-property-decorator';
import StaType from '@/components/statistics/StaType.vue';
import RecordList from '@/components/statistics/RecordList.vue';

@Component({
  components: {Layout, StaType,RecordList}
})
export default class Statistics extends Vue{

}

</script>

<style lang="scss" scoped>
.wrapper{
  position:relative;
  .type{
    z-index: 3;
    position:fixed;
    top:0;
    width:100vw;
  }
  .record{
    z-index: 2;
    position:absolute;
    top:120px;
    width:100vw;
    overflow: auto;
  }
}
</style>

