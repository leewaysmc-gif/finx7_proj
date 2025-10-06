import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../sanity/sanityClient";

const BlogCard = React.memo(({ blog }) => (
  <Link
    to={`/blog/${blog._id}`}
    className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
  >
    {/* Blog Image */}
    {blog.mainImage && (
      <div className="relative h-36 sm:h-44 overflow-hidden">
        <img
          src={urlFor(blog.mainImage).url()}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
    )}

    {/* Blog Content */}
    <div className="p-3 sm:p-4 flex flex-col flex-1">
      {/* Categories */}
      {blog.categories?.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-1">
          {blog.categories.map((cat, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded-full"
            >
              {cat.title}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold  text-black text-sm sm:text-base line-clamp-1  mb-1">
        {blog.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-300 text-xs sm:text-sm line-clamp-1 flex-grow">
        {blog.excerpt}
      </p>

      {/* Author & Date */}
      <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-400 mt-2">
        {blog.author && (
          <span className="flex items-center gap-1 sm:gap-2">
            {blog.author.image && (
              <img
                src={urlFor(blog.author.image).url()}
                alt={blog.author.name}
                loading="lazy"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-700"
              />
            )}
            <span>{blog.author.name}</span>
          </span>
        )}
        {blog.publishedAt && (
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
        )}
      </div>

      {/* Read More */}
      <span className="mt-1 text-black font-medium text-sm sm:text-base">
        Read More →
      </span>
    </div>
  </Link>
));

export default BlogCard;
