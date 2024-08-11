import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function PasswordGenerator() {
  const [length,setLength]=useState(8);
  const [noAllow,setnoAllow]=useState(false);
  const [chAllow,setchAllow]=useState(false);
  const [password,setPassword]=useState("");

  let passwordRef=useRef(null);

  const passwordCreator=useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(noAllow)str+="0123456789";
      if(chAllow)str+="!@#$%^&*()_+=-?/"
      for (let index = 1; index <=length; index++) {
        const element =Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(element);
      }
      setPassword(pass);

  },[length,noAllow,chAllow,setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
         passwordCreator();
  },[length,noAllow,chAllow,passwordCreator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-orange-500 text-2xl text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
             value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
           defaultChecked={noAllow}
          id="numberInput"
          onChange={() => {
              setnoAllow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
               defaultChecked={chAllow}
              id="characterInput"
              onChange={() => {
                  setchAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
</>
  )
}

