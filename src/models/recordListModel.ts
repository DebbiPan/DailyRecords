import clone from './clone'

const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],
  create(record:RecordItem){
    const record2 = clone(record)
    record2.createAt = new Date();
    this.data.push(record2);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
export default recordListModel ;