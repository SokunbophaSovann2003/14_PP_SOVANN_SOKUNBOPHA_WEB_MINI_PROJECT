import React from 'react'
import RegisterForm from './RegisterForm'
import RegisterBanner from './RegisterBanner'

function RegisterBody() {
  return (
    <div className='flex items-center justify-center w-screen gap-8 px-20 h-screen'>
        <RegisterForm></RegisterForm>
        <RegisterBanner></RegisterBanner>
    </div>
  )
}

export default RegisterBody