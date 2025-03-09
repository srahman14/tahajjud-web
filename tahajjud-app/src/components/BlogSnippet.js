// BlogSnippet.js
import React from 'react';
import { Link } from 'react-router-dom';
import { blogData  } from '../blogData';

const BlogSnippet = () => {
    const maxIndex = blogData.length
    const recentPost = blogData[blogData.length - 1]
    return (
        <div className="bg-gray-100 p-8 rounded-lg flex flex-col w-full max-w-md mx-auto">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
            {recentPost.title} (Snippet)
        </h1>
        <p className="font-semibold text-blue-700 mt-2 mb-8">
            {recentPost.excerpt}
        </p>
        <p className='font-bold text-xl'>Tags:</p>
        <div className="flex flex-wrap items-center">
          {recentPost.tags.map((tag, index) => (
            <span key={index} className="bg-gray-300 p-2 font-semibold hover:bg-gray-400 rounded-lg mr-2 mt-2">{tag} </span>
          ))}
        </div>

        <Link to={`/blog/${maxIndex}`} className="text-blue-500 mt-4 mb-4">Read more</Link>
        </div>
    );
};

export default BlogSnippet;
