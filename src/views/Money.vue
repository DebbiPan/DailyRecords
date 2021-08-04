<template>
  <div class="wrap">
    <Type/>
    <Tags/>
    <NumberPad/>
  </div>
</template>

<script lang="ts">
import Type from "@/components/Money/Type.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

export default {
  name:'money',
  components:{Type,Tags,NumberPad}
}
</script>

<style lang="scss" scoped>

</style>