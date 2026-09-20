import ContactHero from '../components/sections/contact/ContactHero';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import ContactCredibility from '../components/sections/contact/ContactCredibility';
import ContactLocation from '../components/sections/contact/ContactLocation';
import ContactVendorTrust from '../components/sections/contact/ContactVendorTrust';
import ContactCTA from '../components/sections/contact/ContactCTA';
import usePageSeo from '../hooks/usePageSeo';

const Contact = () => {
  usePageSeo({
    title: 'Contact RAM Services Enterprises | Water Treatment & Engineering',
    description: 'Get in touch with RAM Services Enterprises for plant inquiries, engineering consultations, and turnkey project quotes across Prayagraj, Hyderabad, and Bangalore.',
    canonicalPath: '/contact'
  });

  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactCredibility />
      <ContactLocation />
      <ContactVendorTrust />
      <ContactCTA />
    </>
  );
};

export default Contact;
