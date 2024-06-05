import '../App.css';
import Header from '../components/Header';

function Project() {

  return (
    <div className="App">
        <Header></Header>
        <iframe
            src={'http://0.0.0.0:8000'}
            title="project"
            width="100%"
            height="1000px"
        >
        </iframe>
    </div>

  );
}

export default Project;
