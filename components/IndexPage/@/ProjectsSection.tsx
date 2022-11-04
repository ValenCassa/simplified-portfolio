import _ from "lodash";
import { Project } from "types/Project";
import SectionContainer from "./SectionContainer";
import SectionTable from "./SectionTable";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  const slicedProjects = _.slice(sortedProjects, 0, 3);
  return (
    <SectionContainer name="projects" css={{ marginTop: "1.5em" }}>
      <SectionTable
        name="Latest Projects"
        type="project"
        data={slicedProjects}
      />
    </SectionContainer>
  );
};

export default ProjectsSection;
