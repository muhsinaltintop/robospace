import React from 'react'

const page = ({params}) => {
  return (
    <div>Single Blog: {params.blogHeader}</div>
  )
}

export default page