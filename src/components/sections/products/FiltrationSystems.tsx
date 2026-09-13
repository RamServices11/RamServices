import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const FiltrationSystems = () => {
  const systems = [
    'Sand Filters',
    'Activated Carbon Filters',
    'Water Softeners',
    'UF Based RO Systems',
    'Resin Based Water Treatment Systems'
  ];

  return (
    <section id="filtration" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto">
          
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-[#0B192C]/20 z-10 mix-blend-multiply"></div>
              {/* Filtration equipment image asset */}
              <img 
                src="/assets/equipment/filter-vessels.jpeg" 
                alt="Industrial Filtration Systems" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Filtration & Water Conditioning
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              Filtration Systems for Treated Water
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              RAM Services offers filtration and water-conditioning systems as part of integrated water treatment solutions.
            </p>

            <ul className="space-y-4 mb-12">
              {systems.map((system, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-[#00B4D8] shrink-0 mt-0.5" />
                  <span className="text-[#1A365D] font-semibold text-lg">{system}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0B192C] text-white font-semibold rounded-sm hover:bg-[#00B4D8] hover:text-[#0B192C] transition-all duration-300 group shadow-lg"
            >
              Discuss Your Requirement
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FiltrationSystems;
