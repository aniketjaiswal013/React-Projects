import { useState } from 'react'
function ColorChanger() {
    let [color,setColor]=useState("olive");
  
    return (
      <>
       <div className='w-full h-screen'
       style={{backgroundColor:color}} >
        <div className='fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-3 '>
         <div className='flex flex-wrap rounded justify-center gap-3 bg-white px-3 py-2  rounded-3xl text-cyan-50'>
          <button onClick={()=>{setColor("red")}}
          className='bg-red-700 rounded-3xl px-3 py-2 text-white'>RED</button>
          <button 
          onClick={()=>{setColor("green")}}
          className='bg-green-700 rounded-3xl px-3 py-2 text-white'>GREEN</button>
          <button  onClick={()=>{setColor("blue")}}
          className='bg-blue-700 rounded-3xl px-3 py-2 text-white'>BLUE</button>
         </div>
          </div>
       </div>
       
  
      </>
    )
  }
  
  export default ColorChanger
  