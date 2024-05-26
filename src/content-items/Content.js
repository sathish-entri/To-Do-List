import React from 'react'
import List from './List'
import Edit from './Edit'
import Delete from './Delete'
import Complete from './Complete'
import Icons from './Icons'


export default function Content({value, setvalue,item, setitem,editer,setediter}) {
 
  return (
    <>
    <ul >
         {value.map((values)=>{
      return  <li className='list' style={{listStyleType:"none",display:"grid"}} key={values.id}>
        <List  value={values} realval={value} setvalue={setvalue}/>
        <Icons  value={value} values={values} setvalue={setvalue} item={item} setitem={setitem} editer={editer} setediter={setediter} />
          {/* <Complete value={values} deletes={values} setvalue={setvalue}/>
        <Edit value={value} edits={values} setvalue={setvalue} item={item} setitem={setitem} editer={editer} setediter={setediter}/>
        <Delete value={value} deletes={values} setvalue={setvalue}/> */}
       </li>
        
        })}
    </ul>
    </>
  )
}
