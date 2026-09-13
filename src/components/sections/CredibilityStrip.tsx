import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '../motion/Reveal';

const CLIENTS = [
  'LICIOUS',
  'ITC (ICML)',
  'VINTAGE COFFEE',
  'ULTRATECH CEMENT',
  'CIPLA',
  'GLOBAL GREEN',
  'BIG BASKET',
];

const CredibilityStrip = () => {
  const prefersReducedMotion = useReducedMotion();
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-[#F7FAFC] py-10 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Reveal direction="none">
          <p className="text-center text-xs font-bold text-[#1A365D] uppercase tracking-[0.25em] mb-8">
            Selected Project Experience & Industrial Clients
          </p>
        </Reveal>
      </div>

      <div
        className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        role="list"
        aria-label="Client & project experience"
      >
        {prefersReducedMotion ? (
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-4">
            {CLIENTS.map((client) => (
              <span
                key={client}
                role="listitem"
                className="text-sm md:text-base font-bold text-[#1A365D] tracking-widest px-4 py-2 bg-white rounded border border-gray-200 shadow-2xs"
              >
                {client}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex items-center gap-12 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
          >
            {track.map((client, index) => (
              <span
                key={`${client}-${index}`}
                role="listitem"
                className="text-xs md:text-sm font-bold text-[#1A365D] tracking-widest uppercase px-5 py-2 bg-white rounded-md border border-gray-200 shadow-2xs hover:border-[#00B4D8] hover:text-[#00B4D8] transition-all duration-300 shrink-0"
              >
                {client}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CredibilityStrip;
