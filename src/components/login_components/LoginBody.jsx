import React from 'react'
import LoginForm from './LoginForm'
import LoginBanner from './LoginBanner'

function LoginBody() {
  return (
    <div className='flex items-center justify-center w-screen'>
      <div className='w-[40%]'>
        <LoginForm></LoginForm>
      </div>
      <div className='w-[40%]'>
        <LoginBanner></LoginBanner>
      </div>
    </div>
  )
}

export default LoginBody