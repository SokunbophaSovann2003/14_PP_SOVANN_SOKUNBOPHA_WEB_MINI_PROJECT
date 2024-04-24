import React from 'react'
import Image from 'next/image'

function RegisterBanner() {
  return (
    <div className='items-center justify-center flex'>
      <Image src='/assets/images/register.svg' width={400} height={100} alt="" srcset="" />
    </div>
  )
}

export default RegisterBanner