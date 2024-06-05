import '../App.css';
import Description from '../components/Description';
import Header from '../components/Header';
import { ABOUT_P1, ABOUT_P2, ABOUT_P3, ABOUT_TITLE } from '../Utility/constants';
function App() {

  return (
    <div className="App">
      <Header></Header>
      <Description title={ABOUT_TITLE} p1={ABOUT_P1} p2={ABOUT_P2} p3={ABOUT_P3} page="Home"></Description>
    </div>
  );
}

export default App;
