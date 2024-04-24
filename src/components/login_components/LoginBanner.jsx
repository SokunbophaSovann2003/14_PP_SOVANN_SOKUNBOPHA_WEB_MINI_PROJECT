import React from 'react'
import Image from 'next/image'

function LoginBanner() {
  return (
    <div className='items-center justify-center flex'>
      <Image src='/assets/images/login.svg' width={400} height={100} alt="" srcset="" />
    </div>
  )
}

export default LoginBanner