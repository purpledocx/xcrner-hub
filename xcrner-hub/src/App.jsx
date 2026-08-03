import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Projects from './pages/Projects';
import PwdAnalyzer from './pages/PwdAnalyzer';

export default function App() {
  return (
    <BrowserRouter>
      {/* fullscreen wrapper with bg */}
      <div 
        className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat m-0" 
        style={{ backgroundImage: "url('/img/bg.jpg')" }}
      >
        <Header />
        
        {/* dinamical rendering of pages here*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stuff" element={<Stuff />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analyzer" element={<PwdAnalyzer />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}