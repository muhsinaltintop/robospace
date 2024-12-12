import BlocksRendererWrapper from '@/app/_components/BlogsRendererWrapper'
import { getSingleBlog } from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import React from 'react'

const page = async ({ params }) => {
  const blogPost = await getSingleBlog(params.blogHeader)
  return (
    <article className="prose lg:prose-xl text-justify">
      <h1 className="font-bold text-2xl text-left">{blogPost[0].attributes.title}</h1>
      <div className="grid grid-cols-2 gap-4 my-10">
        {blogPost[0].attributes.images.data.map((image, index) => (
          <div key={index}>
            <Image
              src={`https://panel.gesrobospace.com${image.attributes.url}`}
              width={400}
              height={600}
              alt="solar panel yikama"
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      <BlocksRendererWrapper content={blogPost[0].attributes.content} />
    </article>
  )
}

export default page
