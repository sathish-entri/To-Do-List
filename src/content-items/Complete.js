import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function Complete({value,realval,setvalue}) {
    function letterhide(value){
        const working= realval.map((val)=>{
         return val.id==value.id?{list:value.list,id:value.id,work:!value.work}:val
        })
        setvalue(working)
       localStorage.setItem("totos",JSON.stringify(working))
         }
  return (
    <div>
<FaCheckCircle className='editer' style={{background:value.work?"white":"none"}} onClick={()=>letterhide(value)} />

    </div>
  )
}
