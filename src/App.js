import { Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Landing/Introduction';
import UnderConstruction from './components/Sorry/UnderConstruction';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="intro" element={<Introduction />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
