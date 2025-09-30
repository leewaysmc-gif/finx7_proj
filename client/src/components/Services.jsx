import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPiggyBank, FaChartLine, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Wealth Management",
    icon: <FaPiggyBank className="text-5xl text-white mb-6" />,
    desc: "Tailored financial strategies to help you grow, preserve, and transfer your wealth efficiently.",
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Investment Advisory",
    icon: <FaChartLine className="text-5xl text-white mb-6" />,
    desc: "Expert guidance on stocks, bonds, and diversified portfolios to maximize returns while managing risks.",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Risk & Insurance Planning",
    icon: <FaShieldAlt className="text-5xl text-white mb-6" />,
    desc: "Comprehensive coverage and risk management solutions to protect your financial future.",
    color: "from-blue-400 to-indigo-500",
  },
];

const Services = () => {
  const [visualsReady, setVisualsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisualsReady(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-br from-gray-800 to-black min-h-screen overflow-hidden"
    >
      {/* Lazy-loaded Background Glows */}
      {visualsReady && (
        <>
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </>
      )}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-left md:text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-300 via-orange-300 to-orange-300 bg-clip-text pb-2 mb-6 drop-shadow-lg">
            Managing Finance
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed md:mx-auto">
            Budgets, goals, expenses – all in one spot! Link accounts, crush chaos, and own your financial game.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}
              ></div>

              <div className="relative bg-gray-800 border border-gray-700 rounded-3xl p-10 shadow-2xl flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 flex pt-5 mb-5 items-center justify-center rounded-full bg-gradient-to-r ${service.color} shadow-xl relative overflow-hidden`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  <div className="relative rounded-2xl z-10">{service.icon}</div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-orange-300 transition-colors duration-300 text-left">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow text-left">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-left md:text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="cursor-pointer relative bg-gradient-to-r bg-orange-300 text-gray-900 font-bold px-12 py-4 rounded-2xl text-xl shadow-xl overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            <span className="relative z-10 flex items-center gap-2">
              Learn More{" "}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ➜
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { number: "99%", label: "Client Satisfaction" },
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-left md:text-center">
              <div className="text-3xl font-black text-orange-300 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
