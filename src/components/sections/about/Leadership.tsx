import { motion } from 'framer-motion';
import { leadershipData } from '../../../data/leadership';
import { GraduationCap, Award, UserCheck } from 'lucide-react';

const Leadership = () => {
  const getInitials = (name: string) => {
    const parts = name.replace(/^(Dr\.|Mr\.|Mrs\.)\s*/i, '').split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section id="leadership" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Our Key Personnel
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6">
            Leadership & Technical Management
          </h2>
          <div className="w-16 h-1 bg-[#C1121F] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Backed by academic research background and over decades of combined field engineering experience.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leadershipData.map((member, index) => (
            <motion.div 
              key={member.id}
              className="bg-[#F7FAFC] rounded-xl overflow-hidden border border-gray-200 group hover:border-[#00B4D8] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="p-8">
                {/* Header Header Strip */}
                <div className="flex items-center gap-4 mb-6">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#00B4D8]" />
                  ) : (
                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#0B192C] border-2 border-[#00B4D8] flex items-center justify-center shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
                      <span className="text-xl font-bold text-[#00B4D8] font-mono tracking-wider">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-[#00B4D8]/10 text-[#00B4D8] font-bold tracking-wider text-xs uppercase rounded border border-[#00B4D8]/20 mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B192C] leading-snug">{member.name}</h3>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 pt-4 border-t border-gray-200/80">
                  <div className="flex items-start gap-3 text-sm">
                    <GraduationCap className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Qualification</span>
                      <p className="text-gray-700 font-medium">{member.education}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Award className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Experience</span>
                      <p className="text-gray-700 font-medium">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100/70 px-8 py-3 border-t border-gray-200 flex items-center gap-2 text-xs font-semibold text-gray-500">
                <UserCheck size={14} className="text-[#00B4D8]" />
                <span>Verified Personnel</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
