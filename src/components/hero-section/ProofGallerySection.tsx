"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause, Search } from "lucide-react";

const captions = [
  "₹5 Crores in 3 Months",
  "₹17 Lakhs in Short Time",
  "₹5 to 7 Lakhs/Month",
  "₹19 Crores in 2 Years",
  "1,40,000/- in a day",
  "Revenue 1.01 Crores",
  "Done 3 CR in 2 years",
  "₹30 Lakhs in 2.5 Months",
  "₹22600 in 30 days",
  "30 Lakhs last 2.5 yrs",
  "₹4,58,329 ",
  "$40k USD in a month",
  "1.7Lakhs in 4 days",
  "1 Cr ($125K)",
  "100K Milestone in 60 days",
  "Revenue of 90L 60 thousand",
  "Happy Earning",
  "International Client for $6000",
  "A deal of $2500 closed",
  "$1200 closed SMM Deal",
  "$1,683 per day",
  "₹10L+ in 3 months",
  "100K Deal Closed",
  "₹Gradually Reaching 3 Crore",
  "$1700 from 1 client",
  "₹47L from real estate client",
  "Digital Marketing Deal of $5000",
  "₹88K in 2 Days",
  "Signed 2 Clients in 1 week",
  "₹11L+ Sales",
];

// 2️⃣ Then create images array
const images = Array.from({ length: 30 }, (_, i) => ({
  src: `/image/proofs/${i + 1}.png`,
  caption: captions[i] || "Captain",
}));
export default function ProofGallerySection() {
const [selected, setSelected] = useState<number | null>(null);
const [autoPlay, setAutoPlay] = useState(false);

// Auto slideshow
useEffect(() => {
if (!autoPlay || selected === null) return;

const interval = setInterval(() => {
    setSelected((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % images.length;
    });
}, 2500);

return () => clearInterval(interval);
}, [autoPlay, selected]);

return (
<section className="relative py-15 px-4 md:px-10 overflow-hidden" id="proof-gallery">

    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px]-translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_70%)] blur-3xl"
    />
    </div>

    {/* Section Header */}
    <div className="text-center max-w-4xl mx-auto">
    <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-bold-100 text-white leading-snug">
        Past{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Results Of People
        </span> Who Have Gone Through This{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Training
        </span>
    </motion.h2>

    <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-400"
    >
        36+ Verified Success Stories • Real Screenshots • Real Outcomes
    </motion.p>
    </div>

    {/* Gallery Grid */}
    <div className="mt-16 columns-2 sm:columns-3 lg:columns-4 gap-6 max-w-7xl mx-auto space-y-6">
    {images.map((img, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="relative group cursor-pointer rounded-xl border border-white/10 p-2 bg-zinc-900"
        onClick={() => setSelected(index)}
        >
        <img
        src={img.src}
        alt={img.caption}
        className="w-full h-auto object-contain bg-black transform group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-semibold tracking-wide">
        {img.caption}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <Search className="text-white" size={28} />
        </div>
        </motion.div>
    ))}
    </div>

    {/* LIGHTBOX MODAL */}
    <AnimatePresence>
    {selected !== null && (
        <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >

        {/* Close */}
        <button
            onClick={() => {
            setSelected(null);
            setAutoPlay(false);
            }}
            className="absolute top-6 right-6 text-white hover:text-amber-400"
        >
            <X size={32} />
        </button>

        {/* Prev */}
        <button
            onClick={() =>
            setSelected((selected - 1 + images.length) % images.length)
            }
            className="absolute left-6 text-white hover:text-blue-400"
        >
            <ChevronLeft size={40} />
        </button>

        {/* Image */}
        <motion.img
        key={images[selected].src}
        src={images[selected].src}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.4 }}
        className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl shadow-[0_0_60px_rgba(255,200,0,0.3)] "
        />

        {/* Modal Caption
        <div className="mt-6 text-white text-lg font-semibold text-center">
        {images[selected].caption}
        </div> */}


        {/* Next */}
        <button
            onClick={() =>
            setSelected((selected + 1) % images.length)
            }
            className="absolute right-6 text-white hover:text-pink-400"
        >
            <ChevronRight size={40} />
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-8 flex items-center gap-6 text-white">
            <span>
            {selected + 1} / {images.length}
            </span>

            <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="hover:text-amber-400 transition"
            >
            {autoPlay ? <Pause size={30} /> : <Play size={30} />}
            </button>
        </div>

        </motion.div>
    )}
    </AnimatePresence>
{/* ================= BOTTOM STATEMENT SECTION ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-24 max-w-5xl mx-auto text-center"
>

  {/* Strong Headline */}
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      These Are Just A Few Results.
    </span>
  </h3>

  {/* Main Powerful Statement */}
  <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
    We have <span className="text-white font-semibold">literally thousands of case studies</span> —
    from complete online beginners to experienced professionals.
    <br className="hidden md:block" />
    When you enroll, we guide you step-by-step with clarity,
    structure, and real implementation support.
  </p>

  {/* Call To Action Line */}
  <p className="mt-6 text-lg font-semibold text-white">
    Your transformation starts the moment you decide to begin.
  </p>

  {/* Elegant Divider */}
  <div className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/40 to-transparent" />

  {/* Disclaimer Box */}
  <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-sm md:text-base text-gray-400 leading-relaxed">
    <p>
      <span className="text-white font-semibold">Important Notice:</span> The testimonials
      and results displayed above are examples of outcomes achieved by our students.
      These results are not typical and may vary based on your background,
      dedication, consistency, and implementation.
    </p>

    <p className="mt-4">
      Your success and earnings depend entirely on your willingness to learn,
      apply the training, and put in the required effort.
      We provide the roadmap — your commitment determines the destination.
    </p>
  </div>

</motion.div>
</section>
);
}