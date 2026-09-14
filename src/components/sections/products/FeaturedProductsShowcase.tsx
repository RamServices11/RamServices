import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCTS, createProductWhatsAppUrl, type ProductItem } from '../../../data/products';

interface FeaturedProductsShowcaseProps {
  onSelectProductForMedia: (product: ProductItem) => void;
}

// Select the 6 flagship featured products
const FEATURED_IDS = [
  'ro-uf-plant-300kld',
  'zld-plant-30kld',
  'etp-plant-5kld-hospital-restaurant',
  'rfc-machine-60bpm',
  'office-container',
  'water-treatment-lab'
];

const FeaturedProductsShowcase = ({ onSelectProductForMedia }: FeaturedProductsShowcaseProps) => {
  const featuredProducts = FEATURED_IDS
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is ProductItem => Boolean(p));

  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProduct = featuredProducts[selectedIndex] || featuredProducts[0];

  return (
    <section className="py-20 lg:py-28 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1A365D]/30 rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#00B4D8] text-xs md:text-sm font-semibold tracking-widest uppercase mb-3">
              FLAGSHIP CAPABILITY SHOWCASE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 !text-white text-white">
              Featured Systems & Operational Visuals
            </h2>
            <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-6"></div>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Genuine plant installations and machinery manufactured and deployed by RAM Services Enterprises. Review high-capacity treatment plants, packaging lines, and modular infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Featured Product Navigation Tabs (Desktop & Mobile Scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {featuredProducts.map((product, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={product.id}
                onClick={() => setSelectedIndex(idx)}
                className={`shrink-0 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#00B4D8] text-[#0B192C] font-bold border-[#00B4D8] shadow-lg shadow-[#00B4D8]/25'
                    : 'bg-[#1A365D]/60 text-gray-200 border-[#1A365D] hover:bg-[#1A365D] hover:text-white hover:border-[#00B4D8]/50'
                }`}
              >
                <span>{product.badge || `0${idx + 1}`}</span>
                <span className="truncate max-w-[140px] md:max-w-[180px] text-left">
                  {product.name}
                </span>
                {isSelected && <ChevronRight size={14} className="shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Editorial Feature Card */}
        <div className="bg-[#0E2238] border border-[#1A365D] rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]"
            >
              {/* Clickable Media Display (Left 7 Cols) */}
              <div
                onClick={() => onSelectProductForMedia(activeProduct)}
                className="lg:col-span-7 relative bg-[#050D18] flex items-center justify-center overflow-hidden min-h-[320px] lg:min-h-full group cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProductForMedia(activeProduct);
                  }
                }}
                aria-label={`View full details of ${activeProduct.name}`}
              >
                {activeProduct.video ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <video
                      src={activeProduct.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover max-h-[500px]"
                    />
                    <div className="absolute inset-0 bg-[#0B192C]/25 group-hover:bg-[#0B192C]/10 transition-colors" />
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className={`w-full h-full max-h-[480px] ${
                        activeProduct.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                      } rounded-lg transition-transform duration-700 group-hover:scale-[1.02]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2238]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Subtle Informational Badge Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B192C]/80 backdrop-blur-md text-[#00B4D8] border border-[#00B4D8]/30">
                    {activeProduct.badge || 'Official Product'}
                  </span>
                  {activeProduct.video && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#C1121F]/90 text-white flex items-center gap-1 shadow">
                      <Play size={10} className="fill-white" />
                      Video Footage
                    </span>
                  )}
                </div>

                {/* Subtle Editorial Hover Cue */}
                <div className="hidden sm:flex absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center gap-1.5 text-xs font-medium text-white bg-[#0B192C]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-md pointer-events-none z-10">
                  <span>View Product</span>
                  <ArrowUpRight size={13} className="text-[#00B4D8]" />
                </div>
              </div>

              {/* Information & Technical Details (Right 5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1A365D]">
                <div>
                  <div className="text-[#00B4D8] font-mono text-xs tracking-wider uppercase mb-2 font-semibold">
                    System Profile #{selectedIndex + 1}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold !text-white text-white mb-4 leading-snug">
                    {activeProduct.name}
                  </h3>

                  {/* Highlights and Verified parameters */}
                  <div className="space-y-3 mb-6">
                    {activeProduct.capacity && (
                      <div className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={16} className="text-[#00B4D8] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-300">Standard Operating Capacity: </span>
                          <span className="!text-white text-white font-bold font-mono">{activeProduct.capacity}</span>
                        </div>
                      </div>
                    )}

                    {activeProduct.application && (
                      <div className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={16} className="text-[#00B4D8] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-gray-300">Target Application: </span>
                          <span className="!text-white text-white font-bold">{activeProduct.application}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 size={16} className="text-[#00B4D8] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-300">Fabrication Standards: </span>
                        <span className="!text-white text-white font-medium">Engineered in Prayagraj, Bangalore & Hyderabad</span>
                      </div>
                    </div>
                  </div>

                  {activeProduct.highlight && (
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 bg-[#0B192C]/80 p-4 rounded-xl border border-white/10">
                      {activeProduct.highlight}
                    </p>
                  )}
                </div>

                {/* Single Primary Action: Enquire on WhatsApp */}
                <div className="pt-6 border-t border-[#1A365D]">
                  <a
                    href={createProductWhatsAppUrl(activeProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00B4D8] text-[#0B192C] font-bold text-sm rounded-sm hover:bg-white transition-all duration-300 shadow-md group focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProductsShowcase;
