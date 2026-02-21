"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function RegistrationSection() {
  const router = useRouter(); 
  // SUBMIT FUNCTION
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  router.push("/thank-you");
};
  return (
    <section className="relative py-7  px-6 overflow-hidden text-white"  >

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* Event Image */}
          <div className="relative group rounded-3xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500 rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/image/event.png"
                alt="Workshop Event"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-6 right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                2,00,000+ Attendees
              </div>
            </div>
          </div>

          {/* Speaker Image */}
          <div className="relative group rounded-3xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition duration-500 rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/image/speaker.png"
                alt="Speaker"
                width={800}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div id="registration-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-2xl md:text-3xl font-bold text-center leading-snug">
            Reserve Your Free Spot For The
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">
              Exclusive AI Powered Workshop
            </span>
          </h2>

          <p className="text-center text-orange-400 font-semibold mt-4">
            ⚠ Limited Seats Available
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-4" >

            <input
              type="text"
              placeholder="First Name" required
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />

            <input
              type="email"
              placeholder="Email Address" required
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number" required
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-4 rounded-2xl shadow-xl text-lg hover:shadow-orange-500/40 transition duration-300"
            >
              🚀 REGISTER NOW
            </motion.button>
          </form>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm">

            <div className="flex items-center gap-2 bg-white/5 border border-white/20 px-5 py-2.5 rounded-full">
              <i className="bi bi-calendar-event text-blue-400 text-base"></i>
              <span className="font-medium text-gray-200">22 Feb</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 border border-white/20 px-5 py-2.5 rounded-full">
              <i className="bi bi-clock text-orange-400 text-base"></i>
              <span className="font-medium text-gray-200">11 AM</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 border border-white/20 px-5 py-2.5 rounded-full">
              <i className="bi bi-camera-video text-purple-400 text-base"></i>
              <span className="font-medium text-gray-200">Zoom</span>
            </div>

          </div>

          <p className="text-center text-orange-400 mt-6 font-medium">
            Registration Closes On Feb 20, 2026
          </p>

        </motion.div>
      </div>
    </section>
  );
}