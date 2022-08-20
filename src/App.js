import { Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './components/Landing/Introduction';
import Nav from './components/Navbar/Nav';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <>
    <Nav/>
    <div className="App">
      <header className="App-header">
        <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
    </>
  );
}

export default App;
