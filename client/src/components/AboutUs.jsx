import React, { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const [visualsReady, setVisualsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisualsReady(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-br from-black via-gray-800 to-gray-900 text-gray-100 overflow-hidden min-h-screen"
      aria-labelledby="aboutus-heading"
    >
      <Helmet>
        <title>About Us - Finx7 | Smart Financial Solutions</title>
        <meta
          name="description"
          content="Learn about Finx7, a passionate team delivering top-quality financial solutions that empower businesses to thrive in a digital-first world."
        />
        <meta
          name="keywords"
          content="Finx7, about us, financial solutions, business growth, digital solutions, scalable solutions, user-friendly finance"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.finx7.com/aboutus" />
      </Helmet>

      {visualsReady && (
        <>
          <div className="absolute top-10 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" />
        </>
      )}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 to-gray-900 rounded-3xl blur opacity-75" />
            <img
              src={logo}
              alt="Finx7 About Us Logo"
              className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition duration-700 ease-out max-w-md w-full"
              loading="lazy"
              width={384}
              height={384}
            />
          </div>
        </div>

        <div className="text-left space-y-6">
          <h2
            id="aboutus-heading"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-orange-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg"
          >
            About Us
          </h2>

          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            We are a passionate team dedicated to delivering{" "}
            <span className="font-bold text-orange-300 bg-orange-300/10 px-2 py-1 rounded">
              top-quality solutions
            </span>{" "}
            that empower businesses to thrive in a digital-first world. Our
            mission is to create innovative, user-friendly, and scalable
            solutions tailored to our clients' needs.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            With{" "}
            <span className="font-bold text-orange-300 text-xl">
              10+ years of expertise
            </span>
            , we combine creativity and technology to bring ideas to life,
            ensuring seamless user experiences and long-lasting impact.
          </p>

          <div className="flex gap-12 justify-start mb-8 flex-wrap">
            <div className="text-left">
              <h3 className="text-4xl font-black text-orange-300 mb-2 drop-shadow-md">
                200+
              </h3>
              <p className="text-gray-400 font-medium">Projects Delivered</p>
            </div>
            <div className="text-left">
              <h3 className="text-4xl font-black text-orange-300 mb-2 drop-shadow-md">
                50+
              </h3>
              <p className="text-gray-400 font-medium">Happy Clients</p>
            </div>
          </div>

          <Link
            to="/blogs"
            className="inline-block px-10 py-4 bg-orange-300 text-gray-900 font-bold text-lg rounded-2xl shadow-xl hover:shadow-orange-300/50 hover:scale-105 transform transition duration-300 border-2 border-orange-300/30 text-center"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
