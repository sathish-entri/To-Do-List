import React from 'react'

export default function Count({value}) {
  
  //workfinishing counting
  let workcount=value.map((values)=>{
    var count=0;
     return values.work==true ?count+=1:count;
  })
  let finalworkcount=workcount.reduce((acc,cur)=>{
    return acc+cur
  },0)
  //
 //balance work
 let balancecount=value.map((values)=>{
  var count=0;
   return values.work==false ?count+=1:count;
})
let finalbalancecount=balancecount.reduce((acc,cur)=>{
  return acc+cur
},0)

  return (
    <div className='count'>
      
        <h5>Work : {value.length}</h5>
        <h5>Finished : {finalworkcount}</h5>
        <h5>Balance :{finalbalancecount} </h5>
        
    </div>
  )
}
