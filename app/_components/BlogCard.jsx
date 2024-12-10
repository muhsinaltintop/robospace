// components/BlogCard.js
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg overflow-hidden shadow-black items-center text-center">
      <Link href={`/blog/${blog.attributes.slug}`}>
      <Image src={blog?.attributes?.featuredImage.data === null ? "/empty-image.jpg" : `https://panel.gesrobospace.com${blog?.attributes?.featuredImage.data[0].attributes.url}` } width={400} height={300} alt="robospace" className="items-center m-auto"/>
      <h2 className="my-2 font-bold w-2/3 mx-auto">{blog.attributes.title}</h2>
      <p className="w-3/4 mx-auto">{blog.attributes.featuredText}</p>
        <div className="text-blue-800 underline">Devamını Oku...</div>
      </Link>
    </div>
  );
};

export default BlogCard;
