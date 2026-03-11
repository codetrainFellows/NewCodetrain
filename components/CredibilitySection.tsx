"use client";

import { motion } from "framer-motion";
import BgLogoRight from "../icons/BgLogoRight";
import BgLogoLeft from "../icons/BgLogoLeft";

const CredibilitySection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1049] mb-3 sm:mb-4">
            Credibility / Trust Section
          </h2>
          <p className="text-base sm:text-lg text-[#1b10499b] max-w-3xl mx-auto leading-relaxed px-4">
            Codetrain has spent the past several years preparing engineers for
            real-world development environments.
          </p>
        </motion.div>
      </div>

      {/* ✅ Key Highlights — outside max-w container so it's truly full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-6 sm:mb-8"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-[#1B1049] mb-4 sm:mb-6 text-center px-4">
          Key Highlights
        </h3>
        <div className="bg-[#7A3CE3] py-8 sm:py-12 px-4 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              <div className="py-4 sm:py-6 md:py-0 text-center text-white">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">700+</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-medium opacity-90">engineers trained</p>
              </div>
              <div className="py-4 sm:py-6 md:py-0 text-center text-white">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">89%</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-medium opacity-90">job placement rate</p>
              </div>
              <div className="py-4 sm:py-6 md:py-0 text-center text-white">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">7+</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-medium opacity-90">years training software engineers</p>
              </div>
              <div className="py-4 sm:py-6 md:py-0 text-center text-white">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">Multiple</p>
                <p className="text-xs sm:text-sm uppercase tracking-widest font-medium opacity-90">countries with graduates</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-base sm:text-lg text-[#1b10499b] max-w-4xl mx-auto leading-relaxed">
            This foundation allows Codetrain Workforce to provide companies with
            a trusted pipeline of emerging engineering talent.
          </p>
        </motion.div>
      </div>

      {/* Background logos */}
      <BgLogoRight fill="#E5E5E5" className="opacity-[0.1] size-60 sm:size-80 lg:size-6/12 absolute left-0 -top-11 lg:left-2/4 lg:-top-1 lg:-z-10" />
      <BgLogoLeft fill="#E5E5E5" className="opacity-[0.1] size-40 sm:size-80 absolute left-0 top-36 sm:top-56 lg:top-1/2 lg:left-3/4 lg:-z-10" />
    </section>
  );
};

export default CredibilitySection;