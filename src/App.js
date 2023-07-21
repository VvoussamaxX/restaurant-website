import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Team from './pages/Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;






