<template>
  <div class="wrap">
    <Layout>
      <LabelNav class="nav"/>
      <TagList class="tags"/>
    </layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Layout from '@/views/Layout.vue';
import {Component} from 'vue-property-decorator';
import LabelNav from '@/components/Labels/LabelNav.vue';
import TagList from '@/components/Labels/TagList.vue';

@Component({
  components:{Layout,LabelNav,TagList}
})
export default class Labels extends Vue{

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.wrap{
  position: relative;
  .nav{
    position: fixed;
    top:0;
    width:100vw;
    height: 90px;
  }
  .tags{
    margin-top:90px;
    overflow: auto;
  }
}
</style>