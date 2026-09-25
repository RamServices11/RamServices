import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import SocialLinks from './SocialLinks';

// Explicit route map: the previous label.toLowerCase().replace(' ', '')
// approach silently produced /aboutus and /contactus, which don't match
// the routes registered in App.tsx (/about, /contact).
const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'Projects', to: '/projects' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact Us', to: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B192C] text-gray-300 pt-16 pb-8 border-t-4 border-[#00B4D8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex flex-col mb-6">
              <img src="/assets/brand/ram-logo.jpeg" alt="RAM Services Enterprises Logo" className="h-16 w-auto object-contain mb-4 rounded-sm" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                RAM SERVICES
              </span>
              <span className="text-xs md:text-sm tracking-widest font-medium text-[#00B4D8]">
                ENTERPRISES
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              We would like to introduce ourselves as a professionally managed organization specializing in Water & Wastewater Treatment Solutions and allied industrial services.
            </p>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-3">
                Follow Us
              </span>
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm hover:text-[#00B4D8] transition-colors flex items-center gap-1 group rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00B4D8] focus-visible:outline-offset-2"
                  >
                    <ChevronRight size={14} className="text-gray-600 group-hover:text-[#00B4D8] group-hover:translate-x-0.5 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Solutions</h3>
            <ul className="flex flex-col gap-3">
              {[
                'Water Treatment Systems',
                'Wastewater Management',
                'Structural Fabrication',
                'Electrical & Automation',
                'Civil Works',
                'Operation & Maintenance'
              ].map((solution) => (
                <li key={solution} className="text-sm hover:text-white transition-colors flex items-center gap-1">
                  <span className="w-1 h-1 bg-[#00B4D8] rounded-full mr-2"></span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                <div className="text-sm text-gray-400">
                  <span className="text-gray-200 block font-medium mb-1">Reg. Office (Prayagraj):</span>
                  0, Shikandara, Phoolpur, Landmark: Gram Sabha Nari Prayagraj, U.P. - 212109, India.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                <div className="text-sm text-gray-400">
                  <span className="text-gray-200 block font-medium mb-1">Branch Offices:</span>
                  Hyderabad (Telangana) & Bangalore (Karnataka)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                <div className="flex flex-col gap-1 text-sm">
                  <a href="tel:+916392477942" className="hover:text-white transition-colors">
                    +91 6392477942
                  </a>
                  <a href="tel:+916309767400" className="hover:text-white transition-colors">
                    +91 6309767400
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#00B4D8] shrink-0" size={18} />
                <a href="mailto:contact@ramservices.in" className="text-sm hover:text-white transition-colors">
                  contact@ramservices.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#00B4D8] shrink-0" size={18} />
                <a href="mailto:project@ramservices.in" className="text-sm hover:text-white transition-colors">
                  project@ramservices.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} RAM Services Enterprises. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
