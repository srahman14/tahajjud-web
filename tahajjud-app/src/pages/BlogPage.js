import React, { useState } from "react";
import { blogData } from "../blogData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogData.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="bg-blue-500 p-4 sm:p-6 md:p-12 lg:p-18 w-full min-h-screen flex flex-col">
      <div className="bg-gray-100 p-8 rounded-lg flex-1 flex flex-col mt-20 mb-40 w-full max-w-full mx-auto">
        <div className="blog-page">
          <h1 className="text-2xl font-bold mb-4 text-blue-600 tracking-tighter">
            Blog Page
          </h1>

          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 rounded-lg shadow-md mb-6"
            >
              <h2 className="text-xl font-semibold">
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-2 max-w-md">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-500 mt-3 block hover:text-blue-700"
              >
                Read More →
              </Link>
            </div>
          ))}

          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
