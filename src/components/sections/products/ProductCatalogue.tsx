import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ArrowUpRight, Play, Images, SlidersHorizontal, Cpu } from 'lucide-react';
import { PRODUCTS, CATEGORIES, createProductWhatsAppUrl, type ProductItem, type ProductCategory } from '../../../data/products';

interface ProductCatalogueProps {
  onSelectProductForMedia: (product: ProductItem) => void;
}

const ProductCatalogue = ({ onSelectProductForMedia }: ProductCatalogueProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        product.name.toLowerCase().includes(q) ||
        (product.capacity && product.capacity.toLowerCase().includes(q)) ||
        (product.application && product.application.toLowerCase().includes(q)) ||
        (product.badge && product.badge.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Count items per category
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: PRODUCTS.length };
    PRODUCTS.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <section id="product-catalogue" className="py-20 lg:py-28 bg-[#F7FAFC] scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">
            OFFICIAL PRODUCT CATALOGUE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B192C] mb-4">
            Engineered Systems & Plant Equipment
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Complete catalogue of water, wastewater, process equipment and industrial packaging machinery supplied and engineered by RAM Services Enterprises.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search */}
        <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="w-full md:w-auto flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = counts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0B192C] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#00B4D8] text-[#0B192C]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search equipment or capacity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#00B4D8] text-gray-800 placeholder-gray-400 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center max-w-md mx-auto border border-gray-200">
            <SlidersHorizontal className="mx-auto text-gray-300 mb-3" size={32} />
            <h3 className="text-lg font-bold text-[#0B192C] mb-1">No matching equipment found</h3>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-[#00B4D8] text-[#0B192C] font-semibold text-xs rounded-sm hover:bg-[#0B192C] hover:text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => {
                const isVideo = Boolean(product.video);
                const hasMultipleImages = Boolean(product.image && product.secondaryImage);

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                    className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#00B4D8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    {/* Clickable Product Image / Media Area */}
                    <div
                      onClick={() => onSelectProductForMedia(product)}
                      className="relative aspect-[4/3] bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center border-b border-gray-100 cursor-pointer group/media"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectProductForMedia(product);
                        }
                      }}
                      aria-label={`View ${product.name} details`}
                    >
                      {isVideo ? (
                        <div className="relative w-full h-full flex items-center justify-center bg-[#050D18]">
                          <video
                            src={product.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover opacity-90 group-hover/media:opacity-100 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-[#0B192C]/20 group-hover/media:bg-transparent transition-colors" />
                        </div>
                      ) : product.image ? (
                        <div className="relative w-full h-full flex items-center justify-center p-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className={`w-full h-full ${
                              product.objectFit === 'contain' ? 'object-contain' : 'object-cover rounded-lg'
                            } transform scale-100 group-hover/media:scale-[1.03] transition-transform duration-500 ease-out`}
                          />
                          <div className="absolute inset-0 bg-transparent group-hover/media:bg-[#0B192C]/10 transition-colors pointer-events-none" />
                        </div>
                      ) : (
                        /* Engineered Schematic Card (For verified products without photo files) */
                        <div className="relative w-full h-full bg-[#0B192C] text-white p-6 flex flex-col justify-between overflow-hidden">
                          <div 
                            className="absolute inset-0 opacity-10"
                            style={{ 
                              backgroundImage: 'linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)', 
                              backgroundSize: '24px 24px' 
                            }}
                          />
                          <div className="relative z-10 flex justify-between items-start">
                            <span className="text-[11px] font-mono text-[#00B4D8] tracking-widest uppercase font-semibold">
                              ENGINEERED SPEC
                            </span>
                            <Cpu size={20} className="text-[#00B4D8]/60" />
                          </div>
                          
                          <div className="relative z-10 text-center py-2">
                            <div className="text-xl font-bold font-mono !text-white text-white mb-1">
                              {product.capacity}
                            </div>
                            <div className="text-xs text-gray-300">
                              Custom Site Execution
                            </div>
                          </div>

                          <div className="relative z-10 text-[11px] text-gray-400 text-center border-t border-white/10 pt-2 font-mono">
                            RAM SERVICES ENTERPRISES
                          </div>
                        </div>
                      )}

                      {/* Top Informational Badges (Informational, visually secondary) */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                        {product.badge && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide bg-white/95 backdrop-blur-sm text-[#1A365D] border border-gray-200/60 shadow-sm">
                            {product.badge}
                          </span>
                        )}

                        {isVideo ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#0B192C]/80 backdrop-blur-sm text-white border border-white/10 shadow-sm flex items-center gap-1">
                            <Play size={8} className="fill-current text-[#00B4D8]" />
                            Video
                          </span>
                        ) : hasMultipleImages ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#0B192C]/80 backdrop-blur-sm text-gray-200 border border-white/10 shadow-sm flex items-center gap-1">
                            <Images size={10} className="text-[#00B4D8]" />
                            2 Views
                          </span>
                        ) : null}
                      </div>

                      {/* Subtle Understated Editorial Hover Cue in Corner */}
                      <div className="hidden sm:flex absolute bottom-2.5 right-2.5 opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 items-center gap-1 text-[11px] font-medium text-white bg-[#0B192C]/80 backdrop-blur-sm px-2.5 py-1 rounded shadow-sm pointer-events-none z-10">
                        <span>View Product</span>
                        <ArrowUpRight size={12} className="text-[#00B4D8]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                      <div>
                        {/* Official Product Name */}
                        <h3 className="text-base font-bold text-[#0B192C] group-hover:text-[#00B4D8] transition-colors leading-snug mb-2">
                          {product.name}
                        </h3>

                        {/* Capacity & Application Badges */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-4">
                          {product.capacity && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-800 border border-gray-200/60 font-mono">
                              {product.capacity}
                            </span>
                          )}

                          {product.application && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#00B4D8]/10 text-[#007799] border border-[#00B4D8]/20">
                              {product.application}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Card Action Row: Minimal, refined text link */}
                      <div className="pt-3 border-t border-gray-100 mt-auto">
                        <a
                          href={createProductWhatsAppUrl(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center justify-between text-xs font-semibold text-gray-600 hover:text-[#0B192C] transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-[#00B4D8] rounded"
                          aria-label={`Enquire about ${product.name} on WhatsApp`}
                        >
                          <span className="flex items-center gap-1.5 text-[#1A365D] group-hover/link:text-[#00B4D8] transition-colors">
                            {/* WhatsApp SVG Icon */}
                            <svg
                              className="w-3.5 h-3.5 text-[#25D366] fill-current shrink-0"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.02 2.59.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.22-.16-.47-.28z" />
                            </svg>
                            <span>WhatsApp Enquire</span>
                          </span>
                          <ArrowRight size={13} className="text-[#00B4D8] group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCatalogue;
