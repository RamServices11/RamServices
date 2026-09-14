import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import Reveal from '../../motion/Reveal';
import { VENDORS } from '../../../data/vendors';

const VendorExperience = () => {
  return (
    <section id="vendor-experience" className="py-24 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Vendor Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-4">
            Proud Vendor & Industry Experience
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our experience spans diverse industrial environments, with vendor engagements across food, pharmaceuticals, manufacturing, engineering and related sectors.
          </p>
        </Reveal>

        {/* 19-Company Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {VENDORS.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              className="bg-[#F7FAFC] border border-gray-200/90 rounded-xl p-6 hover:bg-white hover:border-[#00B4D8]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#1A365D] group-hover:border-[#00B4D8]/40 group-hover:text-[#00B4D8] transition-colors">
                    <Building2 size={16} />
                  </div>
                  <span className="text-xs font-mono font-semibold text-gray-400 group-hover:text-[#00B4D8] transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#1A365D] transition-colors leading-snug mb-3">
                  {vendor.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-gray-200/70 flex items-start gap-2 text-xs text-gray-500">
                <MapPin size={13} className="text-[#00B4D8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{vendor.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VendorExperience;
