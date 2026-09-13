import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowLeft, FileText } from 'lucide-react';

const Terms = () => {
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
            <FileText className="text-[#00B4D8]" size={32} />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-gray-400 mt-2 text-sm">RAM Services Enterprises • Terms & Service Conditions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">1. Corporate Information</h2>
            <p>
              This website is operated by RAM Services Enterprises, a professionally managed organization specializing in Water & Wastewater Treatment Solutions (STP, ETP, WTP, ZLD) and allied industrial services including civil, electrical, pipeline, and structural execution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">2. Website Content & Intellectual Property</h2>
            <p>
              All technical descriptions, engineering specifications, project details, and corporate materials presented on this website are provided for informational and business enquiry purposes. Commercial proposals, system designs, and binding technical guarantees are established exclusively through formal written contracts executed between RAM Services Enterprises and client organizations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">3. Project Proposals & Quotations</h2>
            <p>
              Enquiries submitted through this website do not constitute a binding contract. Engineering proposals, capacity estimates, and commercial terms are subject to technical verification, site inspection, and detailed engineering assessment by our technical team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B192C] mb-4">4. Enquiries & Contact</h2>
            <p className="mb-4">
              For official correspondence or contractual clarifications, please contact:
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

export default Terms;
