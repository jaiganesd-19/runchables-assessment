"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function FormSection() {
const router = useRouter(); 
    // SUBMIT FUNCTION
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/thank-you");
};
return (
<section className="relative w-full bg-black py-14 px-4 md:px-6 flex justify-center overflow-hidden">

    {/* AI Radial Glow Background */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
    <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px]-translate-x-1/2 -translate-y-1/2bg-[radial-gradient(circle,rgba(251,191,36,0.12),transparent_70%)] blur-3xl"
    />
    </div>

    {/* Animated Grid */}
    <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none">
    <div
        className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridMove_20s_linear_infinite]"
    />
    </div>

    {/* Floating Particles */}
    {[...Array(6)].map((_, i) => (
    <motion.div
        key={i}
        className="absolute w-2 h-2 bg-amber-400 rounded-full blur-sm opacity-40"
        initial={{ y: 0, x: 0 }}
        animate={{
        y: [0, -100, 0],
        x: [0, i % 2 === 0 ? 30 : -30, 0],
        opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
        duration: 8 + i,
        repeat: Infinity,
        ease: "easeInOut",
        }}
        style={{
        top: `${20 + i * 10}%`,
        left: `${10 + i * 12}%`,
        }}
    />
    ))}

    {/* Form Container */}
    <motion.div
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.3 }}
    className="relative z-10 w-full max-w-2xl backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_0_60px_rgba(255,200,0,0.15)] overflow-hidden"
    >
    {/* Light Sweep */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[sweep_6s_linear_infinite]" />

    {/* Heading */}
    <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
        Reserve Your{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Free Spot
        </span>{" "}
        For The Exclusive{" "}
        <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Workshop
        </span>
        </h2>

        <p className="mt-3 flex justify-center">
        <motion.span
            initial={{ opacity: 0.8 }}
            animate={{
            opacity: [0.8, 1, 0.8],
            y: [0, -3, 0],
            boxShadow: [
                "0 0 0px rgba(255,200,0,0.0)",
                "0 0 20px rgba(255,200,0,0.4)",
                "0 0 0px rgba(255,200,0,0.0)",
            ],
            }}
            transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="relative px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/20 border border-amber-400/40 text-amber-400 font-semibold tracking-wide overflow-hidden"
        >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2.5s_linear_infinite]" />
            <span className="relative z-10">LIMITED SEATS</span>
        </motion.span>
        </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
        type="text"
        placeholder="First Name" required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 transition duration-300"
        />

        <input
        type="email"
        placeholder="Email ID" required
        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 transition duration-300"
        />

        <div className="flex rounded-lg overflow-hidden bg-white/10 border border-white/20 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-500/30 transition duration-300">
        <select
            defaultValue="+91"
            className="bg-transparent px-3 text-white text-sm outline-none border-r border-white/20"
        >
            <option value="+91" className="text-black">India (+91)</option>
            <option value="+1" className="text-black">USA (+1)</option>
            <option value="+44" className="text-black">UK (+44)</option>
            <option value="+61" className="text-black">Australia (+61)</option>
        </select>

        <input
            type="tel"
            placeholder="Phone Number" required
            className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        </div>

        <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold tracking-wide text-black bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,200,0,0.6)] active:scale-[0.98] transition duration-300"
        >
        REGISTER NOW
        </button>
    </form>
    </motion.div>
</section>
);
}