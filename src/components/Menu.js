import React from 'react'
import { connect } from 'react-redux'

const Mail = (props) => {
    
  const {mailItems,openMail,currTag}=props
  //console.log('items:',menuItems)
  return (
    <table id='customers'>
        {mailItems.map((menuItem)=>{
            const {id,userId,tag,subject,body}=menuItem
            return (
                <tr style={{cursor:'pointer',margin:'100px'}} key={id} onClick={()=>openMail(body,currTag)}>
                    <div >
                        {/* <h4>{userId}</h4> */}
                        <h4 >{subject}</h4>
                    </div>
                    <div className='underlineMail'></div>
                </tr>
            )
        })}
    </table>
  )
}

const mapStateToProps=(state)=>{
    //console.log('state',state.menuItems)
    return {
        mailItems:state.mailItems,
        currTag:state.currTag
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        openMail:(body,currTag)=>dispatch({type:'DISPLAY_MAIL_CONTENT',payload:{body,currTag}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mail)