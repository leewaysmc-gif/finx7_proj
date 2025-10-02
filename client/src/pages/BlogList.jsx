import React, { useEffect, useState, useMemo, useCallback } from "react";
import client from "../sanity/sanityClient";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet-async";

const BLOGS_PER_PAGE = 6;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
        } | order(publishedAt desc)`
      )
      .then(setBlogs)
      .catch(console.error);
  }, []);

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  // Memoize displayed blogs for current page
  const displayedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    return blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  }, [blogs, currentPage]);

  const goToPage = useCallback(
    (page) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages]
  );

  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Blog List - Finx7 | Latest Financial Insights</title>
        <meta
          name="description"
          content="Explore the latest blogs on financial solutions, business growth, investment advice, and more at Finx7."
        />
        <meta
          name="keywords"
          content="financial blogs, investment advice, business growth articles, Finx7 blog"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.finx7.com/blogs" />
      </Helmet>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-orange-300 mb-12 mt-16 text-center">
        Latest Blogs
      </h2>

      {/* Blog cards grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="transform transition duration-300 hover:scale-105"
            >
              <BlogCard blog={blog} />
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No blog posts found.
          </p>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-3 flex-wrap">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 cursor-pointer rounded-md font-semibold ${
              currentPage === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-orange-300 hover:bg-orange-200"
            } transition`}
            aria-label="Previous page"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 cursor-pointer py-2 rounded-md font-semibold transition ${
                  page === currentPage
                    ? "bg-gray-500 text-white"
                    : "bg-orange-300 hover:bg-orange-200"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 cursor-pointer py-2 rounded-md font-semibold ${
              currentPage === totalPages
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-orange-300 hover:bg-orange-200"
            } transition`}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
