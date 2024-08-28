import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
              alt="robospace-logo"
              src={
                "/robo-space-logo.png"
              }
              width={220}
              height={58}
            />
  )
}

export default Logo