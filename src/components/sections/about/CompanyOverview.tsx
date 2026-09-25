import { motion } from 'framer-motion';

const CompanyOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 leading-tight">
              Turnkey EPC Solutions for Environmental Infrastructure
            </h2>
            <div className="w-16 h-1 bg-[#C1121F] rounded-full mb-8"></div>
            
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We would like to introduce ourselves as a professionally managed organization specializing in Water & Wastewater Treatment Solutions and allied industrial services. Established in 2024 by a dedicated group of engineers, RAM Services Enterprises is a premier Engineering, Procurement, and Construction (EPC) contractor.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our expertise spans the design, drawing, construction, supply, erection, and commissioning of Water, Effluent, Sewage, Leachate, and Common Effluent treatment plants, alongside advanced Multiple Effect Evaporation Systems.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#F7FAFC] p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-[#1A365D] mb-2">2024</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Year Established</div>
            </div>
            <div className="bg-[#F7FAFC] p-8 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-[#1A365D] mb-2">50+</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Employees</div>
              <p className="text-xs text-gray-400 mt-2">Competent & experienced engineers, environmental scientists, and support staff.</p>
            </div>
            <div className="bg-[#F7FAFC] p-8 rounded-xl border border-gray-100 shadow-sm sm:col-span-2">
              <div className="text-lg font-bold text-[#1A365D] mb-2">Integrated Turnkey Execution</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beyond water treatment, we deliver complete industrial solutions including fabrication, structural works, electrical & automation, and heavy civil works.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
