import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/models/clone';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    initialLabel: [
      {type: '-', tag: '餐饮', icon: 'dining'},
      {type: '-', tag: '果蔬', icon: 'vegetables'},
      {type: '-', tag: '日用', icon: 'daily'},
      {type: '-', tag: '交通', icon: 'traffic'},
      {type: '-', tag: '零食', icon: 'snacks'},
      {type: '-', tag: '运动', icon: 'sports'},
      {type: '-', tag: '娱乐', icon: 'recreation'},
      {type: '-', tag: '通讯', icon: 'phone'},
      {type: '-', tag: '服饰', icon: 'clothing'},
      {type: '-', tag: '美容', icon: 'face'},
      {type: '-', tag: '住房', icon: 'house'},
      {type: '-', tag: '缴费', icon: 'payment'},
      {type: '-', tag: '旅行', icon: 'travel'},
      {type: '-', tag: '医疗', icon: 'medical'},
      {type: '-', tag: '汽车', icon: 'car'},
      {type: '-', tag: '学习', icon: 'study'},
      {type: '-', tag: '快递', icon: 'fast-mail'},
      {type: '+', tag: '工资', icon: 'salary'},
      {type: '+', tag: '兼职', icon: 'concurrent-post'},
      {type: '+', tag: '红包', icon: 'red-packet'},
    ]
  },
  mutations: {
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2 = clone(record);
      record2.createAt = new Date().toISOString();
      state.recordList.push(record2);
      this.commit('saveRecord');
    },

    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      if (!state.tagList || state.tagList.length === 0) {
        for(let i=0;i<=state.initialLabel.length;i++){
          this.commit('createTag',state.initialLabel[i])
        }
      }
    },
    removeTag(state, tagName) {
      for (let i = 0; i <= state.tagList.length; i++) {
        if (state.tagList[i].tag === tagName) {
          state.tagList.splice(i, 1);
          break;
        }
      }
      this.commit('saveTags');
      window.alert('删除成功');
    },
    createTag(state, payload) {
      const tagName = payload.tag;
      console.log(tagName);
      const createType = payload.type;
      console.log(createType);
      const icon = payload.icon;
      const tags = state.tagList.map(item => item.tag);
      console.log(tags);
      if (tags.indexOf(tagName) >= 0) {
        window.alert('标签名不能重复');
        return 'duplicated';
      }
      state.tagList.push({type: createType, tag: tagName, icon});
      this.commit('saveTags');
      return 'success';

    }
  },
  actions: {},
  modules: {}
});
