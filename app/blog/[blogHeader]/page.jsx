import Image from 'next/image';
import blogData from '@/public/_mocks_/blogEntries.json'; // JSON'u doğrudan import et

export async function generateMetadata({params}){

  const blogHeader = params.blogHeader
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(' ');

  return {
    title: blogHeader,
  }
  

}

// BlogPage Component
export default function BlogPage({ params }) {
  const blog = getBlogData(params.blogHeader);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <article className="prose lg:prose-xl dark:prose-dark">
          <header className="mb-8">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 mb-4">
              {blog.title}
            </h1>
            <div className="mt-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1280}
                height={720}
                className="rounded-md"
              />
            </div>
          </header>

          <section className="text-gray-800 dark:text-gray-200">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="mt-4">
                {paragraph}
              </p>
            ))}

            <h2 className="text-3xl font-semibold mt-8 mb-4">Key Points</h2>
            <ul className="list-disc ml-5 mt-4">
              {blog.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}

// Helper function to fetch blog data from imported JSON
function getBlogData(slug) {
  return blogData.blogs.find((blog) => blog.slug === slug);
}

// Define dynamic paths
export async function generateStaticParams() {
  return blogData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
