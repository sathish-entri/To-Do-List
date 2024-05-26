import React from 'react'
import Edit from './Edit'
import Delete from './Delete'
import Complete from './Complete'

export default function Icons({value,setvalue,values,item,setitem,editer,setediter}) {
  return (
    <div className='icons'>
         <Complete value={values} realval={value} setvalue={setvalue}/>
        <Edit value={value} edits={values} setvalue={setvalue} item={item} setitem={setitem} editer={editer} setediter={setediter}/>
        <Delete value={value} deletes={values} setvalue={setvalue}/>
    </div>
  )
}
