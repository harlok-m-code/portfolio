import Toggle from "./Components/Toggle";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Contacts from './Components/navComponents/Contacts'
import { Route, Routes, Link } from 'react-router-dom'
import Project from "./Components/navComponents/Project";





function App() {
  return (
    <div classNameName="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="*" element={<Main/>} />
        <Route path="/project" element={<Project/>}/>
      </Routes>

    </div>
  );
}

export default App;
