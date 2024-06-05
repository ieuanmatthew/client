import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route index path="/Home" element={<Home></Home>}></Route>
          <Route index path="/Resume" element={<Resume></Resume>}></Route>
          <Route index path="/Projects" element={<Projects></Projects>}></Route>
          <Route index path="/Blog" element={<Blog></Blog>}></Route>
          <Route index path="/Project" element={<Project></Project>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
