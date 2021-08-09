const localStorageKeyName = 'tagList';

type TagListModel = {
  data: string[]
  fetch: () =>  string[]
  save: () => void
  create : (name:string) => 'success' | 'duplicate'
}



const tagListModel : TagListModel = {
  data : [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  create(name) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    }else{
      this.data.push(name);
      this.save();
      return 'success';
    }

  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;