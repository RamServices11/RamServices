import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Industries', path: '/industries' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 z-50 group"
          >
            <motion.img
              src="/assets/brand/ram-logo.jpeg"
              alt="RAM Services Enterprises"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              whileTap={{ scale: 0.96 }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
              }}
            />
            <div className="hidden flex-col">
              <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#0B192C]' : 'text-[#0B192C] md:text-white'}`}>
                RAM SERVICES
              </span>
              <span className={`text-xs md:text-sm tracking-widest font-medium ${isScrolled ? 'text-[#00B4D8]' : 'text-[#00B4D8] md:text-blue-200'}`}>
                ENTERPRISES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      to={link.path}
                      className={`relative px-3 py-2 block text-sm font-medium transition-colors hover:text-[#00B4D8] rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00B4D8] focus-visible:outline-offset-2 ${
                        isScrolled ? 'text-gray-700' : 'text-gray-800 md:text-white'
                      } ${isActive ? 'text-[#00B4D8]' : ''}`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-indicator"
                          className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-[#00B4D8] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/contact"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium text-sm transition-all hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-[#1A365D] text-white hover:bg-[#0B192C]'
                  : 'bg-white text-[#1A365D] hover:bg-gray-100'
              }`}
            >
              Request a Quote
              <ChevronRight size={16} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="text-gray-900" size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            <motion.ul
              className="flex flex-col gap-1"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.name}
                  className="border-b border-gray-100 py-3"
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-900 hover:text-[#00B4D8]"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#1A365D] text-white px-5 py-3.5 rounded-sm font-medium mt-4"
            >
              Request a Quote
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
