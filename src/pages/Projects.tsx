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

const Projects = () => {
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
