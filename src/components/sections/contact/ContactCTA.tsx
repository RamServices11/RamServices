import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0B192C] relative overflow-hidden border-t border-[#1A365D]">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-[#0B192C] z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#00B4D8]"></span>
              <span className="text-[#00B4D8] text-xs font-semibold tracking-[0.2em] uppercase">
                START A CONVERSATION
              </span>
              <span className="inline-block w-8 h-[1px] bg-[#00B4D8]"></span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Have a Project in Mind?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Share your requirements with our team and let's discuss the right engineering approach for your project.
            </p>
            
            <button 
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#00B4D8] text-[#0B192C] font-semibold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group"
            >
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-20 pt-10 border-t border-[#1A365D] max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <span className="text-gray-400 font-light">Prefer to speak directly?</span>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
                <a href="mailto:contact@ramservices.in" className="text-white hover:text-[#00B4D8] font-medium transition-colors">
                  contact@ramservices.in
                </a>
                <a href="tel:+916392477942" className="text-white hover:text-[#00B4D8] font-medium transition-colors">
                  +91 6392477942
                </a>
                <a href="tel:+916309767400" className="text-white hover:text-[#00B4D8] font-medium transition-colors">
                  +91 6309767400
                </a>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
