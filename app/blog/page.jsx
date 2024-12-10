import Image from 'next/image';
import React from 'react'
import { getAllBlogs } from '../_utils/GlobalApi';
import BlogCard from '../_components/BlogCard';

export const metadata  = {
  title: "Blog",
  description: "Güneş Paneli Temizleme Robotları Hakkında Merak Ettikleriniz",
  keywords: ['Güneş Paneli Temizleme Robotu Nedir?', 'Güneş Paneli Yıkama Makinası Nasıl Çalışır?'],
};

const Page = async () => {
    const allBlogs = await getAllBlogs()
  return (
    
          <div>
            {console.log("aB:", allBlogs)}
            <h1 className='text-center text-xl font-bold'>Blog Yazıları...</h1>
            <div className="grid grid-cols-3 gap-2 p-2">
              {allBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
    
  )
}

export default Page