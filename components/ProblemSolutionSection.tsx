"use client";

import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Clock, 
  UserMinus, 
  Zap, 
  Users, 
  Code2,
  ArrowRight,
  TrendingDown,
  ShieldCheck
} from "lucide-react";
import CTLogo from "../icons/CTLogo";

const ProblemItem = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-4 rounded-xl border border-[#FF006E]/20 bg-[#FF006E]/5 hover:bg-[#FF006E]/10 transition-colors group"
  >
    <div className="mt-1 p-2 rounded-lg bg-[#FF006E]/10 text-[#FF006E] group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-[#1B1049] group-hover:text-[#1B1049] transition-colors">{children}</p>
  </motion.div>
);

const SolutionItem = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl border border-[#FFBE0C]/20 bg-[#FFBE0C]/5 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="mb-4 p-3 w-fit rounded-xl bg-[#FFBE0C]/20 text-[#FFBE0C] group-hover:bg-[#FFBE0C] group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-[#1B1049] mb-2">{title}</h3>
    <p className="text-[#1b10499b] leading-relaxed">{description}</p>
  </motion.div>
);

export default function ProblemSolutionSection() {
  return (
    <section className="bg-gray-100 py-12 px-4 relative overflow-hidden">
      {/* Content sits above bg logo via relative z-10 */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side: The Problem */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF006E]/10 border border-[#FF006E]/20 text-[#FF006E] text-xs font-bold uppercase tracking-widest"
            >
              <AlertCircle className="w-3 h-3" />
              The Bottleneck
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#1B1049] leading-tight"
            >
              Hiring Engineers Shouldn't <span className="text-[#FF006E]">Slow You Down</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1b10499b]"
            >
              Many companies struggle to hire developers who are ready to contribute immediately. 
              Traditional hiring is broken, expensive, and slow.
            </motion.p>

            <div className="grid gap-3">
              <ProblemItem icon={Clock}>Long hiring cycles delaying critical launches</ProblemItem>
              <ProblemItem icon={UserMinus}>Junior developers requiring extensive, costly onboarding</ProblemItem>
              <ProblemItem icon={TrendingDown}>Limited engineering capacity to ship products at scale</ProblemItem>
              <ProblemItem icon={ShieldCheck}>Difficulty finding reliable, long-term development partners</ProblemItem>
            </div>
          </div>

          {/* Right Side: The Solution */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBE0C]/10 border border-[#FFBE0C]/20 text-[#FFBE0C] text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-3 h-3" />
              The Codetrain Solution
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#1B1049] leading-tight"
            >
              Built on a <span className="text-[#FFBE0C]">Talent Institution</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1b10499b]"
            >
              Codetrain Workforce provides access to engineers trained through structured 
              programs and real-world projects. No more random marketplaces.
            </motion.p>

            <div className="grid gap-4">
              <SolutionItem 
                icon={Users}
                title="Direct Talent Pool"
                description="Hire engineers directly from the Codetrain Workforce talent pool who are ready to hit the ground running."
              />
              <SolutionItem 
                icon={Code2}
                title="Managed Delivery"
                description="Work with dedicated Codetrain teams to build and ship your software products from start to finish."
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#FFBE0C] text-[#1B1049] font-bold rounded-xl hover:bg-[#FFBE0C]/80 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#FFBE0C]/20">
                Accelerate Your Engineering
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTLogo background watermark */}
      <CTLogo
        className="absolute size-[900px] center top-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-0"
        color="#1B1049"
      />
    </section>
  );
}