import { Shield, Lightbulb, Heart, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import Stagger from '../motion/Stagger';

const WhoWeAre = () => {
  const values = [
    { name: 'Integrity', icon: <Shield size={24} className="text-[#00B4D8]" />, desc: 'Uncompromising ethical standards in every project.' },
    { name: 'Innovation', icon: <Lightbulb size={24} className="text-[#00B4D8]" />, desc: 'Adopting sustainable and advanced technologies.' },
    { name: 'Responsibility', icon: <Heart size={24} className="text-[#00B4D8]" />, desc: 'Committed to environmental conservation.' },
    { name: 'Passion', icon: <Zap size={24} className="text-[#00B4D8]" />, desc: 'Driven by excellence in engineering.' },
    { name: 'Reliability', icon: <CheckCircle size={24} className="text-[#00B4D8]" />, desc: 'Delivering on time, every time.' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <Reveal direction="left">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              Leading Turnkey EPC Contractors for a Better Tomorrow
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We would like to introduce ourselves as a professionally managed organization specializing in Water & Wastewater Treatment Solutions and allied industrial services.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With in-house design and execution capabilities, state-of-the-art fabrication facilities in Prayagraj, Bangalore and Hyderabad, and a dedicated team of scientists and engineers, we deliver end-to-end engineering support and services.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-[#C1121F] rounded-full"></div>
              <span className="font-semibold text-[#1A365D] tracking-wide">Excellence Delivered.</span>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="bg-[#F7FAFC] p-8 md:p-10 rounded-2xl border border-gray-100 shadow-lg shadow-[#0B192C]/5">
              <h3 className="text-2xl font-bold text-[#0B192C] mb-8">Our Core Values</h3>
              <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8" amount={0.3}>
                {values.map((value) => (
                  <Stagger.Item key={value.name} className="flex gap-4 group">
                    <div className="shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.name}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                    </div>
                  </Stagger.Item>
                ))}
              </Stagger>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
