<template>
  <div class="wrap">
    <Nav/>
    <Tags/>
    <NumberPad/>
  </div>
</template>

<script lang="ts">
import Nav from "@/components/Money/Nav.vue";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

export default {
  name:'money',
  components:{Nav,Tags,NumberPad}
}
</script>

<style lang="scss" scoped>

</style>