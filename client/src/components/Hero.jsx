import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaDollarSign,
  FaCoins,
  FaPiggyBank,
  FaHandshake,
  FaChartPie,
} from "react-icons/fa";

// Currency symbols floating around
const currencies = [
  { symbol: "₹", color: "text-orange-300", x: "10%", y: "20%", delay: 0 },
  { symbol: "$", color: "text-green-300", x: "80%", y: "25%", delay: 0.1 },
  { symbol: "€", color: "text-blue-300", x: "20%", y: "75%", delay: 0.2 },
  { symbol: "£", color: "text-purple-300", x: "75%", y: "70%", delay: 0.3 },
];

// Finance icons for floating particles
const financeIcons = [
  { Icon: FaDollarSign, color: "text-yellow-400", size: 24 },
  { Icon: FaCoins, color: "text-green-400", size: 30 },
  { Icon: FaPiggyBank, color: "text-orange-400", size: 20 },
  { Icon: FaHandshake, color: "text-blue-400", size: 26 },
  { Icon: FaChartPie, color: "text-purple-400", size: 22 },
];

// Precompute finance particle positions and delays
const precomputedParticles = Array.from({ length: 8 }).map((_, i) => {
  const { Icon, color, size } = financeIcons[i % financeIcons.length];
  return {
    id: i,
    Icon,
    color,
    size,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 0.3,
  };
});

const Hero = () => {
  // Lazy-load decorative visuals 900ms after mount to improve LCP
  const [visualsReady, setVisualsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisualsReady(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 flex flex-col justify-center items-center overflow-hidden bg-gray-900 text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Core Content: render immediately for best LCP */}
      <div className="relative z-20 max-w-4xl px-10 space-y-6 md:text-left text-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-start p-4 bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full shadow-lg"
        >
          <FaChartLine className="text-4xl text-gray-900" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-yellow-400"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Smart Financial Solutions
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          Empowering{" "}
          <span className="font-semibold text-white">
            individuals & businesses
          </span>{" "}
          to grow wealth, manage risks, and secure a prosperous future.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.36 }}
        >
          <a
            href="#services"
            className="bg-orange-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </a>
          <a
            href="#contactus"
            className="border-2 border-orange-300 text-orange-300 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Lazy-loaded animated floating elements for background decorations */}
      <AnimatePresence>
        {visualsReady && (
          <>
            {/* Animated Gradient Blob */}
            <motion.div
              className="absolute top-20 left-10 w-60 h-60 bg-orange-300 rounded-full blur-xl opacity-25 z-0"
              animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
            />

            {/* Floating Currency Symbols */}
            {currencies.map((c, i) => (
              <motion.span
                key={i}
                className={`finance-particle ${c.color} ${
                  c.delay % 2 ? "text-6xl" : "text-5xl"
                } drop-shadow-lg select-none absolute`}
                style={{ left: c.x, top: c.y, willChange: "transform, opacity" }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: c.delay,
                  ease: "easeInOut",
                }}
              >
                {c.symbol}
              </motion.span>
            ))}

            {/* Finance icon particles floating */}
            {precomputedParticles.map((p) => (
              <motion.div
                key={p.id}
                className={`finance-particle ${p.color} absolute`}
                style={{
                  left: p.left,
                  top: "110%",
                  fontSize: p.size,
                  opacity: 0.35,
                  willChange: "transform, opacity",
                  pointerEvents: "none",
                  userSelect: "none",
                  filter: "drop-shadow(0 0 1px rgba(0,0,0,0.3))",
                  zIndex: 0,
                }}
                animate={{ y: [-20, -400], opacity: [0.35, 0, 0.35] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10 + Math.random() * 8,
                  delay: p.delay,
                  ease: "linear",
                }}
              >
                <p.Icon />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
