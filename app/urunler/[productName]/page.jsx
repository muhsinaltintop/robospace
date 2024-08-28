import React from 'react'

const page = ({params}) => {
  return (
    <div>Product Details for {params.productName.split('-')
        .map(word => word.toUpperCase())
        .join(' ')}</div>
  )
}

export default page