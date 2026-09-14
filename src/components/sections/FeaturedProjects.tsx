import { MapPin, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      client: 'The Global Green Company',
      location: 'Bangalore, Karnataka',
      capacity: '300 KLD ETP with RO, UF & 20KLD ZLD',
      type: 'ETP & ZLD',
      image: '/assets/equipment/packaged-treatment-plant.jpeg', // Genuine project photo
    },
    {
      client: 'ITC (ICML)',
      location: 'Medak, Hyderabad',
      capacity: '502 KLD ETP & 100 KLD STP',
      type: 'ETP & STP (O&M)',
      image: '/assets/equipment/compact-treatment-plant.jpeg', // Genuine project photo
    },
    {
      client: 'Vintage Coffee',
      location: 'Hyderabad, Telangana',
      capacity: '200 KLD ETP & 30 KLD STP',
      type: 'ETP & STP',
      image: '/assets/equipment/aeration-system.jpeg', // Genuine project photo
    }
  ];

  return (
    <section className="py-24 bg-[#0B192C] relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,100 L100,0" stroke="#00B4D8" strokeWidth="0.5" fill="none" />
          <path d="M0,80 L100,-20" stroke="#00B4D8" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Proven Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Installations
            </h2>
            <p className="text-gray-400 text-lg">
              Showcasing high-capacity engineering solutions across leading industries.
            </p>
          </div>
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#00B4D8] text-[#00B4D8] font-medium rounded-sm hover:bg-[#00B4D8] hover:text-[#0B192C] transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1A365D] rounded-xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.client} Facility`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-col items-start gap-2">
                  <span className="px-3 py-1 bg-[#0B192C]/85 backdrop-blur-md text-[#00B4D8] text-[11px] font-mono tracking-wider uppercase rounded border border-[#00B4D8]/30">
                    Representative Engineering Execution
                  </span>
                  <span className="px-3 py-1 bg-[#00B4D8] text-[#0B192C] text-xs font-bold uppercase rounded-sm">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00B4D8] transition-colors">
                  {project.client}
                </h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Activity className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-300 font-medium">
                      {project.capacity}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-gray-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-400 text-sm">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
