import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/views/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();
window.removeTag = (tag) => {
  tagListModel.remove(tag);
};
window.createTag = (tagName,createType) => {
  if (tagName) {
    const message = tagListModel.create(tagName,createType);
    if (message === 'success') {
      window.alert('添加标签成功');
    } else if (message === 'duplicate') {
      window.alert('标签名不能重复');
    }
  } else {
    window.alert('标签不能为空');
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
