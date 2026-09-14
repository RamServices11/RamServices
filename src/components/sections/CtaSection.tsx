import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Reveal from '../motion/Reveal';

// Code-split: only fetched when this section is about to render.
const WaveField = lazy(() => import('../three/WaveField'));

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B192C]">
      {/* 3D flowing wave surface */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Suspense fallback={null}>
          <WaveField />
        </Suspense>
      </div>

      {/* Decorative gradient blooms */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[#00B4D8]/10 blur-[100px] rounded-l-full -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C1121F]/10 blur-[80px] rounded-r-full translate-y-1/4 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <Reveal direction="scale" className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Discuss Your <br className="hidden md:block" /> Engineering Requirements?
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact RAM Services Enterprises for world-class design, execution, and maintenance of your water and industrial infrastructure projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] text-[#0B192C] font-bold rounded-sm hover:bg-white hover:scale-[1.03] transition-all duration-300 group shadow-[0_0_20px_rgba(0,180,216,0.3)]"
            >
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="tel:+916392477942"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-gray-500 text-white font-medium rounded-sm hover:border-[#00B4D8] hover:text-[#00B4D8] bg-black/20 hover:bg-black/40 transition-all duration-300 text-sm md:text-base"
              >
                <PhoneCall size={18} />
                +91 6392477942
              </a>
              <a
                href="tel:+916309767400"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-gray-500 text-white font-medium rounded-sm hover:border-[#00B4D8] hover:text-[#00B4D8] bg-black/20 hover:bg-black/40 transition-all duration-300 text-sm md:text-base"
              >
                <PhoneCall size={18} />
                +91 6309767400
              </a>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
