"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NextStepsSection() {
return (
<div className="w-full text-white overflow-x-hidden">

    {/* ================= FIRST SECTION ================= */}
    <section className="relative w-full py-10 px-6">
    <div className="relative max-w-5xl mx-auto space-y-14">

        {/* TOP HEADER */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl py-8 px-6 shadow-xl"
        >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            IMPORTANT: Follow The Next Steps Below
        </h2>
        <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg">
            Get all these bonuses to skyrocket your online business growth
        </p>
        </motion.div>

        {/* STEP COMPONENT */}
        {[
        {
            step: "STEP ONE",
            title: "Claim Your FREE AI Marketing Bundle Access",
            desc: "Access AI systems, prompts, and frameworks behind $50M+ in profitable businesses plus workshop reminders.",
            image: "/image/ai-bonus-img.png",
            button: "Claim FREE Bundle + Alerts",
            list: [
            "100+ High-leverage AI marketing prompts",
            "1,000+ 7-figure funnel swipes",
            "AI Ad Copy Analyzer",
            "Client Acquisition AI Prompts Vault",
            "500+ AI Copywriting prompts",
            ],
        },
        {
            step: "STEP TWO",
            title: "Join India's Biggest Online Marketing Community",
            desc: "Get massive event updates and network with 100,000+ thriving entrepreneurs.",
            image: "/image/facebook-group.png",
            button: "Join The Facebook Group",
        },
        {
            step: "STEP THREE",
            title: "Fill Out This Quick 2 Minute Discovery Form",
            desc: "Help us personalize your content and deliver tailored AI strategies aligned with your goals.",
            image: "/image/discovery.png",
            button: "Fill Out Discovery Form",
        },
        ].map((item, index) => (
        <div
            key={index}
            className="grid md:grid-cols-2 gap-8 items-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
        >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
            />
            </div>

            {/* Content */}
            <div className="space-y-5">
            <h3 className="text-yellow-400 text-sm font-semibold tracking-wider">
                {item.step}
            </h3>

            <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
                {item.title}
            </h4>

            <p className="text-gray-300 text-sm sm:text-base">
                {item.desc}
            </p>

            {item.list && (
                <ul className="space-y-2 text-gray-400 text-sm">
                {item.list.map((point, i) => (
                    <li key={i}>• {point}</li>
                ))}
                </ul>
            )}

            <button className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-extrabold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                {item.button}
            </button>
            </div>
        </div>
        ))}
    </div>
    </section>

    {/* ================= SECOND SECTION (MEGA BONUS) ================= */}
    <section className="relative w-full py-12 px-6">
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full" />

    <div className="relative max-w-6xl mx-auto">

        <p className="text-center text-sm tracking-[0.3em] text-yellow-400 font-semibold mb-6">
        STEP FOUR
        </p>

        <h2 className="text-center font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Mega Bonus
        </span>{" "}
        – Get Lifetime $3,815/Day Training Recording
        </h2>

        <div className="mt-16 flex justify-center">
        <div className="relative w-full max-w-4xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-[0_0_80px_rgba(255,215,0,0.15)]">
            <Image
            src="/image/bonus-mockup.png"
            alt="Mega Bonus Mockup"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-xl"
            />
        </div>
        </div>

        <div className="mt-10 flex justify-center">
        <button className="px-10 py-4 text-lg font-extrabold rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_10px_40px_rgba(255,215,0,0.4)] hover:scale-105 transition-all duration-300">
            Get Lifetime $3815/Day Workshop Recordings Now
        </button>
        </div>
    </div>
    </section>

</div>
);
}