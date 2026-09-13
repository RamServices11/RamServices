import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '../motion/Reveal';

interface Project {
  client: string;
  capacity: string;
  type: string;
  location: string;
  image: string;
}

const FEATURED: Project[] = [
  {
    client: 'The Global Green Company',
    capacity: '300 KLD ETP with RO, UF & 20KLD ZLD',
    type: 'ETP & ZLD',
    location: 'Bangalore, Karnataka',
    image: '/assets/equipment/packaged-treatment-plant.jpeg',
  },
  {
    client: 'Vintage Coffee',
    capacity: '200 KLD ETP & 30 KLD STP',
    type: 'ETP & STP',
    location: 'Hyderabad, Telangana',
    image: '/assets/equipment/aeration-system.jpeg',
  },
  {
    client: 'Delightful Gourmet (Licious)',
    capacity: '40 KLD',
    type: 'ETP',
    location: 'Hyderabad, Telangana',
    image: '/assets/equipment/filtration-skid.jpeg',
  },
];

/** One project row with its own scroll-linked image parallax. */
const ProjectRow = ({ project, isEven }: { project: Project; isEven: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
    >
      {/* Image Section */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-xl shadow-lg relative aspect-[4/3] lg:aspect-[16/10]">
        <div className="absolute inset-0 bg-[#0B192C]/10 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
        <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#0B192C]/85 backdrop-blur-md text-[#00B4D8] text-[11px] font-mono tracking-wider uppercase rounded border border-[#00B4D8]/30">
          Representative Engineering Execution
        </span>
        <motion.img
          src={project.image}
          alt={project.client}
          style={{ y: imageY }}
          className="w-full h-[112%] -top-[6%] relative object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#F0F8FF] text-[#1A365D] text-xs font-bold uppercase tracking-wider rounded border border-[#00B4D8]/20">
            {project.type}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-[#0B192C] mb-3 group-hover:text-[#00B4D8] transition-colors">
          {project.client}
        </h3>

        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {project.capacity}
        </p>

        <div className="flex items-center gap-2 text-gray-500 font-medium pb-8 border-b border-gray-100">
          <MapPin size={18} className="text-[#00B4D8]" />
          {project.location}
        </div>
      </div>
    </motion.div>
  );
};

const HomeFeaturedProjects = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Built In The Field
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B192C] leading-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[#1A365D] font-semibold hover:text-[#00B4D8] transition-colors group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="flex flex-col gap-12 lg:gap-24">
          {FEATURED.map((project, index) => (
            <ProjectRow key={project.client} project={project} isEven={index % 2 === 0} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
