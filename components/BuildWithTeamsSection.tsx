"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Users, 
  Globe, 
  Terminal, 
  Layers, 
  Bot, 
  Settings, 
  Puzzle 
} from "lucide-react";

const BuildWithTeamsSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B1049] mb-6 tracking-tight">
            Two Ways to Work With <br />
            <span className="text-indigo-600">Codetrain Workforce</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#FFBE0C] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Option 1: Hire Engineers */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group p-8 md:p-12 rounded-[2.5rem] bg-gray-100 border border-gray-200 hover:border-indigo-300 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Users className="w-64 h-64 -mr-20 -mt-20 rotate-12 text-indigo-600" />
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#1B1049]">Hire Engineers</h3>
              </div>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Recruit production-ready engineers from Codetrain's vetted talent pool. 
                Best suited for companies looking to expand their internal engineering teams.
              </p>

              <div className="mb-12">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Available roles include:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Frontend Engineers", icon: Globe },
                    { label: "Backend Engineers", icon: Terminal },
                    { label: "Full-stack Developers", icon: Layers },
                    { label: "AI Product Engineers", icon: Bot }
                  ].map((role, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                      <role.icon className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold text-[#1B1049]">{role.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-5 bg-[#1B1049] text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-[#1B1049]/20">
                Request Candidate Profiles
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Option 2: Build with Codetrain Teams */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group p-8 md:p-12 rounded-[2.5rem] bg-[#1B1049] border border-white/10 hover:border-blue-300/30 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <Code2 className="w-64 h-64 -mr-20 -mt-20 -rotate-12 text-blue-300" />
            </div>

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-white text-[#1B1049] shadow-lg">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">Build with Teams</h3>
              </div>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Codetrain engineers can design and build software solutions for your company. 
                Ideal for companies that want to move quickly without expanding internal teams.
              </p>

              <div className="mb-12">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Typical projects include:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Web Applications", icon: Globe },
                    { label: "AI Prototypes", icon: Bot },
                    { label: "Internal Tools", icon: Settings },
                    { label: "Product Features", icon: Puzzle }
                  ].map((project, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                      <project.icon className="w-5 h-5 text-blue-300" />
                      <span className="font-semibold text-gray-200">{project.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-5 bg-[#FFBE0C] text-[#1B1049] font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 group shadow-xl shadow-[#FFBE0C]/20">
                Start a Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildWithTeamsSection;