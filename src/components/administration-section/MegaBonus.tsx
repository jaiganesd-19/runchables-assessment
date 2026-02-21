"use client";

import Image from "next/image";

export default function BonusBundleSection() {
  return (
    <section className="relative w-full bg-black text-white py-8 md:py-15 px-6 sm:px-10 lg:px-20 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto space-y-15">

        {/* ============================= */}
        {/* ===== BONUS COURSE CARD ===== */}
        {/* ============================= */}

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 sm:p-12">

        {/* Premium Announcement Title */}
        <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
            Get Your Mega Bonus
            </span>
            <span className="block text-white mt-3">
            When You Sign Up Right Now
            </span>
        </h2>

        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Limited-time premium access available only for early action takers.
        </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">

                <Image
                src="/image/ai-bonus-img.png"
                alt="AI Bundle"
                width={500}
                height={400}
                className="w-full object-contain drop-shadow-2xl"
                />

                {/* Glow Updated */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-orange-400/20 blur-3xl rounded-full" />
            </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                16-Hour AI Marketing Course Bundle
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent mt-2">
                (Worth $697) – Free Access
                </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
                This AI Marketing Course Bundle gives you a complete 16-hour
                AI marketing system, prompts, and frameworks behind
                <span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent"> $50M+ in online sales.</span>
            </p>

            <h3 className="mt-8 text-lg font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                What You Get Inside the AI Bundle:
            </h3>

            <ol className="mt-6 space-y-4 text-gray-300 text-sm sm:text-base">
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">1.</span> Biggest Ever AI Marketing Workshop – Build & scale using AI in 16 hours.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">2.</span> 100+ AI Marketing Prompt Library – Research, sales & retention.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">3.</span> 1000+ 7-Figure Funnel Swipe Files generating <span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">millions</span>.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">4.</span> Ad Copy Analyzer Prompt – Improve conversions instantly.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">5.</span> AI Design Creatives Agent – Create brand-aligned visuals.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">6.</span> Client Acquisition AI Prompts Vault.</li>
                <li><span className="font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">7.</span> 50+ Ready-To-Use AI Copywriting Prompts Bundle.</li>
            </ol>
            </div>

        </div>
        </div>
        {/* ============================= */}
        {/* ===== SUCCESS BOOK CARD ===== */}
        {/* ============================= */}

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl p-8 sm:p-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Three Secrets To Massive Online Success Book
              </h2>

              <span className="inline-block mt-3 text-sm font-semibold bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                (Free Access)
              </span>

              <p className="mt-6 text-gray-300 leading-relaxed">
                This book reveals 3 powerful AI-driven strategies to launch,
                scale, and dominate your online business in today’s digital era.
              </p>

              <p className="mt-4 text-gray-400">
                Get clarity, execution framework, and avoid the mistakes 99% of entrepreneurs make.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/image/success-book.png"
                alt="AI Success Book"
                width={350}
                height={450}
                className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}