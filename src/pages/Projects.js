import '../App.css';
import Header from '../components/Header';
import Description from '../components/Description';

import { PROJECT_TITLE, PROJECT_SUBTITLE, PROJECT_P1, PROJECT_P2, PROJECT_P3 } from '../Utility/constants';
import ProjectList from '../components/Projects/ProjectList';

function Projects() {
  return (
    <div className="App">
      <Header></Header>
      <Description title={PROJECT_TITLE} subtitle={PROJECT_SUBTITLE} p1={PROJECT_P1} p2={PROJECT_P2} p3={PROJECT_P3}></Description>
      <ProjectList></ProjectList>
    </div>
  )
}

export default Projects;
