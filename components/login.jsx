import { signIn } from 'next-auth/react'
import React from 'react'
import { BsTwitter } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

const Login = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='h-screen'>
        <img className='w-full h-full bg-center bg-cover bg-no-repeat' src="https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
      </div>
      <div className='grid place-items-center'>
        <div className='flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer' onClick={() => signIn('google')}>
          <FcGoogle className='text-[30px]' />
          SignIn with Google
        </div>
      </div>
    </div>
  )
}

export default Login