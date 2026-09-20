import ProjectsHero from '../components/sections/projects/ProjectsHero';
import ProjectOverview from '../components/sections/projects/ProjectOverview';
import FeaturedProjects from '../components/sections/projects/FeaturedProjects';
import ProjectCategories from '../components/sections/projects/ProjectCategories';
import OperationsProjects from '../components/sections/projects/OperationsProjects';
import ProjectsVendorExperience from '../components/sections/projects/ProjectsVendorExperience';
import ProjectsTurnkey from '../components/sections/projects/ProjectsTurnkey';
import EngineeringCapabilities from '../components/sections/projects/EngineeringCapabilities';
import IndustryContext from '../components/sections/projects/IndustryContext';
import ProjectsCTA from '../components/sections/projects/ProjectsCTA';
import usePageSeo from '../hooks/usePageSeo';

const Projects = () => {
  usePageSeo({
    title: 'Water & Wastewater Treatment Projects | RAM Services Enterprises',
    description: 'Review representative engineering project executions and operations across textile, chemical, manufacturing, commercial, and healthcare sectors.',
    canonicalPath: '/projects'
  });

  return (
    <>
      <ProjectsHero />
      <ProjectOverview />
      <FeaturedProjects />
      <ProjectCategories />
      <OperationsProjects />
      <ProjectsVendorExperience />
      <ProjectsTurnkey />
      <EngineeringCapabilities />
      <IndustryContext />
      <ProjectsCTA />
    </>
  );
};

export default Projects;
