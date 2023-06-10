import React from 'react'
import { connect } from 'react-redux'

const Categories = (props) => {
  const {filterItems,tags}=props
  //console.log(tags)
  return (
    <div className='btn-container'>
        {tags.map((tag,index)=>{
            const currTag=tag
            return(
                <button key={index} className='filter-btn' onClick={()=>filterItems(tag,currTag)}> {tag} </button>
            )
        })}
    </div>
  )
}

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    tags:state.tags,
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    filterItems:(tag,currTag)=>dispatch({type:'ADD_FILTER',payload:{tag,currTag}})
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Categories)