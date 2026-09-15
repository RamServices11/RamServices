import { motion } from 'framer-motion';
import { PenTool, FlaskConical, Building, Drill } from 'lucide-react';

const InHouseCapabilities = () => {
  const capabilities = [
    {
      title: 'Design & Execution',
      desc: 'Complete in-house engineering design and project execution capabilities.',
      icon: <PenTool className="text-[#00B4D8]" size={28} />
    },
    {
      title: 'Research & Analysis',
      desc: 'Dedicated facilities for R&D, water analysis, treatability, and pilot studies.',
      icon: <FlaskConical className="text-[#00B4D8]" size={28} />
    },
    {
      title: 'Manufacturing Base',
      desc: 'State-of-the-art manufacturing and fabrication workshops.',
      icon: <Drill className="text-[#00B4D8]" size={28} />
    },
    {
      title: 'Strategic Locations',
      desc: 'Fully equipped operational facilities in Prayagraj, Bangalore and Hyderabad.',
      icon: <Building className="text-[#00B4D8]" size={28} />
    }
  ];

  return (
    <section className="py-24 bg-[#0B192C] relative overflow-hidden">
      {/* Dark Technical Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjMDBCNEQ4IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0wIDYwaDYwTTAgMzBoNjBNMCAwaDYwTTAgMHY2ME0zMCAwdjYwTTYwIDB2NjAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built to Engineer <br/> In-House
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We are not just consultants. RAM Services Enterprises operates with robust internal infrastructure, ensuring quality control, precision, and efficiency from blueprint to final commissioning.
            </p>
            <div className="flex gap-4 items-center border-l-4 border-[#C1121F] pl-4">
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">
                Prayagraj &bull; Bangalore &bull; Hyderabad
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                className="bg-[#1A365D]/50 backdrop-blur-sm border border-[#1A365D] p-6 rounded-xl hover:border-[#00B4D8]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InHouseCapabilities;
