import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let uname = useRef("")
  let pword = useRef("")
  let loginFunction = async() => {
    let resp = await fetch('http://127.0.0.1:5000/ask', {
      'method': "POST",
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        username: uname.current.value,
        password: pword.current.value
      })
    })
    resp = await resp.json()
    if(resp.result){
      console.log(resp.result)
    }
    else{
      alert(resp.message)
    }
  }
  return (
    <div>
      <div className='grad1'></div>
      <div className='loginElements'>
        <span className='text-shadow text-5xl my-12 px-2 drop-shadow-2xl md:filtern-none'>Login</span>
        <span className=' text-3xl w-[380px] text-left font-semibold'>Username:</span>        
        <input className='text-2xl my-8 px-2 py-1 underline w-[380px] bg-indigo-900/[0.5] border-l border-b' ref={uname} type="text" placeholder='Enter Username'/>
        <span className=' text-3xl w-[380px] text-left font-semibold'>Password:</span>  
        <input className='text-2xl my-8 px-2 py-1 underline w-[380px] bg-indigo-900/[0.5] border-l border-b' ref={pword} type="password" placeholder='Enter Password'/>
        <button className='text-2xl my-8 px-2 py-1 font-bold w-32 bg-sky-900' onClick={loginFunction} >Submit</button>  
      </div>
    </div>
  )
}

export default App
