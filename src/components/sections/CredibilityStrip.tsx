import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../motion/Reveal';
import { HOME_VENDORS } from '../../data/vendors';

const CredibilityStrip = () => {
  const prefersReducedMotion = useReducedMotion();
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const track = [...HOME_VENDORS, ...HOME_VENDORS];

  return (
    <section className="bg-[#F7FAFC] py-10 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal direction="none">
          <p className="text-center text-xs font-bold text-[#1A365D] uppercase tracking-[0.25em] mb-8">
            Selected Vendor & Industry Experience
          </p>
        </Reveal>
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label="Vendor and industry experience"
      >
        {prefersReducedMotion ? (
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 px-4">
            {HOME_VENDORS.map((vendor) => (
              <span
                key={vendor.id}
                role="listitem"
                className="text-xs md:text-sm font-semibold text-[#1A365D] tracking-wider px-4 py-2 bg-white rounded border border-gray-200 shadow-2xs"
              >
                {vendor.name}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex items-center gap-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {track.map((vendor, index) => (
              <span
                key={`${vendor.id}-${index}`}
                role="listitem"
                className="text-xs md:text-sm font-semibold text-[#1A365D] tracking-wide px-5 py-2.5 bg-white rounded-md border border-gray-200 shadow-2xs hover:border-[#00B4D8] hover:text-[#00B4D8] transition-all duration-300 shrink-0"
              >
                {vendor.name}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-6 text-center">
        <Link
          to="/about#vendor-experience"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-[#00B4D8] transition-colors group"
        >
          <span>Explore All 19 Vendor Organizations</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CredibilityStrip;
