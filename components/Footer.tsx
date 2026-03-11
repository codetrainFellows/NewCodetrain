"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 border-t border-[#FFBE0C]/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-6 sm:w-8 bg-[#FFBE0C]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFBE0C] flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                <span className="hidden xs:inline">Codetrain</span>
                <span className="xs:hidden">CT</span>
                <span className="hidden sm:inline">Workforce</span>
              </span>
            </div>
            <p className="text-[#1b10499b] text-xs sm:text-sm leading-relaxed">
              Connecting global companies with emerging African engineering talent.
            </p>
            <div className="flex items-center gap-2 text-[#1b10499b] text-xs sm:text-sm mt-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Accra, Ghana</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-[#FFBE0C] font-semibold text-sm sm:text-base">Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-[#1b10499b] hover:text-[#FFBE0C] transition-colors text-xs sm:text-sm">
                About Codetrain
              </a>
              <a href="#" className="text-[#1b10499b] hover:text-[#FFBE0C] transition-colors text-xs sm:text-sm">
                Programs
              </a>
              <a href="#" className="text-[#1b10499b] hover:text-[#FFBE0C] transition-colors text-xs sm:text-sm">
                Apply to Codetrain
              </a>
              <a href="#" className="text-[#1b10499b] hover:text-[#FFBE0C] transition-colors text-xs sm:text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Empty column for balance */}
          <div className="hidden md:block"></div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#FFBE0C]/20 text-center">
          <p className="text-[#1b10499b] text-xs">
            © 2026 Codetrain Workforce. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
