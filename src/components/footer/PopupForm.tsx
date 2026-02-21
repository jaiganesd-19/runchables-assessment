"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AIPremiumPopup() {
const [open, setOpen] = useState(false);
const [timeLeft, setTimeLeft] = useState(24 * 60 + 30);

const router = useRouter();


useEffect(() => {
const timer = setTimeout(() => {
    setOpen(true);
}, 5000);

return () => clearTimeout(timer);
}, []);

// Countdown logic
useEffect(() => {
if (!open) return;

const timer = setInterval(() => {
    setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
}, 1000);

return () => clearInterval(timer);
}, [open]);

// Time calculations
const days = Math.floor(timeLeft / (24 * 60 * 60));
const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = timeLeft % 60;

const numberVariant = {
initial: { opacity: 0, y: 10, scale: 0.8 },
animate: { opacity: 1, y: 0, scale: 1 },
exit: { opacity: 0, y: -10, scale: 0.8 },
transition: { duration: 0.4 },
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setOpen(false);
router.push("/thank-you");
};

return (
<AnimatePresence>
    {open && (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-xl px-4"
    >
        <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative w-full max-w-md rounded-2xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border border-yellow-500/30
                    shadow-[0_0_60px_rgba(255,215,0,0.15)]
                    backdrop-blur-2xl
                    p-5 sm:p-6"
        >
        {/* Close Button */}
        <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-white/50 hover:text-yellow-400 transition"
        >
            <X size={20} />
        </button>

        <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-[11px] tracking-widest uppercase text-white/60"
        >
            Exclusive AI Workshop Access
        </motion.p>

        <motion.h2
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-center text-xl sm:text-2xl font-bold text-white leading-snug"
        >
            Unlock Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600">
            AI Income System
            </span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-center text-white/70 text-xs sm:text-sm"
        >
            Join 3,000+ creators building high-income AI funnels.
            <span className="text-yellow-400 font-medium">
            {" "}Limited free access.
            </span>
        </motion.p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-lg bg-white/10 border border-white/20
                        px-3 py-2.5 text-sm text-white placeholder-white/50
                        focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
            required
            />
            <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg bg-white/10 border border-white/20
                        px-3 py-2.5 text-sm text-white placeholder-white/50
                        focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
            required
            />
            <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg bg-white/10 border border-white/20
                        px-3 py-2.5 text-sm text-white placeholder-white/50
                        focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
            required
            />

            <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full rounded-lg
                        bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600
                        text-black font-semibold py-2.5 text-sm
                        shadow-lg shadow-yellow-500/20"
            >
            🚀 Reserve My Free AI Seat
            </motion.button>
        </form>

        <div className="mt-5 text-center">
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white/60 text-[11px] mb-2 uppercase tracking-wide"
            >
            Free Access Ends In
            </motion.p>

            <div className="flex justify-center gap-2 sm:gap-3">
            {[
                { label: "Days", value: days },
                { label: "Hrs", value: hours },
                { label: "Min", value: minutes },
                { label: "Sec", value: seconds },
            ].map((item, index) => (
                <motion.div
                key={index}
                variants={numberVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...numberVariant.transition, delay: index * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                >
                <div className="text-lg sm:text-xl font-bold text-yellow-400">
                    {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs text-white/60">
                    {item.label}
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </motion.div>
    </motion.div>
    )}
</AnimatePresence>
);
}