import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatbotTrigger from "../components/Chatbot/ChatbotTrigger";

export const metadata = {
  title: {
    default: "V Enterprises | Industrial Hardware",
    template: "%s | V Enterprises",
  },
  description:
    "Premium industrial hardware solutions for modern manufacturing, safety products, and reliable bulk supply.",
  metadataBase: new URL("https://www.venterprises.in"), 
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "V Enterprises | Industrial Hardware",
    description:
      "Premium industrial hardware solutions for manufacturing, safety products, and bulk industrial supplies.",
    type: "website",
    siteName: "V Enterprises",
    locale: "en_IN",
    images: [
      {
        url: "/warehouse.jpg",
        width: 1200,
        height: 630,
        alt: "V Enterprises industrial hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V Enterprises | Industrial Hardware",
    description:
      "Premium industrial hardware solutions for manufacturing, safety products, and bulk industrial supplies.",
    images: ["/warehouse.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotTrigger />
      </body>
    </html>
  );
}