import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Homepage from './components/Homepage/Homepage.tsx';
import TeamPage from './components/Team/TeamPage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsPage from './components/AboutUsPage/AboutUsPage.tsx';
import ServicePage from './components/ServicePage/ServicePage.tsx';
import ContactPage from './components/ContactPage/ContactPage';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
