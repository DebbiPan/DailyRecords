type RecordItem = {
  type: string
  tags: string[]
  notes: string
  amount: number
  createAt?: Date
}

type Tag = {
  type:string
  tag:string
  icon:string
}

interface Window{
  tagList : Tag[]
}