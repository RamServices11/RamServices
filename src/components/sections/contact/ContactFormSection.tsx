import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle2, Info, ArrowRight, MessageCircle } from 'lucide-react';
import SocialLinks from '../../ui/SocialLinks';

type FormState = 'idle' | 'submitting' | 'success' | 'error' | 'integration_pending';

interface FormFields {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirementType: string;
  location: string;
  message: string;
  privacy: boolean;
}

const EMPTY_FORM: FormFields = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  requirementType: '',
  location: '',
  message: '',
  privacy: false,
};

const REQUIREMENT_LABELS: Record<string, string> = {
  'new-water-treatment': 'New Water Treatment System',
  'wastewater-treatment': 'Wastewater Treatment',
  'plant-upgrade': 'Plant Upgrade / Expansion',
  'engineering-om': 'Engineering & O&M',
  'industrial-treatment': 'Industrial Treatment Requirement',
  'product-enquiry': 'Product Enquiry',
  'spare-parts': 'Spare Parts / Equipment',
  'service-maintenance': 'Service / Maintenance',
  other: 'Other',
};

/**
 * Formspree endpoint. Set VITE_FORMSPREE_ENDPOINT in .env to the full URL
 * (https://formspree.io/f/xxxxxxxx) that Formspree gives you for your form.
 */
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const ContactFormSection = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const updateField = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrorMessage('');
    setFormState('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // No endpoint configured yet — point the visitor at WhatsApp rather than
    // silently pretending the enquiry was delivered.
    if (!FORMSPREE_ENDPOINT) {
      setFormState('integration_pending');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Without this, Formspree redirects to its own thank-you page
          // instead of returning JSON to us.
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          company: form.company || 'Not provided',
          phone: form.phone || 'Not provided',
          industry: form.industry || 'Not provided',
          requirement: REQUIREMENT_LABELS[form.requirementType] ?? form.requirementType,
          projectLocation: form.location || 'Not provided',
          message: form.message,
          // Shows up as the email subject in the Formspree notification.
          _subject: `New enquiry from ${form.fullName}${form.company ? ` (${form.company})` : ''}`,
          // Lets you hit "reply" directly to the enquirer.
          _replyto: form.email,
        }),
      });

      if (response.ok) {
        setFormState('success');
        setForm(EMPTY_FORM);
        return;
      }

      // Formspree returns structured validation errors we can surface.
      const data = await response.json().catch(() => null);
      const detail = data?.errors?.map((err: { message: string }) => err.message).join(', ');
      setErrorMessage(detail || 'The enquiry could not be delivered. Please try again.');
      setFormState('error');
    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMessage('A network error occurred. Please check your connection and try again.');
      setFormState('error');
    }
  };

  const inputClasses =
    'w-full bg-[#F7FAFC] border border-gray-200 px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#00B4D8] focus:bg-white focus:ring-1 focus:ring-[#00B4D8] transition-all placeholder:text-gray-400';

  return (
    <section id="contact-info" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* LEFT: Contact Information */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B192C] mb-6 tracking-tight">
                Talk to Our Team
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-light mb-12">
                For project enquiries, quotations and technical requirements, share your details and our team will get back to you.
              </p>

              <div className="space-y-8">
                
                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#F7FAFC] border border-gray-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#00B4D8]/50 group-hover:bg-white transition-colors duration-300">
                    <Mail className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Email</span>
                    <a href="mailto:contact@ramservices.in" className="text-[#0B192C] font-medium hover:text-[#00B4D8] transition-colors text-lg block mb-1">
                      contact@ramservices.in
                    </a>
                    <a href="mailto:project@ramservices.in" className="text-[#0B192C] font-medium hover:text-[#00B4D8] transition-colors text-lg block">
                      project@ramservices.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#F7FAFC] border border-gray-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#00B4D8]/50 group-hover:bg-white transition-colors duration-300">
                    <Phone className="text-[#00B4D8]" size={20} />
                  </div>
                  <div className="space-y-2">
                    <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Phone</span>
                    <div>
                      <a href="tel:+916392477942" className="text-[#0B192C] font-medium text-lg block hover:text-[#00B4D8] transition-colors">
                        +91 6392477942
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a href="tel:+916309767400" className="text-[#0B192C] font-medium text-lg hover:text-[#00B4D8] transition-colors">
                        +91 6309767400
                      </a>
                      <a
                        href="https://wa.me/916309767400"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/30"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={13} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#F7FAFC] border border-gray-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#00B4D8]/50 group-hover:bg-white transition-colors duration-300">
                    <MapPin className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Head Office</span>
                    <span className="text-[#0B192C] font-medium text-lg block leading-relaxed">
                      0, Shikandara, Phoolpur<br />
                      Prayagraj, U.P. - 212109, India
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 bg-[#F7FAFC] border border-gray-100 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#00B4D8]/50 group-hover:bg-white transition-colors duration-300">
                    <Clock className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">Business Hours</span>
                    <span className="text-[#0B192C] font-medium text-lg block">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">Follow Us</span>
                  <SocialLinks variant="light" />
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="w-full lg:w-7/12" id="contact-form">
            <motion.div
              className="bg-white border border-gray-200 rounded-sm p-8 md:p-12 shadow-xl shadow-[#0B192C]/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#0B192C] mb-6">Send an Enquiry</h3>

              {/* WhatsApp quick-contact advisory */}
              <div className="mb-6 p-4 rounded-lg bg-[#F0F8FF] border border-[#00B4D8]/30 flex items-start gap-3 text-sm">
                <Info className="text-[#00B4D8] shrink-0 mt-0.5" size={18} />
                <div className="space-y-1">
                  <p className="font-semibold text-[#0B192C]">
                    Prefer a faster response?{' '}
                    <a
                      href="https://wa.me/916309767400"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00B4D8] hover:underline inline-flex items-center gap-1 font-bold"
                    >
                      Contact us directly on WhatsApp at +91 6309767400
                      <ArrowRight size={13} />
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    We typically respond to enquiries within one business day.
                  </p>
                </div>
              </div>
              
              {formState === 'success' ? (
                <div className="bg-green-50 border border-green-200 p-8 rounded-sm text-center flex flex-col items-center">
                  <CheckCircle2 className="text-green-500 mb-4" size={48} />
                  <h4 className="text-xl font-bold text-green-800 mb-2">Enquiry Sent Successfully</h4>
                  <p className="text-green-600 mb-6">Thank you for contacting RAM SERVICES ENTERPRISES. Our team has received your enquiry and will review your requirements.</p>
                  <p className="text-green-600 mb-6 font-medium">We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={resetForm}
                    className="text-sm font-semibold text-green-700 hover:text-green-900 border-b border-green-700 pb-1"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : formState === 'integration_pending' ? (
                <div className="bg-blue-50 border border-blue-200 p-8 rounded-sm text-center flex flex-col items-center">
                  <Info className="text-[#00B4D8] mb-4" size={48} />
                  <h4 className="text-xl font-bold text-[#0B192C] mb-2">Form Received — Email Delivery Pending</h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-md mx-auto">
                    Email enquiry delivery is not configured yet (<code className="bg-white px-1.5 py-0.5 rounded border border-blue-100 text-xs text-blue-900 font-mono">VITE_FORMSPREE_ENDPOINT</code> is unset). For immediate assistance and real-time response, please connect directly with our engineering team on WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="https://wa.me/916309767400?text=Hello%20RAM%20Services%20Enterprises,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded shadow transition-all"
                    >
                      <MessageCircle size={18} />
                      Chat on WhatsApp (+91 6309767400)
                    </a>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Return to Form
                    </button>
                  </div>
                </div>
              ) : formState === 'error' ? (
                <div className="bg-red-50 border border-red-200 p-8 rounded-sm text-center flex flex-col items-center">
                  <AlertCircle className="text-red-500 mb-4" size={48} />
                  <h4 className="text-xl font-bold text-red-800 mb-2">Something went wrong</h4>
                  <p className="text-red-600 mb-6">{errorMessage || 'An error occurred while sending your enquiry. Please try again or contact our team directly.'}</p>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-sm font-semibold text-red-700 hover:text-red-900 border-b border-red-700 pb-1"
                    >
                      Try Again
                    </button>
                    <a
                      href="https://wa.me/916309767400"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm rounded shadow transition-all"
                    >
                      <MessageCircle size={16} />
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#1A365D]">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className={inputClasses}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-[#1A365D]">Company Name</label>
                      <input 
                        type="text" 
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        className={inputClasses}
                        placeholder="Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-[#1A365D]">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={inputClasses}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1A365D]">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={inputClasses}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="industry" className="block text-sm font-medium text-[#1A365D]">Industry / Sector</label>
                      <input 
                        type="text" 
                        id="industry"
                        name="industry"
                        value={form.industry}
                        onChange={(e) => updateField('industry', e.target.value)}
                        className={inputClasses}
                        placeholder="e.g. Pharmaceuticals"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="requirementType" className="block text-sm font-medium text-[#1A365D]">Requirement Type *</label>
                      <div className="relative">
                        <select 
                          id="requirementType"
                          name="requirementType"
                          required
                          value={form.requirementType}
                          onChange={(e) => updateField('requirementType', e.target.value)}
                          className="w-full bg-[#F7FAFC] border border-gray-200 px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#00B4D8] focus:bg-white focus:ring-1 focus:ring-[#00B4D8] transition-all appearance-none text-[#1A365D]"
                        >
                          <option value="">Select Requirement...</option>
                          {Object.entries(REQUIREMENT_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-[#1A365D]">Project Location</label>
                    <input 
                      type="text" 
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      className={inputClasses}
                      placeholder="City, State, Country"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A365D]">Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full bg-[#F7FAFC] border border-gray-200 px-4 py-3.5 rounded-sm focus:outline-none focus:border-[#00B4D8] focus:bg-white focus:ring-1 focus:ring-[#00B4D8] transition-all resize-none placeholder:text-gray-400"
                      placeholder="Please provide details about your requirement..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3 mt-4">
                    <div className="flex items-center h-5 mt-0.5">
                      <input 
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        checked={form.privacy}
                        onChange={(e) => updateField('privacy', e.target.checked)}
                        className="w-4 h-4 border-gray-300 rounded bg-[#F7FAFC] text-[#00B4D8] focus:ring-[#00B4D8]"
                      />
                    </div>
                    <label htmlFor="privacy" className="text-sm text-gray-500 leading-tight">
                      I agree to the privacy policy and consent to RAM SERVICES ENTERPRISES storing and processing my personal data to handle my enquiry. *
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 mt-2 font-semibold rounded-sm transition-all duration-300 shadow-md ${
                      formState === 'submitting' 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none' 
                        : 'bg-[#0B192C] text-white hover:bg-[#1A365D] hover:shadow-[0_10px_20px_-10px_rgba(11,25,44,0.5)]'
                    }`}
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ArrowRight size={18} className="ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4 uppercase tracking-widest font-semibold">
                    * Required fields
                  </p>

                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
