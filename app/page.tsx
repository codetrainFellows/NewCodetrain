"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CredibilitySection from "../components/CredibilitySection";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import Button from "../components/Button";
import BgLogoRight from "../icons/BgLogoRight";
import BgLogoLeft from "../icons/BgLogoLeft";
import HireEngineersSection from "../components/HireEngineersSection";
import BuildWithTeamsSection from "../components/BuildWithTeamsSection";
// ✅ Removed unused `section` import from framer-motion/client

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      {/* ✅ Added `relative` so absolute-positioned bg logos anchor correctly */}
      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-top bg-no-repeat min-h-[600px] lg:min-h-screen">
        <div className="bg-gradient-to-r from-[#1B1049] via-[#1B1049]/60 to-transparent flex justify-start items-start px-4 pt-32 pb-6 md:pb-0 lg:pr-0 lg:pt-32 md:pl-10 min-h-[600px] lg:min-h-screen">
          {/* ✅ Removed stray `relative` from inner div (it belongs on the section) */}
          <div className="text-white z-10 lg:pb-2 max-w-2xl w-full">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6 sm:mb-8 leading-[1.1]">
              Hire Engineers or <br />
              <span className="text-[#FFBE0C]">Build with Codetrain Teams</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Access production-ready software engineers and AI talent trained
              through Codetrain's programs and vetted through real-world
              projects. Whether your company is expanding its engineering team
              or building a new product, Codetrain Workforce connects you with
              capable engineers ready to contribute.
            </p>
            <div className="text-xs sm:text-sm text-white mb-6 sm:mb-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="font-semibold">700+ engineers trained</span>
              <span className="text-white hidden sm:inline">•</span>
              <span className="font-semibold">Real project portfolios</span>
              <span className="text-white hidden sm:inline">•</span>
              <span className="font-semibold">Employer-ready talent</span>
            </div>
            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#FFBE0C] text-[#1B1049] font-semibold rounded-full overflow-hidden transition-all hover:pr-12 hover:bg-[#FFBE0C]/80 text-sm sm:text-base">
                <span className="relative z-10">Book a Hiring Call</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B1049] transition-colors text-sm sm:text-base">
                Request Talent
              </button>
            </div>
          </div>
          {/* ✅ Moved bg logos inside the relative section, removed the extra closing </div> that was here */}
        </div>

        {/* ✅ Bg logos now correctly inside the `relative` section */}
        <BgLogoRight fill="#E5E5E5" className="opacity-[0.2] size-60 sm:size-80 lg:size-6/12 absolute left-0 -top-11 lg:left-2/4 lg:-top-1 lg:-z-10" />
        <BgLogoLeft fill="#E5E5E5" className="opacity-[0.2] size-40 sm:size-80 absolute left-0 top-36 sm:top-56 lg:top-1/2 lg:left-3/4 lg:-z-10" />
      </section>
      <CredibilitySection />
      <ProblemSolutionSection />
      <BuildWithTeamsSection  />
      <Footer />
    </div>
  );
}