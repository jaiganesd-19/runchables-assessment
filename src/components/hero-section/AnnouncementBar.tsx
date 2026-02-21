"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const TARGET_DURATION = 24 * 60 + 15; 
  const endTimeRef = useRef<number | null>(null);

  const calculateTimeLeft = (endTime: number) => {
    const difference = endTime - Date.now();

    if (difference <= 0) {
      return { hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      hours: String(Math.floor(difference / (1000 * 60 * 60))).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  useEffect(() => {
    setMounted(true);

    if (!endTimeRef.current) {
      endTimeRef.current = Date.now() + TARGET_DURATION * 1000;
    }

    setTimeLeft(calculateTimeLeft(endTimeRef.current));

    const timer = setInterval(() => {
      if (endTimeRef.current) {
        setTimeLeft(calculateTimeLeft(endTimeRef.current));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const isTimerFinished =
    timeLeft.minutes === "00" && timeLeft.seconds === "00";

  // Smooth scroll handler
  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      const offset = 100; 
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center justify-between">

          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-extrabold tracking-wide flex items-center gap-3 uppercase"
          >
            <i className="bi bi-lightning-fill text-yellow-300 animate-pulse"></i>

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white animate-shimmer">
              Free Registration Closing Soon — Act Fast!
            </span>

            <i className="bi bi-fire text-yellow-300 animate-bounce"></i>
          </motion.div>

          {/* Timer */}
          <AnimatePresence>
            {!isTimerFinished && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3"
              >
                {[
                  { label: "Hrs", value: timeLeft.hours },
                  { label: "Mins", value: timeLeft.minutes },
                  { label: "Sec", value: timeLeft.seconds },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.12 }}
                    className="text-center"
                  >
                    <div className="bg-white text-red-600 rounded-lg px-4 py-1 font-extrabold text-lg shadow-xl">
                      {item.value}
                    </div>
                    <div className="text-xs mt-1 font-semibold tracking-wider">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToForm}
            className="relative bg-white text-red-600 font-bold px-6 py-2 rounded-lg shadow-xl overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              ENROLL NOW
              <i className="bi bi-arrow-right-circle-fill"></i>
            </span>

            <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition duration-300"></span>
          </motion.button>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm font-extrabold tracking-wide mb-3 uppercase flex justify-center items-center gap-2"
          >
            <i className="bi bi-lightning-fill text-yellow-300 animate-pulse"></i>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white animate-shimmer">
              Free Registration Closing Soon!
            </span>
          </motion.div>

          <div className="flex items-center">
            <div className="w-1/2 flex justify-start gap-2">
              <AnimatePresence>
                {!isTimerFinished && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-2"
                  >
                    {[
                      { label: "Hrs", value: timeLeft.hours },
                      { label: "Mins", value: timeLeft.minutes },
                      { label: "Sec", value: timeLeft.seconds },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="text-center"
                      >
                        <div className="bg-white text-red-600 rounded-md px-2 py-1 font-bold text-sm shadow-lg">
                          {item.value}
                        </div>
                        <div className="text-[10px] mt-1 font-semibold">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-1/2 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToForm}
                className="bg-white text-red-600 font-bold px-4 py-2 text-sm rounded-lg shadow-lg flex items-center gap-2"
              >
                ENROLL
                <i className="bi bi-arrow-right"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}