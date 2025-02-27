import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../blogData';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div className="text-center text-red-500">Blog post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen mt-8">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500 text-sm">{post.date}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 font-semibold" dangerouslySetInnerHTML={{ __html: post.content }} />
      <p>Sayed</p>
      <Link to="/blog" className="text-blue-500 mt-4 block">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
