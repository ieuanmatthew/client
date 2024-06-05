import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from "react-router-dom";

function ProjectTile({title, description, footer1, footer2, footer3}) {
  const history = useNavigate()

  return (
    <div className="project_tile_row">
        <div className="project_tile">
            <div className="project_tile_header">
                <h4 className="project_tile_title">{title}</h4>
                <div className="project_tile_link"><LaunchIcon onClick={() => history('/Project')}></LaunchIcon></div>
            </div>
            <div className="project_tile_content">
                <div className="project_tile_pic"></div>
                <div className="project_tile_copy">
                    <div className="project_tile_description">{description}</div>
                    <div className="project_tile_footer">
                        <div>{footer1}</div>
                        <div>{footer2}</div>
                        <a href='Projects'>{footer3}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectTile;
