"use client";

import { motion } from "framer-motion";

export default function HeroSection() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const desktopOffset = 110; 
    const mobileOffset = 80;   

    const isDesktop = window.innerWidth >= 768; 
    const offset = isDesktop ? desktopOffset : mobileOffset;

    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full text-white py-15 px-6 text-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Top Micro Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-300 font-medium tracking-wider text-sm md:text-base mb-6 uppercase"
        >
          Limited Time Free Access To Our Premium AI Workshop
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-6xl max-w-5xl mx-auto"
        >
          Build{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            High-Converting AI Funnels
          </span>{" "}
          That Turn Simple Ideas Into{" "}
          <span className="relative inline-block mt-3 md:mt-0">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 md:py-[0.1rem] rounded-xl text-white shadow-lg">
              $3,000+ Per Day
            </span>
          </span>
        </motion.h1>

        {/* Sub Headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-indigo-200 italic text-lg md:text-2xl mt-8 max-w-4xl mx-auto"
        >
          The Proven 3-Step AI System Behind 3,000+ Online Success Stories —
          Without Coding, Ads, Or Technical Skills
        </motion.p>

        {/* Secondary Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-300 text-base md:text-lg mt-4 max-w-3xl mx-auto"
        >
          Step-By-Step Online Training • AI Templates Included • Build From
          Anywhere In The World
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
        >
          <button
            onClick={() => scrollToSection("registration-form")}
            className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/40"
          >
            Join The Free Workshop
          </button>

          <button
            onClick={() => scrollToSection("proof-gallery")}
            className="backdrop-blur-lg bg-white/5 border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white/10"
          >
            Watch Preview
          </button>
        </motion.div>

      </div>
    </section>
  );
}