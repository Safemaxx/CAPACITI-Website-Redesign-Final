
import React from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
    <div className="overflow-hidden">
      <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-contain bg-transparent group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6">
      <div className="mb-3">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <a href="#" className="font-semibold text-blue-600 hover:text-blue-800">Read More &rarr;</a>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-[#FA8072] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">From Our Blog</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mt-4">
            Stay updated with the latest industry trends, career advice, and CAPACITI news.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => <BlogPostCard key={post.title} post={post} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
