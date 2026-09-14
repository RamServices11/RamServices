import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_VENDORS } from '../../../data/vendors';

const ContactVendorTrust = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-xs mb-2 block">
              Vendor Credibility
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B192C] tracking-tight">
              Vendor Experience Across Diverse Industries
            </h2>
            <div className="w-12 h-1 bg-[#C1121F] rounded-full mx-auto mt-4 mb-4"></div>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Selected vendor engagements demonstrating practical industry credibility across pharmaceuticals, food processing, infrastructure, and allied industrial operations.
            </p>
          </div>

          {/* Compact badge / flowing list of 6-8 companies */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CONTACT_VENDORS.map((vendor, index) => (
              <motion.div
                key={vendor.id}
                className="bg-[#F7FAFC] border border-gray-200/90 rounded-md px-4 py-2 text-xs md:text-sm font-medium text-[#1A365D] hover:border-[#00B4D8]/50 hover:bg-white transition-colors duration-200 flex items-center gap-2 shadow-2xs"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <CheckCircle2 size={13} className="text-[#00B4D8] shrink-0" />
                <span>{vendor.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about#vendor-experience"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A365D] hover:text-[#00B4D8] transition-colors group"
            >
              <span>Explore Full 19-Organization Vendor Directory</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactVendorTrust;
