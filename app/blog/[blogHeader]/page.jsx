import { getSingleBlog } from '@/app/_utils/GlobalApi'
import React from 'react'

const page = async ({params}) => {
  const blogPost = await getSingleBlog(params.blogHeader)
  return (
    <div>
      {/* {console.log("bP:", blogPost)} */}
    </div>
  )
}

export default page