<template>
  <div class="wrap">
    <Type/>
    <Tags/>
    <NumberPad/>
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
}
</script>

<style lang="scss" scoped>

</style>