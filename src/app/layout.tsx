import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FitLogProvider } from "@/components/FitLogContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#0b0d0c] text-white antialiased">
        <FitLogProvider>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />

          <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          theme="dark"
          closeButton
          />
        </FitLogProvider>
      </body>
    </html>
  );
}