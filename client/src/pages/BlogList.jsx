import React, { useEffect, useState } from "react";
import client from "../sanity/sanityClient";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false); // toggle for all blogs

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          _id,
          title,
          excerpt,
          categories[]->{title},
          publishedAt,
          mainImage,
          author->{name, image},
          body
        }`
      )
      .then(setBlogs)
      .catch(console.error);
  }, []);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 6);

  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-orange-300 mb-12 mt-16 text-center">Latest Blogs</h2>

      {/* Blog cards grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <div key={blog._id} className="transform transition duration-300 hover:scale-105">
              <BlogCard blog={blog} />
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">No blog posts found.</p>
        )}
      </div>

      {/* Read More / Show Less button */}
      {blogs.length > 6 && (
        <div className="mt-10 text-center">
          <button
          
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-orange-300  text-white cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-orange-200 transition"
          >
            {showAll ? "Show Less" : "Read More Blogs"}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
