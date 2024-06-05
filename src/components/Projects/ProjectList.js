import ProjectTile from './ProjectTile';
import { PROJECTS } from '../../Utility/constants';

function ProjectList() {
  return (
    <div className='project_list'>
        <h1> Projects </h1>
        <h2> A Comprehensive List of My Relavent Projects</h2>
        {PROJECTS.map((project) => {
        return(
            <ProjectTile
                title={project.title}
                description={project.description}
                footer1={project.footer1}
                footer2={project.footer2}
                footer3={project.footer3}>
            </ProjectTile>
        )
      })}

    </div>
  )
}

export default ProjectList;
