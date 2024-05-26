import React from 'react'
import {v4 as uuid} from "uuid"

export default function Heater({item, setitem, setvalue, value,editer,setediter}) {
  function changeedit(setvalue,values,editer){
    const changing =value.map((valu=>{
      return valu.id===editer.id ?{list:item,id:editer.id,work:false}:valu;
    // return( 
    //    if(valu.id==editer.id){
    //     setvalue([...valu,{list:item,id:editer.id}])
    //     console.log(valu)
    //   })
    }))
    setvalue(changing)
    setitem("")
    setediter("")
  }
  const formsubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("totos",JSON.stringify(value))
  }
  const inputvalue=(e)=>{
    setitem(e.target.value)
  }
    function additems(){
      if(!editer ){
        if(!editer && item){
          setvalue([...value,{list:item,id:uuid(),work:false}])
          setitem("")
        }
        
      }
  else{
    changeedit(setvalue,value,editer)
  }
// setvalue([...value,{list:item,id:uuid()}])
  }
   return (
    <>
          <form onSubmit={(e)=>formsubmit(e)} className='heater'>
              {/* <label for="do-list" >list scearing</label> */}
              <input type='text' value={item} placeholder='Enter Your Works' id='do-list' onChange={(e)=>inputvalue(e)}  />
              <button onClick={additems}>ADD</button>
          </form>

    </>
  )
}