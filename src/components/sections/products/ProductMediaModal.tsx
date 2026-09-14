import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { createProductWhatsAppUrl, type ProductItem } from '../../../data/products';

interface ProductMediaModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

const ProductMediaModal = ({ product, onClose }: ProductMediaModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<0 | 1>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const hasMultipleImages = Boolean(product.image && product.secondaryImage);
  const currentImage = activeImageIndex === 1 && product.secondaryImage ? product.secondaryImage : product.image;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0B192C]/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="relative w-full max-w-4xl bg-[#0B192C] border border-[#1A365D] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A365D] bg-[#0E2238]">
            <div className="flex items-center gap-3">
              {product.badge && (
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded bg-[#00B4D8]/15 text-[#00B4D8] border border-[#00B4D8]/30">
                  {product.badge}
                </span>
              )}
              <h3 id="product-modal-title" className="text-lg font-bold text-white truncate max-w-[280px] sm:max-w-md">
                {product.name}
              </h3>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X size={22} />
            </button>
          </div>

          {/* Media Player / Viewer */}
          <div className="relative flex-1 min-h-[300px] max-h-[550px] bg-[#050D18] flex items-center justify-center overflow-hidden">
            {product.video ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={product.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full max-h-[520px] object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Custom Video Controls Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-xl bg-[#0B192C]/80 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay}
                      className="p-1.5 hover:text-[#00B4D8] transition-colors"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="p-1.5 hover:text-[#00B4D8] transition-colors"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <span className="text-xs text-gray-400">
                      Genuine Equipment Demonstration
                    </span>
                  </div>

                  <span className="text-xs text-[#00B4D8] font-mono">
                    RAM SERVICES OFFICIAL ASSET
                  </span>
                </div>
              </div>
            ) : currentImage ? (
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="max-h-[500px] w-auto max-w-full object-contain rounded-lg"
                />

                {/* Multi-image switcher */}
                {hasMultipleImages && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B192C]/80 backdrop-blur-md border border-white/10">
                    <button
                      onClick={() => setActiveImageIndex(0)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        activeImageIndex === 0
                          ? 'bg-[#00B4D8] text-[#0B192C] font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <ImageIcon size={13} />
                      {product.id === 'office-container' ? 'Exterior' : 'Primary View'}
                    </button>
                    <button
                      onClick={() => setActiveImageIndex(1)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        activeImageIndex === 1
                          ? 'bg-[#00B4D8] text-[#0B192C] font-semibold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <ImageIcon size={13} />
                      {product.id === 'office-container' ? 'Interior' : 'Secondary View'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-400">
                <p className="text-base">Engineered to Custom Client Specifications</p>
                <p className="text-sm text-gray-500 mt-1">Detailed drawings and technical layouts available upon project enquiry.</p>
              </div>
            )}
          </div>

          {/* Footer Details & Enquiry CTA */}
          <div className="p-6 bg-[#0E2238] border-t border-[#1A365D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                {product.capacity && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-white/10 text-white">
                    Capacity: {product.capacity}
                  </span>
                )}
                {product.application && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/20">
                    Application: {product.application}
                  </span>
                )}
              </div>
              {product.highlight && (
                <p className="text-xs text-gray-300 max-w-xl">
                  {product.highlight}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={createProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#00B4D8] text-[#0B192C] text-sm font-semibold rounded hover:bg-white transition-all shadow-md group focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
              >
                <span>Enquire on WhatsApp</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 border border-gray-600 text-gray-300 text-sm font-medium rounded hover:border-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductMediaModal;
