import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "500", "600", "700"],
variable: "--font-poppins",
});

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Register Now | Unlock AI Funnel Formula That Made $3,815/Day",
    template: "%s | AI Funnel Training",
  },

  description:
    "Register now for the FREE AI Funnel Training and discover the exact AI funnel formula that generated $3,815 per day using AI-powered funnels. Limited time free registration.",

  keywords: [
    "AI funnel training",
    "AI marketing funnel",
    "make money with AI",
    "AI funnel formula",
    "AI workshop",
    "digital marketing AI",
  ],

  authors: [{ name: "Runchables Assessment" }],
    creator: "Runchables Assessment",
    publisher: "Runchables Assessment",

    openGraph: {
        title:
        "Register Now | Unlock AI Funnel Formula That Made $3,815/Day",
        description:
        "Join the free AI Funnel Workshop and learn the exact AI-powered system that generated $3,815 per day.",
        url: "https://yourdomain.com",
        siteName: "AI Funnel Training",
        type: "website",
        locale: "en_US",
        images: [
        {
            url: "/preview.png", // put this in public folder
            width: 1200,
            height: 630,
            alt: "AI Funnel Training Preview",
        },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
        "Unlock AI Funnel Formula That Made $3,815/Day",
        description:
        "Free AI funnel training revealing the exact system that generated $3,815 per day.",
        images: ["/preview.png"],
    },

    icons: {
        icon: [
        { url: "/favicon.ico", type: "image/png" },
        ],
        shortcut: ["/favicon.ico"],
        apple: ["/favicon.ico"],
    },

    robots: {
        index: true,
        follow: true,
    },
    };

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
    <body
    className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
    >
    {children}
    </body>
</html>
);
}