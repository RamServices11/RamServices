import HeroSection from '../components/sections/HeroSection';
import CredibilityStrip from '../components/sections/CredibilityStrip';
import WhoWeAre from '../components/sections/WhoWeAre';
import CoreSolutions from '../components/sections/CoreSolutions';
import HowWeWork from '../components/sections/HowWeWork';
import FourRs from '../components/sections/FourRs';
import HomeFeaturedProjects from '../components/sections/HomeFeaturedProjects';
import Industries from '../components/sections/Industries';
import CtaSection from '../components/sections/CtaSection';
import usePageSeo from '../hooks/usePageSeo';

const Home = () => {
  usePageSeo({
    title: 'RAM Services Enterprises | Water & Wastewater Treatment Solutions',
    description: 'RAM Services Enterprises provides turnkey EPC engineering for Water & Wastewater Treatment Solutions, including industrial STP, ETP, WTP, and ZLD systems.',
    canonicalPath: '/'
  });

  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <WhoWeAre />
      <CoreSolutions />
      <HowWeWork />
      <HomeFeaturedProjects />
      <FourRs />
      <Industries />
      <CtaSection />
    </>
  );
};

export default Home;
