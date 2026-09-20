import AboutHero from '../components/sections/about/AboutHero';
import CompanyOverview from '../components/sections/about/CompanyOverview';
import EngineeringProcess from '../components/sections/about/EngineeringProcess';
import WaterChallenge from '../components/sections/about/WaterChallenge';
import InHouseCapabilities from '../components/sections/about/InHouseCapabilities';
import VisionMission from '../components/sections/about/VisionMission';
import FourRs from '../components/sections/FourRs';
import Leadership from '../components/sections/about/Leadership';
import Locations from '../components/sections/about/Locations';
import VendorExperience from '../components/sections/about/VendorExperience';
import StrategicRoadmap from '../components/sections/about/StrategicRoadmap';
import AboutCTA from '../components/sections/about/AboutCTA';
import usePageSeo from '../hooks/usePageSeo';

const About = () => {
  usePageSeo({
    title: 'About RAM Services Enterprises | Water & Wastewater Engineering',
    description: 'Learn about RAM Services Enterprises, our engineering leadership, technical team, and proven experience in industrial water and wastewater management across India.',
    canonicalPath: '/about'
  });

  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <InHouseCapabilities />
      <EngineeringProcess />
      <WaterChallenge />
      <VisionMission />
      <FourRs />
      <Leadership />
      <Locations />
      <VendorExperience />
      <StrategicRoadmap />
      <AboutCTA />
    </>
  );
};

export default About;
