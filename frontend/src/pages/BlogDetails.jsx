import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../lib/blogData";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog not found</h2>
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full hover:opacity-90 transition duration-300"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-[#0089FF] font-medium hover:underline mb-8 transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        
        <article className="bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Blog Header with Category Badge */}
          <header className="px-8 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-block bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                {blog.category}
              </span>
              <div className="flex items-center text-gray-500">
                <svg className="mr-2 text-[#0089FF] w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{blog.date}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
          </header>

          {/* Blog Image with Shadow */}
          <div className="px-8 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="px-8 pb-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {blog.content}
              </p>
              
              {/* Additional Content Sections */}
              <div className="border-t border-b border-gray-200 py-8 my-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#0089FF] rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Plan ahead to maximize tax benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#0089FF] rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Keep detailed records of all expenses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#0089FF] rounded-full flex items-center justify-center mt-1 mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700">Consult with tax professionals for complex situations</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                Remember that tax laws can be complex and vary by jurisdiction. It's always best to consult with a qualified tax professional who can provide advice tailored to your specific situation. The information in this article is for general informational purposes only and should not be considered as professional tax advice.
              </p>
            </div>
          </div>
        </article>
        
        {/* Related Articles Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs
              .filter(relatedBlog => relatedBlog.id !== blog.id)
              .slice(0, 2)
              .map(relatedBlog => (
                <Link 
                  to={`/blog/${relatedBlog.id}`} 
                  key={relatedBlog.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
                >
                  <div className="flex-grow">
                    <div className="relative">
                      <img
                        src={relatedBlog.image}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                        {relatedBlog.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedBlog.desc}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <span className="text-[#0089FF] font-medium hover:underline">
                      Read More
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}