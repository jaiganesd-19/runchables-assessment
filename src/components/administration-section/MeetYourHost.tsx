    "use client";

    import Image from "next/image";

    export default function MeetHostPremium() {
    return (
        <section className="relative py-8 md:py-15 overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

            {/* Section Header */}
            <div className="text-center mb-14 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 tracking-tight">
            The Visionary Powering the{" "}
            <span className=" bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                AI Growth Workshop
            </span>
            </h2>
            <div className="w-16 h-[3px] bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative flex justify-center">

                <div className="relative w-full max-w-[420px] h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl transition duration-500 hover:shadow-2xl">

                <Image
                    src="/image/host-image.png"
                    alt="Host Image"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Soft bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 sm:px-6 py-2 rounded-full shadow-lg font-medium text-xs sm:text-sm flex items-center gap-2">
                <i className="bi bi-megaphone-fill"></i>
                Advertising & Funnel King
                </div>

            </div>

            {/* RIGHT CONTENT CARD */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">

                <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Saurabh Bhatnagar
                </h3>
                <p className="text-orange-500 font-semibold mt-2 text-base sm:text-lg">
                    Founder & CEO – FlexiFunnels
                </p>
                </div>

                <div className="space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base md:text-[17px]">

                <p>
                    Saurabh helps individuals & businesses scale their revenue online
                    using his trainings & softwares. Founder of India’s First &
                    Only Funnel Builder Platform.
                </p>

                <p>
                    A globally renowned Funnel & Online Business Automation Expert.
                    The strategist behind some of Facebook’s highest ROI ad
                    campaigns & automated funnels with record-breaking conversions.
                </p>

                <p>
                    Generated over ₹70+ Crores in personal sales and helped 1000+
                    entrepreneurs create 6, 7, 8 & 9 figure online income.
                </p>

                <p>
                    Close to ₹1,000+ Crores in total online revenue impact.
                </p>
                </div>

                {/* Company Logos */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-semibold text-gray-900 mb-5 text-sm sm:text-base">
                    You may have seen me on:
                </p>

                <div className="relative w-full h-16 sm:h-20 opacity-80 hover:opacity-100 transition duration-300">
                    <Image
                    src="/image/company-logos.png"
                    alt="Company Logos"
                    fill
                    className="object-contain"
                    />
                </div>
                </div>

            </div>

            </div>
        </div>
        </section>
    );
    }