import AboutHero from '../components/sections/about/AboutHero';
import CompanyOverview from '../components/sections/about/CompanyOverview';
import EngineeringProcess from '../components/sections/about/EngineeringProcess';
import WaterChallenge from '../components/sections/about/WaterChallenge';
import InHouseCapabilities from '../components/sections/about/InHouseCapabilities';
import VisionMission from '../components/sections/about/VisionMission';
import FourRs from '../components/sections/FourRs';
import Leadership from '../components/sections/about/Leadership';
import Locations from '../components/sections/about/Locations';
import StrategicRoadmap from '../components/sections/about/StrategicRoadmap';
import AboutCTA from '../components/sections/about/AboutCTA';

const About = () => {
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
      <StrategicRoadmap />
      <AboutCTA />
    </>
  );
};

export default About;
