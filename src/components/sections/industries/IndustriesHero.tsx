import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { lazy, Suspense } from 'react';

// Code-split: three.js is only fetched when this hero mounts.
const ParticleField = lazy(() => import('../../three/ParticleField'));

const IndustriesHero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0B192C]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/equipment/industrial-filters.jpeg")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/50"></div>
      </div>

      <div className="hidden md:block absolute inset-0 z-[5] opacity-20">
        <Suspense fallback={null}>
          <ParticleField color="#48CAE4" count={3} />
        </Suspense>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#00B4D8] text-sm font-semibold tracking-widest uppercase mb-4">
              INDUSTRIES WE SERVE
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Solutions <br />
            Across <span className="text-[#00B4D8]">Diverse Industries.</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From industrial manufacturing and food processing to pharmaceuticals, infrastructure and institutional applications, RAM Services Enterprises supports diverse water and wastewater treatment requirements.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#industry-grid"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-lg shadow-[#00B4D8]/20 group"
            >
              Explore Industries
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-500 text-white font-medium rounded-sm hover:border-white hover:bg-white/5 transition-all duration-300 group"
            >
              Discuss Your Requirement
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-[#00B4D8]" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Curved bottom transition */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[51px] fill-white stroke-none"
          stroke="none"
          strokeWidth="0"
        >
          <path 
            transform="rotate(180 600 60)"
            stroke="none"
            strokeWidth="0"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default IndustriesHero;
