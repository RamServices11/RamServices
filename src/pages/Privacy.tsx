import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft, Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-20 bg-[#F7FAFC] min-h-screen">
      <div className="bg-[#0B192C] text-white py-12 mb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#00B4D8] hover:text-white transition-colors mb-4 font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <Shield className="text-[#00B4D8]" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-gray-400 mt-2 text-sm">RAM Services Enterprises • Official Data Protection Statement</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">1. Data Protection Commitment</h2>
            <p>
              At RAM Services Enterprises, we are committed to respecting your privacy and protecting any personal or operational information shared with us through our website. This privacy statement outlines how we handle data collected during project enquiries and business communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">2. Information Collection & Use</h2>
            <p className="mb-3">
              We collect information strictly necessary to evaluate project requirements, respond to technical enquiries, and provide quotations for Water & Wastewater Treatment Solutions and allied industrial services. Information collected through our contact forms includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Full Name and Professional Title</li>
              <li>Company / Organization Name</li>
              <li>Official Email Address and Contact Phone Number</li>
              <li>Project Location, Industry Sector, and Technical Requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">3. Data Sharing & Confidentiality</h2>
            <p>
              RAM Services Enterprises does not sell, lease, or distribute client contact details or project information to commercial third parties. Information shared with our engineering and operations teams is handled with strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">4. Contact Information</h2>
            <p className="mb-4">
              For any privacy-related queries or to request updates to your submitted information, please reach out to our administration team:
            </p>
            <div className="bg-[#F0F8FF] p-6 rounded-lg border border-[#00B4D8]/20 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#00B4D8]" />
                <a href="mailto:contact@ramservices.in" className="font-semibold text-[#0B192C] hover:text-[#00B4D8]">contact@ramservices.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#00B4D8]" />
                <a href="tel:+916309767400" className="font-semibold text-[#0B192C] hover:text-[#00B4D8]">+91 6309767400</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00B4D8] shrink-0 mt-0.5" />
                <span>0, Shikandara, Phoolpur, Prayagraj, U.P. - 212109, India</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
