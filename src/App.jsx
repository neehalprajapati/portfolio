import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Mywork from './Pages/Mywork/Mywork';
import Contact from './Pages/Contact/Contact';
import '../src/App.css'
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
