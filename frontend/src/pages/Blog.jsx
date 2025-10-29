import React from "react";
import { Link } from "react-router-dom";
import blogs from "../lib/blogData";

export default function Blog() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-[#0089FF] font-semibold mb-4 text-lg">
            Our Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News & Blogs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in tax planning, business finance, and more.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <svg className="mr-2 text-[#0089FF] w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {blog.date}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex-grow">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.desc}
                </p>
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-flex items-center text-[#0089FF] font-semibold hover:underline mt-auto"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0089FF] to-[#005FCC] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Professional Tax Advice?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Our experts are here to help you navigate complex tax situations and maximize your savings.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-white text-[#0089FF] font-bold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}