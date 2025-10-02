import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import client, { urlFor } from "../sanity/sanityClient";
import { PortableText } from "@portabletext/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

// React Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reading time estimate function (unchanged)
const estimateReadingTime = (blocks) => {
  if (!blocks) return "2 min read";
  let text = "";
  blocks.forEach((block) => {
    if (block.children) block.children.forEach((child) => (text += child.text + " "));
  });
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
};

// PortableText components customization (unchanged)
const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-5 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 text-gray-800">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-800">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 md:mb-6 leading-relaxed text-gray-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 md:my-6 text-gray-600">
        {children}
      </blockquote>
    ),
  },
};

// Custom slider arrows (unchanged)
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 -translate-y-1/2 bg-gradient-to-br from-gray-300 to-gray-400 cursor-pointer text-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out z-10 focus:outline-none"
    aria-label="Next Slide"
  >
    <FaArrowRight className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 -translate-y-1/2 bg-gradient-to-br from-gray-300 to-gray-400 text-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out z-10 focus:outline-none"
    aria-label="Previous Slide"
  >
    <FaArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
  </button>
);

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [otherPosts, setOtherPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && _id == $id][0]{
          title,
          body,
          mainImage,
          publishedAt,
          author->{name, image},
          categories[]->{title}
        }`,
        { id }
      )
      .then(setBlog)
      .catch(console.error);

    client
      .fetch(
        `*[_type == "post" && _id != $id] | order(publishedAt desc) [0...6]{
          _id,
          title,
          mainImage,
          publishedAt
        }`,
        { id }
      )
      .then(setOtherPosts)
      .catch(console.error);
  }, [id]);

  // Memoize slider settings for best performance
  const sliderSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  }), []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen mt-10 bg-white py-6 px-2 md:px-6 lg:max-w-4xl w-full mx-auto">

      <Helmet>
        <title>{blog.title} | Finx7</title>
        <meta
          name="description"
          content={`Read about ${blog.title} by Finx7. Learn and stay updated on financial insights and expert advice.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.finx7.com/blog/${id}`} />
      </Helmet>

      {/* Title */}
      <h1 className="text-2xl md:text-5xl mt-8 md:mt-14 font-extrabold text-gray-900 mb-3 md:mb-4 leading-tight text-center px-2">
        {blog.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-4 md:mb-5">
        <div className="flex items-center gap-2">
          {blog.author && blog.author.image && (
            <img
              src={urlFor(blog.author.image).url()}
              alt={blog.author.name}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200"
              loading="lazy"
            />
          )}
          <span className="font-medium text-gray-800 text-sm md:text-base">{blog.author?.name}</span>
        </div>

        <div className="flex flex-wrap gap-2 items-center text-xs md:text-sm text-gray-500">
          {blog.publishedAt && (
            <span className="flex items-center gap-1">
              <FaCalendarAlt />
              {new Date(blog.publishedAt).toLocaleDateString()}
            </span>
          )}
          <span>·</span>
          <span>{estimateReadingTime(blog.body)}</span>
          {blog.categories && blog.categories.length > 0 && (
            <>
              <span>·</span>
              {blog.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold ml-1"
                >
                  {category.title}
                </span>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Main Image */}
      {blog.mainImage && (
        <div className="rounded-lg overflow-hidden mb-6 mt-4 md:mb-10 md:mt-6">
          <img
            src={urlFor(blog.mainImage).url()}
            alt={blog.title}
            className="w-full h-52 md:h-96 object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Article body */}
      <section className="prose prose-sm md:prose-lg max-w-none text-gray-900 mx-auto mb-8 md:mb-10 px-2">
        <PortableText value={blog.body} components={portableTextComponents} />
      </section>

      {/* More articles carousel */}
      <aside className="mt-10 md:mt-16">
        <div className="w-full mx-auto bg-gray-50 rounded-lg shadow-lg p-4 md:p-6 relative">
          <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b border-gray-200 pb-1 md:pb-2">
            More Articles
          </h2>
          {otherPosts.length > 0 ? (
            <Slider {...sliderSettings}>
              {otherPosts.map((post) => (
                <div key={post._id} className="px-1 md:px-3">
                  <Link
                    to={`/blog/${post._id}`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    {post.mainImage && (
                      <img
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        className="w-full h-32 md:h-48 object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="p-2 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold line-clamp-2 text-gray-900 hover:text-blue-600 mb-1 md:mb-2">
                        {post.title}
                      </h3>
                      {post.publishedAt && (
                        <p className="text-xs text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-gray-400">No other articles found.</p>
          )}
        </div>
      </aside>

      {/* Social share icons */}
      <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 border-t pt-4 md:pt-6 justify-center">
        <a
          href="#"
          className="bg-blue-600 text-white hover:bg-blue-700 p-3 md:p-4 rounded-md transition"
          aria-label="Share on Facebook"
        >
          <FaFacebookF className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="#"
          className="bg-sky-500 text-white hover:bg-sky-600 p-3 md:p-4 rounded-md transition"
          aria-label="Share on Twitter"
        >
          <FaTwitter className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="#"
          className="bg-blue-800 text-white hover:bg-blue-900 p-3 md:p-4 rounded-md transition"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="#"
          className="bg-pink-600 text-white hover:bg-pink-700 p-3 md:p-4 rounded-md transition"
          aria-label="Share on Instagram"
        >
          <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
