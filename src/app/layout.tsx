// // @ts-ignore
// import "./globals.css";
// import type { ReactNode } from "react";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ChatbotTrigger from "../components/Chatbot/ChatbotTrigger";

// export const metadata = {
//   title: "V Enterprises | Industrial Hardware",
//   description: "Premium industrial hardware solutions for modern manufacturing.",
// };

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-black relative">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//         <ChatbotTrigger />
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatbotTrigger from "../components/Chatbot/ChatbotTrigger";

export const metadata = {
  title: "V Enterprises | Industrial Hardware",
  description: "Premium industrial hardware solutions for modern manufacturing.",
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