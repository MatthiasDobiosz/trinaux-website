import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Homepage from './components/Homepage/Homepage.tsx';
import TeamPage from './components/Team/TeamPage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/team" element={<TeamPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
