import ContactHero from '../components/sections/contact/ContactHero';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import ContactCredibility from '../components/sections/contact/ContactCredibility';
import ContactLocation from '../components/sections/contact/ContactLocation';
import ContactVendorTrust from '../components/sections/contact/ContactVendorTrust';
import ContactCTA from '../components/sections/contact/ContactCTA';

const Contact = () => {
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
