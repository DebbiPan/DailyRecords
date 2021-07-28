<template>
  <div class="tags">
    <ul>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">餐饮</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">购物</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">日用</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">交通</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">蔬菜</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">水果</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">餐饮</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">购物</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">日用</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">交通</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">蔬菜</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">水果</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">餐饮</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">购物</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">日用</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">交通</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">蔬菜</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">水果</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">餐饮</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">购物</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">日用</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">交通</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">蔬菜</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">水果</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">餐饮</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">购物</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">日用</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">交通</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">蔬菜</span>
      </li>
      <li>
        <Icon name="dining" class="icon"/>
        <span class="tag">水果</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from "@/components/Icon.vue";
export default{
  name:'Tags',
  components:{Icon}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags{
  overflow: auto;
  margin-bottom: 20px;
  >ul{
    display:flex;
    flex-flow: row wrap;
    >li{
      width:25vw;
      display: flex;
      flex-direction:column;
      align-items: center;
      >.icon{
        width:60px;
        height:60px;
        background: $grey;
        border-radius: 50px;
        margin:15px 10px 5px 10px;
        padding:5px;
      }
    }
  }
}
</style>