type RootState = {
  recordList:RecordItem[]
  tagList:Tag[]
  currentTag?:Tag
}

type RecordItem = {
  type: string
  tags: Tag
  notes: string
  amount: number
  createAt?: string
}

type Tag = {
  type:string
  tag:string
  icon:string
}

