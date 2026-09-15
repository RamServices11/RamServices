import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import Reveal from '../../motion/Reveal';
import { PROJECTS_VENDORS } from '../../../data/vendors';

const ProjectsVendorExperience = () => {
  return (
    <section className="py-20 bg-[#F7FAFC] border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
                Credibility & Track Record
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B192C] mb-4">
                Industry & Vendor Experience
              </h2>
              <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-4"></div>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                In addition to specific engineered project executions, RAM Services has experience serving as a vendor across diverse industrial organizations.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/about#vendor-experience"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A365D] hover:text-[#00B4D8] transition-colors group"
              >
                <span>View All 19 Organizations</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Compact badge / card list of 6-8 organizations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS_VENDORS.map((vendor, index) => (
              <motion.div
                key={vendor.id}
                className="bg-white border border-gray-200/90 rounded-lg p-4 hover:border-[#00B4D8]/50 hover:shadow-xs transition-all duration-300 flex items-center gap-3 group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="w-7 h-7 rounded-md bg-[#F0F8FF] border border-[#00B4D8]/20 flex items-center justify-center text-[#1A365D] group-hover:text-[#00B4D8] transition-colors shrink-0">
                  <Building2 size={14} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-[#0B192C] group-hover:text-[#1A365D] transition-colors leading-snug">
                  {vendor.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200/60 text-right md:hidden">
            <Link
              to="/about#vendor-experience"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A365D] hover:text-[#00B4D8] transition-colors"
            >
              <span>View All 19 Organizations on About</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsVendorExperience;
