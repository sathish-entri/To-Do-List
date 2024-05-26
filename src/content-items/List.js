import React from 'react'
import Edit from './Edit'
import Delete from './Delete'


export default function List({value,realval,setvalue}) {
  // console.log(value)
function letterhide(value){
 const working= realval.map((val)=>{
  return val.id==value.id?{list:value.list,id:value.id,work:!value.work}:val
 })
 setvalue(working)

  }
 
  return (
    <div className='listparagaraph'>
     
   <p style={{textDecoration:value.work?"line-through":"none",color:value.work?"grey":"black"}} onClick={()=>letterhide(value)}>{value.list}</p>
 
    </div>
  )
}
