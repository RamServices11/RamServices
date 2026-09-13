import { motion } from 'framer-motion';
import { Droplets, Recycle, Wrench } from 'lucide-react';

const FeaturedIndustryVisual = () => {
  const blocks = [
    {
      num: '01',
      title: 'Water Treatment',
      icon: <Droplets size={24} />
    },
    {
      num: '02',
      title: 'Wastewater Treatment',
      icon: <Recycle size={24} />
    },
    {
      num: '03',
      title: 'Engineering & O&M',
      icon: <Wrench size={24} />
    }
  ];

  return (
    <section className="py-24 bg-[#0B192C] overflow-hidden">
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
              <div className="absolute inset-0 bg-[#00B4D8]/20 z-10 mix-blend-multiply"></div>
              {/* Equipment image asset */}
              <img 
                src="/assets/equipment/industrial-tanks.jpeg" 
                alt="Industrial Engineering Applications" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent z-10"></div>
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
              Engineering Across Applications
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              From Industrial Processes <br className="hidden xl:block" /> to Public Infrastructure
            </h2>
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              RAM Services Enterprises works across industrial, commercial and institutional sectors, supporting water and wastewater treatment requirements through engineering, project execution and ongoing operational support.
            </p>

            <div className="space-y-6">
              {blocks.map((block, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="text-[#00B4D8] font-mono font-bold text-lg mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                    {block.num}
                  </div>
                  <div className="flex-grow pb-6 border-b border-[#1A365D]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#00B4D8] group-hover:scale-110 transition-transform">
                        {block.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00B4D8] transition-colors">
                        {block.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedIndustryVisual;
