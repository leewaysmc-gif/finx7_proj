import React, { useEffect, useState, Suspense, lazy } from "react";
import ScrollToTop from "../components/ScrollToTop";

const Hero = lazy(() => import("../components/Hero"));
const Services = lazy(() => import("../components/Services"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // mark when React has mounted
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
  <div className="w-12 h-12 border-4 border-gray-900 border-dashed rounded-full animate-spin"></div>
</div>

        }
      >
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
