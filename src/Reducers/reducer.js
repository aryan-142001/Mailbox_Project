let items=[]
const getEmails=async()=>{
  const tempData=await fetch('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123')
  const emails=await tempData.json()
  
  items=emails
}


await getEmails()

console.log('items',items)
const allTags=['all',...new Set(items.map((item)=>{
  return item.tag
})
)]



export const initialState={
  mailItems:items,
  tags:allTags,
  showModal:false,
  modalContent:'',
  prevTag:'all',
  currTag:'all'
}





export const reducer=(state,action)=>{
  if(action.type==='ADD_FILTER'){
 
    const {tag,currTag}=action.payload
    if(tag==='all'){
      return {...state,currTag:currTag,modalContent:'',showModal:false,mailItems:items}
    }
    const newItems=items.filter((item)=>item.tag===tag)
    return {...state,modalContent:'',currTag:currTag,showModal:false,mailItems:newItems}
  }

  if(action.type==='DISPLAY_MAIL_CONTENT'){
    
    const {body,currTag}=action.payload
    //console.log('called',body)
    return {...state,prevTag:currTag,mailItems:[],showModal:true,modalContent:body}
  }

  if(action.type==='CLOSE_MODAL'){
    const {prevTag}=action.payload
    if(prevTag==='all'){
      return {...state,currTag:prevTag,prevTag:'',modalContent:'',showModal:false,mailItems:items}
    }
    const newItems=items.filter((item)=>item.tag===prevTag)
    return {...state,modalContent:'',currTag:prevTag,showModal:false,mailItems:newItems}
    
  }

  return state
}

