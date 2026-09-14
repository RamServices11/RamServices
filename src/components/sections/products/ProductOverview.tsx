import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductOverview = () => {
  const primaryCategories = [
    {
      num: '01',
      title: 'Water Treatment',
      desc: 'Systems for industrial and process-water requirements.',
      link: '#product-catalogue',
      image: '/assets/equipment/water-treatment-system.jpeg'
    },
    {
      num: '02',
      title: 'Wastewater Treatment',
      desc: 'Systems for effluent, sewage, and leachate treatment.',
      link: '#product-catalogue',
      image: '/assets/equipment/aeration-system.jpeg'
    }
  ];

  const secondaryCategories = [
    {
      num: '03',
      title: 'Advanced Treatment',
      desc: 'Technologies for advanced recovery and zero liquid discharge.',
      link: '#product-catalogue',
      image: '/assets/equipment/membrane-skid.jpeg'
    },
    {
      num: '04',
      title: 'Filtration & Separation',
      desc: 'Filtration and water-conditioning systems.',
      link: '#product-catalogue',
      image: '/assets/equipment/industrial-filters.jpeg'
    },
    {
      num: '05',
      title: 'Packaged Systems',
      desc: 'Compact treatment approach for applicable requirements.',
      link: '#product-catalogue',
      image: '/assets/equipment/packaged-treatment-plant.jpeg'
    },
    {
      num: '06',
      title: 'Engineering Services',
      desc: 'Supporting engineering and project execution capabilities.',
      link: '#engineering',
      image: '/assets/engineering/turnkey-installation.jpeg'
    }
  ];

  return (
    <section id="product-categories" className="py-24 bg-[#F7FAFC] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
            Treatment Systems Built Around <br/> Your Process Requirements
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            RAM Services Enterprises provides water and wastewater treatment systems, advanced recovery technologies, and supporting engineering solutions for industrial and infrastructure requirements.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          
          {/* Primary Categories (2 Columns, Large Image-Led) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {primaryCategories.map((category, index) => (
              <motion.a 
                href={category.link}
                key={index}
                className="block relative rounded-2xl overflow-hidden group cursor-pointer aspect-square md:aspect-[16/9] lg:aspect-[4/3] shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-[#0B192C]/20 z-10 group-hover:bg-[#0B192C]/40 transition-colors duration-500"></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/60 to-transparent z-20 flex flex-col justify-end p-8">
                  <span className="text-4xl font-light text-white/50 mb-4 font-mono">{category.num}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">{category.desc}</p>
                  <div className="inline-flex items-center text-sm font-bold text-[#00B4D8] group-hover:text-white transition-colors">
                    Explore Solutions <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Secondary Categories (4 Columns, Clean Top-Image Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryCategories.map((category, index) => (
              <motion.a 
                href={category.link}
                key={index}
                className="block bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00B4D8]/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0B192C]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-[#1A365D] group-hover:text-[#00B4D8] transition-colors">{category.title}</h3>
                    <span className="text-xl font-light text-gray-300 font-mono">{category.num}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{category.desc}</p>
                  
                  <div className="inline-flex items-center text-xs font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors mt-auto">
                    Explore <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductOverview;
