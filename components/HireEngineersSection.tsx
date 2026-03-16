"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight, Clock, ShieldCheck, TrendingDown } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow"
  >
    <div className="mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-600">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function HireEngineersSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          <Users className="w-3 h-3" />
          Hire Engineers
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Hire Production-Ready Engineers
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Access our pool of vetted software engineers who are ready to contribute to your team from day one. 
          All candidates have completed rigorous training and real-world projects.
        </p>
      </motion.div>

      {/* Features */}
      <div className="space-y-4">
        <FeatureItem
          icon={Clock}
          title="Fast Hiring Process"
          description="Skip the lengthy recruitment cycles. Get matched with qualified engineers within weeks, not months."
        />
        <FeatureItem
          icon={ShieldCheck}
          title="Vetted Talent"
          description="Every engineer has been thoroughly assessed through technical interviews and practical coding challenges."
        />
        <FeatureItem
          icon={TrendingDown}
          title="Cost-Effective"
          description="Reduce hiring costs by 40% compared to traditional recruitment methods while getting better quality candidates."
        />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="pt-4"
      >
        <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg">
          Start Hiring Engineers
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
