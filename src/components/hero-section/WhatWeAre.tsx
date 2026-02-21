"use client";

import { motion } from "framer-motion";

export default function AuthoritySection() {
  return (
    <section className="relative py-15 text-white overflow-hidden">

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Who Is This{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                AI Growth Workshop
              </span>{" "}
              Really For?
            </h2>

            <p className="text-gray-300 mt-8 text-lg md:text-xl leading-relaxed max-w-2xl">
              This isn’t a motivational webinar. This is a serious, 
              implementation-driven AI revenue system built for 
              entrepreneurs who want scalable, predictable, automated income.
              You’ll learn frameworks used inside real 6 & 7-figure businesses.
            </p>
          </div>

          {/* Qualification Points */}
          <div className="space-y-8">

            {/* Positive */}
            <div className="flex items-start gap-5">
              <div className="bg-green-500/20 p-4 rounded-2xl backdrop-blur-lg">
                <i className="bi bi-check-circle-fill text-green-400 text-2xl"></i>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Already running an online business? Discover how we scale 
                offers using AI automation systems, optimized funnels, 
                and backend profit stacking strategies.
              </p>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-green-500/20 p-4 rounded-2xl backdrop-blur-lg">
                <i className="bi bi-check-circle-fill text-green-400 text-2xl"></i>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Starting from zero? You’ll get a beginner-friendly launch
                roadmap that removes technical overwhelm and shows exactly
                how to validate, launch, and monetize your first AI offer.
              </p>
            </div>

            {/* Negative */}
            <div className="flex items-start gap-5">
              <div className="bg-red-500/20 p-4 rounded-2xl backdrop-blur-lg">
                <i className="bi bi-x-circle-fill text-red-400 text-2xl"></i>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                If you're looking for shortcuts or hype-based income tricks,
                this is NOT for you. This is built for disciplined action-takers.
              </p>
            </div>

          </div>

          {/* Revenue Authority Card */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10" />

            <h3 className="relative text-2xl md:text-3xl font-bold text-yellow-400">
              Real Funnel Breakdown — No Theory
            </h3>

            <p className="relative text-gray-300 mt-4 text-lg leading-relaxed">
              See real ad spend numbers, cost-per-lead metrics, 
              front-end and backend conversion math, profit margins, 
              and daily revenue projections explained transparently.
              No screenshots hidden. No fake dashboards.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl space-y-10">

          <h3 className="text-3xl md:text-4xl font-bold text-indigo-300">
            What You’ll Master Inside:
          </h3>

          <div className="space-y-8">

            {[
              "Advanced Funnel Hacking Framework to reverse engineer winning campaigns.",
              "Audience Targeting Strategy to attract premium buyers in any niche.",
              "Complete AI Funnel Automation Blueprint for daily predictable revenue.",
              "Cold Traffic Conversion System that builds authority instantly.",
              "3-Step AI Business Model for beginners — zero coding required.",
              "Risk-Minimizing Launch Framework to avoid common beginner mistakes.",
              "Scaling Roadmap to move from first client to 6 & 7-figure growth."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <div className="bg-yellow-400/20 p-4 rounded-2xl backdrop-blur-lg">
                  <i className="bi bi-star-fill text-yellow-400 text-xl"></i>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-8 rounded-3xl text-black shadow-xl hover:scale-[1.03] transition duration-500">

            <h4 className="font-bold text-xl">
              🎁 LIVE Bonus Worth ₹40,000+
            </h4>

            <p className="mt-3 font-medium text-lg">
              150+ AI Funnel Templates, high-converting email swipes,
              and ready-to-deploy automation flows used by 1000+ entrepreneurs.
            </p>

          </div>
          {/* Image */}
          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
            <img
              src="/image/ai-course.png"
              alt="AI Course Dashboard"
              className="relative rounded-3xl shadow-2xl border border-white/10 w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}