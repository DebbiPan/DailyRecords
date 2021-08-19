import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/models/clone'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recordList : [] as RecordItem[],
    tagList : [] as Tag[]
  },
  mutations: {
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.tagList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state,record:RecordItem){
      const record2 = clone(record)
      record2.createAt = new Date().toISOString();
      state.recordList.push(record2);
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    fetchTags(state){
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    removeTag(state,tagName) {
      for (let i = 0; i <= state.tagList.length; i++) {
        if (state.tagList[i].tag === tagName) {
          state.tagList.splice(i, 1);
          break;
        }
      }
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
      window.alert('删除成功');
    },
    createTag (state, payload) {
      const tagName = payload.name;
      const createType = payload.type;
      if (tagName) {
        const tags = state.tagList.map(item => item.tag)
        if (tags.indexOf(tagName) >= 0) {
          window.alert('标签名不能重复');
        } else {
          console.log(createType)
          state.tagList.push({type:createType,tag:tagName,icon:"addIcon"});
          window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
          window.alert('添加标签成功');
        }
      }else{
        window.alert('标签不能为空');
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
