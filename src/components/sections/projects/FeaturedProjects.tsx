import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const FeaturedProjects = () => {
  const featuredProjects = [
    { 
      capacity: '300 KLD', 
      type: 'ETP with RO, UF & ZLD', 
      client: 'The Global Green Company Limited', 
      location: 'Bangalore, Karnataka',
      image: '/assets/equipment/packaged-treatment-plant.jpeg'
    },
    { 
      capacity: '200 KLD', 
      type: 'ETP & 30 KLD STP', 
      client: 'Vintage Coffee Pvt. Ltd.', 
      location: 'Hyderabad, Telangana',
      image: '/assets/equipment/aeration-system.jpeg'
    },
    { 
      capacity: '40 KLD', 
      type: 'ETP', 
      client: 'Delightful Gourmet (Licious)', 
      location: 'Hyderabad, Telangana',
      image: '/assets/equipment/filtration-skid.jpeg'
    },
    { 
      capacity: '10 KLD', 
      type: 'STP', 
      client: 'UltraTech Cement', 
      location: 'Parli Baijnath, Maharashtra',
      image: '/assets/engineering/civil-construction-2.jpeg'
    }
  ];

  const additionalProjects = [
    { capacity: '60 KLD', type: 'CETP', client: 'Tunav Foods', location: 'Medchal, Telangana' },
    { capacity: '25 KLD', type: 'ETP', client: 'Althera Laboratories India Pvt. Ltd.', location: 'Mysore, Karnataka' },
    { capacity: '25 KLD', type: 'ETP', client: 'Tejas Food', location: 'Hyderabad, Telangana' },
    { capacity: '30 KLD', type: 'ETP with ZLD', client: 'Koeleman India Pvt. Ltd.', location: 'Bangalore, Karnataka' },
    { capacity: '450 KLD', type: 'ETP', client: 'Koeleman India Pvt. Ltd.', location: 'Bangalore, Karnataka' },
    { capacity: '60 KLD', type: 'ZLD', client: 'Cipla', location: 'Bangalore, Karnataka' },
    { capacity: '20 KLD', type: 'STP', client: 'Karachi INC', location: 'Hyderabad, Telangana' },
    { capacity: '15 KLD', type: 'STP', client: 'Althera Laboratories India Pvt. Ltd.', location: 'Mysore, Karnataka' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Featured Showcase Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Strongest Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4">
            Featured Project Showcase
          </h2>
          <p className="text-gray-600 text-lg">
            A selection of complex engineering and turnkey projects executed across various industrial sectors.
          </p>
        </div>

        {/* Featured Projects - Editorial Layout */}
        <div className="flex flex-col gap-16 lg:gap-24 mb-32">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Image Section */}
                <div className="w-full lg:w-[55%] overflow-hidden rounded-xl shadow-xl relative aspect-[4/3] lg:aspect-[16/10]">
                  <div className="absolute inset-0 bg-[#0B192C]/10 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#0B192C]/85 backdrop-blur-md text-[#00B4D8] text-[11px] font-mono tracking-wider uppercase rounded border border-[#00B4D8]/30">
                    Representative System Architecture
                  </span>
                  <img 
                    src={project.image} 
                    alt={project.client} 
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center py-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-light text-gray-200 group-hover:text-[#00B4D8]/20 transition-colors font-mono">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="h-px bg-gray-200 flex-grow group-hover:bg-[#00B4D8]/30 transition-colors"></div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#F0F8FF] text-[#1A365D] text-xs font-bold uppercase tracking-wider rounded border border-[#00B4D8]/20">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B192C] mb-3 group-hover:text-[#00B4D8] transition-colors leading-tight">
                    {project.client}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Designed and executed {project.capacity} capacity treatment facility.
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 font-medium pb-8">
                    <MapPin size={18} className="text-[#00B4D8]" />
                    {project.location}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Broader Experience Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B192C] mb-4">
            Broader Project Experience
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-6"></div>
          <p className="text-gray-600">
            A comprehensive list of our recent effluent and sewage treatment executions.
          </p>
        </div>

        {/* Compact List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 border border-gray-100 p-5 rounded-lg hover:border-[#00B4D8]/30 hover:bg-white transition-all duration-300 group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-[#1A365D] group-hover:text-[#00B4D8] transition-colors">{project.client}</h4>
                <span className="text-xs font-bold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">{project.type}</span>
              </div>
              <p className="text-sm font-semibold text-[#0B192C] mb-2">{project.capacity}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-auto">
                <MapPin size={12} className="text-[#00B4D8]" />
                {project.location}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
