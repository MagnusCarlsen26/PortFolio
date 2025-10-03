import './app.css';
import BlogHome from './page/blogs/blogHome/blogHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogRead from './page/blogs/blogRead/BlogRead';
import Navbar from './page/navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blog/read/:slug" element={<BlogRead />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
