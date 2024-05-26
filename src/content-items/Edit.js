import React from 'react'
import { FaEdit } from "react-icons/fa";

export default function Edit({value,setvalue,edits,item,setitem,editer,setediter}) {
function editbutton(edits){
setitem(edits.list)
const findedit=value.find((value)=>{
  return value.id==edits.id
})
setediter(findedit)
console.log(findedit)
console.log(edits)
}
  return (
    <div >
        {/* <button onClick={()=>editbutton(edits)}>Edit</button> */}
        <FaEdit className='editer' onClick={()=>editbutton(edits)}/>
    </div>
  )
}
