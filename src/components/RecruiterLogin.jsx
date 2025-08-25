import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {
    const [state,setState]=React.useState('Login')
    const [name,setName]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [email,setEmail]=React.useState('')

    const [image,setImage]=React.useState(false)
    const [isTextDataSubmitted,setIsTextDataSubmitted]=React.useState(false)
  return (
    <div>
        <form action="">
            <h1>Recruiter {state}</h1>
            <p>Welcome back! Please Sign in to cotinue</p>
            <>
            <div>
                <img src={assets.person_icon} alt="" />
                <input onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Company Name'  required />
            </div>
             <div>
                <img src={assets.email_icon} alt="" />
                <input onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='Email Id'  required />
            </div>
             <div>
                <img src={assets.lock_icon} alt="" />
                <input onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='Password'  required />
            </div>
            </>
        </form>
    </div>
  )
}

export default RecruiterLogin