import IndustriesHero from '../components/sections/industries/IndustriesHero';
import IndustryIntroduction from '../components/sections/industries/IndustryIntroduction';
import IndustryDirectory from '../components/sections/industries/IndustryDirectory';
import EngineeringApplications from '../components/sections/industries/EngineeringApplications';
import EngineeringWorkflow from '../components/sections/industries/EngineeringWorkflow';
import IndustriesCTA from '../components/sections/industries/IndustriesCTA';
import usePageSeo from '../hooks/usePageSeo';

const Industries = () => {
  usePageSeo({
    title: 'Industrial Water Solutions by Sector | RAM Services Enterprises',
    description: 'Tailored water and wastewater engineering solutions for chemicals, pharmaceuticals, food & beverage, textile, manufacturing, and commercial infrastructure.',
    canonicalPath: '/industries'
  });

  return (
    <>
      <IndustriesHero />
      <IndustryIntroduction />
      <IndustryDirectory />
      <EngineeringApplications />
      <EngineeringWorkflow />
      <IndustriesCTA />
    </>
  );
};

export default Industries;
