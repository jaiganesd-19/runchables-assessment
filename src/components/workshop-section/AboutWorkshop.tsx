"use client";

import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

const funnels = [
{ title: "Webinar Funnel", icon: "bi-camera-video" },
{ title: "Sales Funnel", icon: "bi-currency-dollar" },
{ title: "Consultation Funnel", icon: "bi-chat-dots" },
{ title: "Local Business Marketing", icon: "bi-geo-alt" },
{ title: "Services Funnel", icon: "bi-briefcase" },
{ title: "Finance & Investing", icon: "bi-graph-up-arrow" },
{ title: "Health & Fitness", icon: "bi-heart-pulse" },
{ title: "Course Funnel", icon: "bi-mortarboard" },
{ title: "Freelancing Funnel", icon: "bi-laptop" },
{ title: "Product Funnel", icon: "bi-bag" },
{ title: "E-Com Funnel", icon: "bi-cart" },
{ title: "Affiliate Marketing", icon: "bi-people" },
{ title: "Agency Funnel", icon: "bi-building" },
{ title: "Digital Product / SaaS", icon: "bi-cloud" },
];

export default function AboutWorkshopSection() {
return (
<section className="py-8 px-6 text-white">

    <div className="max-w-6xl mx-auto relative">

    {/* Glass Container */}
    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">

        {/* Heading */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14"
        >
        <h2 className="text-3xl font-extrabold md:text-4xl font-bold">
            About The Workshop
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            You will discover easy & non-techy ways of building
            <span className="text-orange-400 font-semibold"> profitable funnels </span>
            using a beginner-friendly no-code setup plus a
            step-by-step business blueprint to make them profitable.
        </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {funnels.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition duration-300 hover:border-orange-500/40 hover:bg-white/10"
            >
            {/* Icon Circle */}
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-black shadow-lg group-hover:scale-110 transition duration-300">
                <i className={`bi ${item.icon} text-lg`}></i>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-200 group-hover:text-white transition">
                {item.title}
            </p>
            </motion.div>
        ))}

        </div>

    </div>
    </div>
</section>
);
}