import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export default function Delete({value,setvalue,deletes}) {
    function deletebutton(values){
const deleteitem = value.filter((value)=>{
    return  (value.id!==values.id)
  })
setvalue(deleteitem)
localStorage.setItem("totos",JSON.stringify(deleteitem))
    }
  return (
    <div>
        {/* <button onClick={()=>deletebutton(deletes)}>Delete</button> */}
        <FaTrashAlt className='editer' onClick={()=>deletebutton(deletes)} />
    </div>
  )
}
