import React from 'react'
import { connect } from 'react-redux'
import {AiOutlineCloseCircle,AiFillCloseCircle} from 'react-icons/ai'
const MailContent = (props) => {
  const {body,closeModal,showModal,prevTag}=props
  return (
    <div>
      {showModal ? (
      <div className='mailContent'>
        <AiFillCloseCircle style={{cursor:'pointer',float:'right'}} onClick={()=>closeModal(prevTag)}/>
        <div className='title'>
          <h2 style={{fontSize:'2rem'}}>Mail Contents</h2>
          <div className='underline'></div>
        </div>
        
        <div style={{paddingTop:'10px'}}>{body}</div>
      </div>)
      :
      (<></>)
    }
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        prevTag:state.prevTag,
        showModal:state.showModal,
        body:state.modalContent
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    closeModal:(prevTag)=>dispatch({type:'CLOSE_MODAL',payload:{prevTag}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MailContent)