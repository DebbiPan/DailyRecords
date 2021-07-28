<template>
  <div class="wrap">
    <ul class="types">
      <li class="expenditure selected">支出</li>
      <li class="income">收入</li>
    </ul>
    <div class="tags">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Layout/>
  </div>
</template>

<script lang="ts">
import Layout from '@/views/Layout.vue';

export default {
  name:"Statistics",
  components:Layout
}
</script>

