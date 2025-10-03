import './app.css';
import BlogHome from './page/blogs/blogHome/blogHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogRead from './page/blogs/blogRead/BlogRead';
import Navbar from './page/navbar/Navbar';
import Home from './page/home/Home'; // Import the new Home component

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Add the Home component to the root path */}
            <Route path="/blogs" element={<BlogHome />} />
            <Route path="/blog/read/:slug" element={<BlogRead />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
