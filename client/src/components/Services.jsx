import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaBuilding, FaRocket, FaUsersCog, FaCalculator } from "react-icons/fa";

const serviceCategoriesStatic = [
  {
    title: "Corporate Finance & Restructuring",
    icon: <FaBuilding className="text-4xl text-white" />,
    color: "from-yellow-400 to-amber-500",
    items: [
      "Financial Modelling Services",
      "Debt, PE, and M&A Advisory",
      "Capital Raising",
      "Project & Corporate Funding",
      "Treasury Services",
      "Investments Services",
      "Trade Finance",
      "Feasibility Study",
      "Financial Structuring and Restructuring",
    ],
  },
  {
    title: "Startup Assistance",
    icon: <FaRocket className="text-4xl text-white" />,
    color: "from-green-400 to-emerald-500",
    items: [
      "Registration",
      "Fund Raising",
      "Due Diligence",
      "Shareholders’ Agreement Advisory",
      "Investor Management",
      "Business Validation",
      "Financial Strategies",
      "Financial Workflows in ERP Creations",
      "ESOP Structuring",
      "Regulatory & Compliance Management",
      "Visas, Licenses, and Permits",
    ],
  },
  {
    title: "Payroll Management",
    icon: <FaUsersCog className="text-4xl text-white" />,
    color: "from-blue-400 to-indigo-500",
    items: [
      "Third Party Payroll",
      "Labour Law Compliances Management",
      "Labour Law Registrations",
      "Staff Self-Service Dashboards",
      "Employee Record, Leave and Attendance",
      "Employee Tax Declaration and Computations",
      "Payroll Design, Process and KPIs",
      "Gratuity and Superannuation Trust Management",
      "Bank Account Opening",
    ],
  },
  {
    title: "Finance Management",
    icon: <FaCalculator className="text-4xl text-white" />,
    color: "from-pink-400 to-red-500",
    items: [
      "Book-Keeping",
      "MIS Reporting",
      "Tax Compliances Support",
      "Audit Handling",
      "Due Diligence Support",
    ],
  },
];

const ServiceCategoryCard = React.memo(({ cat, index }) => (
  <motion.div
    key={index}
    className="group relative"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ scale: 1.03, y: -5 }}
  >
    {/* Glow Border */}
    <div
      className={`absolute -inset-1 bg-gradient-to-r ${cat.color} rounded-3xl blur opacity-25 group-hover:opacity-70 transition`}
    />

    <div className="relative bg-gray-800 border border-gray-700 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col h-full">
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${cat.color} shadow-lg`}
        >
          {cat.icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white">{cat.title}</h3>
      </div>

      {/* Sub-services */}
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-base text-left">
        {cat.items.map((item, idx) => (
          <li key={idx} className="hover:text-orange-300 transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
));

const Services = () => {
  const [ready, setReady] = useState(false);

  // Memoize static service categories to avoid recreation every render
  const serviceCategories = useMemo(() => serviceCategoriesStatic, []);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-br from-gray-800 to-black overflow-hidden"
    >
      <Helmet>
        <title>Our Services - Finx7 | Comprehensive Financial Expertise</title>
        <meta
          name="description"
          content="Finx7 offers comprehensive financial services from corporate finance and restructuring to startups assistance, payroll management, and finance management."
        />
        <meta
          name="keywords"
          content="corporate finance, startup assistance, payroll management, finance management, financial modelling, funding, tax compliance, audit handling"
        />
        <link rel="canonical" href="https://www.finx7.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Lazy Background Glow */}
      {ready && (
        <>
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-pulse" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-300 via-orange-300 to-orange-300 bg-clip-text drop-shadow-lg">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            From corporations to startups, payroll to finance management – we provide end-to-end financial expertise.
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {serviceCategories.map((cat, i) => (
            <ServiceCategoryCard key={i} cat={cat} index={i} />
          ))}
        </div>

        {/* CTA Section - You can add content here if needed */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Services;
