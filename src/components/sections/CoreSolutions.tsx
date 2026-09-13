import { Droplet, Factory, Zap, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../motion/Reveal';
import Stagger from '../motion/Stagger';
import TiltCard from '../motion/TiltCard';

const CoreSolutions = () => {
  const solutions = [
    {
      title: 'Water Treatment Systems',
      icon: <Droplet size={32} className="text-[#00B4D8]" />,
      description: 'Advanced RO systems, UF & Nano Filtration, Water Softeners, DM & EDI Units, and Sea Water Desalination plants.',
      link: '/solutions#water-treatment'
    },
    {
      title: 'Wastewater Management',
      icon: <Factory size={32} className="text-[#00B4D8]" />,
      description: 'Turnkey ETP, STP, CETP, and ZLD systems featuring MBR & SBR technology for complete recycling.',
      link: '/solutions#wastewater'
    },
    {
      title: 'Industrial Engineering',
      icon: <Zap size={32} className="text-[#00B4D8]" />,
      description: 'Pipeline networks, structural fabrication, heavy civil works, electrical cabling, and automation panels.',
      link: '/solutions#industrial'
    },
    {
      title: 'Operations & Maintenance',
      icon: <Settings size={32} className="text-[#00B4D8]" />,
      description: 'Comprehensive AMC, O&M services, and skilled manpower supply ensuring optimal plant performance.',
      link: '/solutions#operations'
    }
  ];

  return (
    <section className="py-24 bg-[#F0F8FF] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering robust, efficient, and sustainable infrastructure for industrial and municipal clients.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" amount={0.1}>
          {solutions.map((solution) => (
            <Stagger.Item key={solution.title} className="h-full [perspective:800px]">
              <TiltCard strength={7} className="h-full">
                <Link
                  to={solution.link}
                  className="bg-white p-8 rounded-xl border border-blue-50 hover:shadow-xl hover:shadow-[#0B192C]/10 transition-shadow duration-300 group flex flex-col h-full cursor-pointer block"
                >
                  <div className="w-16 h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-4 group-hover:text-[#00B4D8] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow">
                    {solution.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A365D] group-hover:text-[#00B4D8] transition-colors mt-auto">
                    Explore Solution
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </TiltCard>
            </Stagger.Item>
          ))}
        </Stagger>

      </div>
    </section>
  );
};

export default CoreSolutions;
