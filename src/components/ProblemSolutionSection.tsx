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

const ProblemItem = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-4 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 transition-colors group"
  >
    <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{children}</p>
  </motion.div>
);

const SolutionItem = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl border border-yellow-200 bg-yellow-50 shadow-sm hover:shadow-md transition-all group"
  >
    <div className="mb-4 p-3 w-fit rounded-xl bg-yellow-500/20 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function ProblemSolutionSection() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side: The Problem */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest"
            >
              <AlertCircle className="w-3 h-3" />
              The Bottleneck
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Hiring Engineers Shouldn't <span className="text-red-500">Slow You Down</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 text-xs font-bold uppercase tracking-widest"
            >
              <Zap className="w-3 h-3" />
              The Codetrain Solution
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Built on a <span className="text-yellow-600">Talent Institution</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
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
              <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-yellow-500/20">
                Accelerate Your Engineering
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
