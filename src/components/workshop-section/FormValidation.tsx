"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CTARegistrationSection() {
const router = useRouter(); 
const [form, setForm] = useState({
name: "",
email: "",
phone: "",
});

const [error, setError] = useState("");

// SUBMIT FUNCTION
const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

router.push("/thank-you");
};

return (
<section className="py-8 px-6 text-white">
    <div className="max-w-4xl mx-auto text-center">

    {/* Heading */}
    <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold leading-tight"
    >
        Are You Ready To Kickstart Your
        <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Online Business Journey With AI?
        </span>
    </motion.h2>

    {/* Form Card */}
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-14 max-w-lg mx-auto relative"
    >
        {/* Glow Border */}
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 blur opacity-30"></div>

        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl text-left">

        <h3 className="text-xl md:text-2xl font-semibold text-center">
            Reserve Your Free Spot
        </h3>

        <p className="text-orange-400 font-semibold mt-1 text-sm text-center">
            (LIMITED SEATS)
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            {/* Name */}
            <div className="relative">
            <i className="bi bi-person absolute left-4 top-3.5 text-gray-400"></i>
            <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="First Name"
                value={form.name} required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            </div>

            {/* Email */}
            <div className="relative">
            <i className="bi bi-envelope absolute left-4 top-3.5 text-gray-400"></i>
            <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email ID" required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            </div>

            {/* Phone */}
            <div className="relative">
            <i className="bi bi-telephone absolute left-4 top-3.5 text-gray-400"></i>
            <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Phone Number"
                value={form.phone} required
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            </div>

            {error && (
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm"
            >
                {error}
            </motion.p>
            )}

            {/* Button */}
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-orange-500/40 transition duration-300 flex items-center justify-center gap-2"
            >
            <i className="bi bi-rocket-takeoff"></i>
            REGISTER NOW
            </motion.button>

        </form>

        {/* Event Info */}
        <div className="mt-6 text-sm text-gray-300 flex items-center justify-center gap-2">
            <i className="bi bi-calendar-event text-orange-400"></i>
            Webinar Date: 22 February | 11:00 AM IST
        </div>

        <p className="text-orange-400 text-sm mt-2 text-center">
            (Free Seats Will End Soon)
        </p>

        </div>
    </motion.div>

    </div>
</section>
);
}