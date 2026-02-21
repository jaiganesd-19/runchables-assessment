"use client";

import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
return (
<footer className="relative w-full bg-black px-6 pt-24 pb-16 overflow-hidden ">
        {/* Background Image */}
    <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/image/ai-workshop-image.png')" }}
    ></div>


    {/* === Ambient AI Glow Background === */}
    <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-[160px] rounded-full" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] rounded-full" />
    </div>

    <div className="max-w-5xl mx-auto text-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(255,200,0,0.12)]">

    {/* === Logo + Title === */}
    <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
        Innovative AI Workshop
        </h2>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
        Designed using advanced AI funnel architecture & behavioral conversion frameworks.
        </p>
    </div>

    {/* === Expanded Disclaimer Section === */}
    <div className="mt-14 space-y-4 text-gray-400 text-sm md:text-base leading-relaxed text-justify">

        <p>
        We make every effort to accurately represent our programs, services,
        technologies, and their potential outcomes. All earnings, revenue,
        and performance statements are estimates only and should not be
        considered guarantees of actual or future results. Your success
        depends on multiple factors including your background, dedication,
        implementation strategy, market conditions, and execution quality.
        Individual outcomes will always vary.
        </p>
        <p>
        The content provided during this AI Workshop is for educational and
        informational purposes only. We do not provide financial, legal, or
        investment advice. Participants are encouraged to perform their own
        due diligence and consult qualified professionals before making
        business or financial decisions based on the information shared.
        </p>

        <p>
        This website is not affiliated with, endorsed by, or sponsored by
        any third-party platforms, organizations, or technology providers
        unless explicitly stated. Any references to third-party names,
        trademarks, or systems remain the property of their respective
        owners. Once you navigate away from this website, we are not
        responsible for external content, privacy policies, or data
        practices.
        </p>

        <p>
        By registering for this workshop, you acknowledge that results are
        not guaranteed and that your participation is voluntary. We reserve
        the right to update, modify, or revise program content, pricing,
        and policies at any time without prior notice. For clarification or
        support, please contact our official support channels.
        </p>

    </div>

{/* === Elegant Divider (Reduced Gap) === */}
<div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

{/* === Bottom Section (Tight + Elegant) === */}
<div className="flex flex-col items-center gap-3 text-xs md:text-sm text-gray-400">

  <p className="leading-none">
    © {new Date().getFullYear()} AI Workshop. All rights reserved.
  </p>

  {/* Links with Vertical Splitter */}
  <div className="flex items-center justify-center">

    <a className="px-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition duration-200">
      Terms & Conditions
    </a>

    <span className="h-4 w-px bg-white/20" />

    <a className="px-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition duration-200">
      Privacy Policy
    </a>

    <span className="h-4 w-px bg-white/20" />

    <a className="px-3 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent hover:opacity-80 transition duration-200">
      DPA
    </a>

  </div>

  {/* Compact Social Icons */}
  <div className="flex gap-3">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-blue-400 transition duration-200">
      <Facebook size={13} className="text-gray-300" />
    </div>
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-pink-400 transition duration-200">
      <Instagram size={13} className="text-gray-300" />
    </div>
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-amber-400 transition duration-200">
      <Linkedin size={13} className="text-gray-300" />
    </div>
  </div>

</div>
    </div>
</footer>
);
}