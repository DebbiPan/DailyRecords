<template>
  <div class="wrap">
    <div class="return">返回</div>
    <ul class="types">
      <li class="expenditure selected">支出</li>
      <li class="income">收入</li>
    </ul>
    <div class="tags">
      <ul>
        <li>餐饮</li>
        <li>购物</li>
        <li>日用</li>
        <li>交通</li>
        <li>蔬菜</li>
        <li>水果</li>
        <li>餐饮</li>
        <li>购物</li>
        <li>日用</li>
        <li>交通</li>
        <li>蔬菜</li>
        <li>水果</li>
        <li>餐饮</li>
        <li>购物</li>
        <li>日用</li>
        <li>交通</li>
        <li>蔬菜</li>
        <li>水果</li>
        <li>餐饮</li>
        <li>购物</li>
        <li>日用</li>
        <li>交通</li>
        <li>蔬菜</li>
        <li>水果</li>
        <li>餐饮</li>
        <li>购物</li>
        <li>日用</li>
        <li>交通</li>
        <li>蔬菜</li>
        <li>水果</li>
      </ul>
    </div>
    <div class="numberPad">
      <label class="padNav">
        <span class="name">备注</span>
        <input type="text">
      </label>
      <div class="output">100</div>
      <div class="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>今天</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>删除</button>
        <button>完成</button>
      </div>
    </div>
    <Layout/>
  </div>
</template>

<script lang="ts">
import Layout from '@/views/Layout.vue';

export default {
  name:'money',
  components:Layout
}
</script>
