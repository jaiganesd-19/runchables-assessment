"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ThankYouPage() {
return (
<div
    className={`${inter.className} relative text-white min-h-screen overflow-x-hidden`}
>
    {/* ===================== SAFE BACKGROUND GLOW ===================== */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[140px] rounded-full" />
    </div>

    {/* ===================== HERO ===================== */}
    <section className="pt-20 pb-12 px-6">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        Congratulations, You're In For The
        <span className="block mt-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            $3,815/Day AI Workshop
        </span>
        </h1>
    </div>
    </section>

    {/* ===================== WHATSAPP CTA ===================== */}
    <section className="px-6 pb-16">
    <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/5 border border-yellow-500/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-extrabold">
            Join Our Private AI Community
            </h2>
            <p className="text-white/70 text-sm sm:text-base mt-2">
            Get bonus frameworks, updates & advanced funnel strategies.
            </p>
        </div>

        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#"
            className="px-8 py-3 rounded-full font-extrabold text-black text-sm sm:text-base bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 shadow-lg shadow-yellow-500/20 whitespace-nowrap"
        >
            Join Private WhatsApp
        </motion.a>
        </div>
    </div>
    </section>

    {/* ===================== VIDEO SECTION ===================== */}
    <section className="px-6 pb-20">
    <div className="max-w-5xl mx-auto relative">
        <div className="relative bg-black border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            Accidental Funnel Discovery
            </span>
        </h2>

        {/* Video Wrapper (SAFE) */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
            src="https://play.gumlet.io/embed/6970b9b7bcef432370f43a4d?background=false&autoplay=true&loop=true&disable_player_controls=true"
            title="Workshop Video"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
            loading="lazy"
            referrerPolicy="origin"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            />
        </div>
        </div>
    </div>
    </section>

    {/* ===================== CONFIRMATION MESSAGE ===================== */}
    <section className="px-6 pb-6">
    <div className="max-w-3xl mx-auto">
        <div className="text-center backdrop-blur-2xl bg-white/5 border border-yellow-500/20 rounded-full py-4 px-6 text-sm sm:text-base font-semibold">
        You've successfully registered. Your joining link & AI bonuses
        have been sent to your email.
        </div>
    </div>
    </section>
</div>
);
}