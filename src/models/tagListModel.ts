const localStorageKeyName = 'tagList';

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  save: () => void
  create: (name: string, createType: string) => "success" | "duplicate"
  remove: (name: string) => void
}



const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  create(tagName:string,createType:string) {
    const tags = this.data.map(item => item.tag)
    if (tags.indexOf(tagName) >= 0) {
      return 'duplicated';
    } else {
      this.data.push({type:createType,tag:tagName,icon:"addIcon"});
      this.save();
      return 'success';
    }
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  remove(name) {
    for (let i = 0; i <= this.data.length; i++) {
      if (this.data[i].tag === name) {
        this.data.splice(i, 1);
        break;
      }
    }
    this.save();
    window.alert('删除成功');
  }
};

export default tagListModel;