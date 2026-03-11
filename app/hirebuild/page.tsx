"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Code2, ShieldCheck, TrendingDown } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTLogo from "../../icons/CTLogo";
import HireEngineersSection from "../../components/HireEngineersSection";
import BuildWithTeamsSection from "../../components/BuildWithTeamsSection";

export default function HireBuildPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-top bg-no-repeat min-h-[400px]">
        <div className="bg-gradient-to-r from-[#1B1049] via-[#1B1049]/60 to-transparent flex justify-start items-start px-4 pt-32 pb-6 md:pb-0 lg:pr-0 lg:pt-32 md:pl-10 min-h-[400px]">
          <div className="text-white z-10 lg:pb-2 max-w-2xl w-full">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 sm:mb-8 leading-[1.1]">
              Hire & Build With Codetrain Workforce
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-lg leading-relaxed">
              Choose the partnership model that best fits your company's needs and timeline.
            </p>
          </div>
        </div>
        
        {/* CTLogo background watermark */}
        <CTLogo
          className="absolute size-[900px] center top-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-0"
          color="#1B1049"
        />
      </section>

      {/* Main Content */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side: Hire Engineers */}
            <HireEngineersSection />

            {/* Right Side: Build with Codetrain Teams */}
            <BuildWithTeamsSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
