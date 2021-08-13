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
  removeTag : (tag:string)=>void
  createTag : (tagName:string,createType:string) => void
}