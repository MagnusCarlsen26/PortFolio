import './app.css';
import BlogHome from './page/blogs/blogHome/blogHome';
import { Routes, Route, useLocation } from 'react-router-dom';
import BlogRead from './page/blogs/blogRead/BlogRead';
import Navbar from './page/navbar/Navbar';
import Home from './page/home/Home'; // Import the new Home component
import Contact from './page/contact/Contact'; // Import the new Contact component
import About from './page/about/About'; // Import the new About component

function App() {

  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  return (
    <div
      style={{
        height: isHomePage ? '100vh' : 'auto',
        display: 'flex',        
        flexDirection: 'column',
      }}
    >
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<BlogHome />} />
            <Route path="/blog/read/:slug" element={<BlogRead />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </div>
  );
}

export default App;
