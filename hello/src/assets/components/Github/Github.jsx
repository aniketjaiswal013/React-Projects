import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data=useLoaderData();
    // const  [data,setData]=useState([]);
     
    // useEffect(()=>{
    //        fetch('https://api.github.com/users/aniketjaiswal013')
    //        .then(response=>response.json())
    //        .then(data=>{
    //         console.log(data);
    //        setData(data);
    //        })
    // },[])


  return (
    <div className='bg-gray-700 text-orange-500 p-4 text-center text-2xl  '>Github Follower:{data.followers}
      <div className='flex'><img src={data.avatar_url} width={300} height={300} /> <h1 className='mt-4 text-white'>{data.bio}</h1></div> 
    </div>
  )
}


export const gihubInfoLoder=async ()=>{
  const response=await fetch('https://api.github.com/users/aniketjaiswal013');
  return response.json();
}
