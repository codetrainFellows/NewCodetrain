"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CredibilitySection from "@/components/CredibilitySection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/AM1A5171.jpg"
          alt="Hero Background"
          className="h-full w-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl w-full">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1]"
          >
            Hire Engineers or <br />
            <span className="text-yellow-200">Build with Codetrain Teams</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-yellow-100 mb-8 sm:mb-10 max-w-lg leading-relaxed"
          >
            Access production-ready software engineers and AI talent trained through Codetrain's programs and vetted through real-world projects. Whether your company is expanding its engineering team or building a new product, Codetrain Workforce connects you with capable engineers ready to contribute.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-xs sm:text-sm text-yellow-200 mb-6 sm:mb-8 flex flex-col sm:flex-row gap-2 sm:gap-4"
          >
            <span className="font-semibold">700+ engineers trained</span>
            <span className="text-yellow-400 hidden sm:inline">•</span>
            <span className="font-semibold">Real project portfolios</span>
            <span className="text-yellow-400 hidden sm:inline">•</span>
            <span className="font-semibold">Employer-ready talent</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4"
          >
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-zinc-900 font-semibold rounded-full overflow-hidden transition-all hover:pr-12 hover:bg-yellow-400 text-sm sm:text-base">
              <span className="relative z-10">Book a Hiring Call</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-yellow-400 text-yellow-100 font-semibold rounded-full hover:bg-yellow-800/50 transition-colors text-sm sm:text-base">
              Request Talent
            </button>
          </motion.div>
        </div>
      </div>

      </main>
      <CredibilitySection />
      <ProblemSolutionSection />
      <Footer />
    </div>
  );
}
