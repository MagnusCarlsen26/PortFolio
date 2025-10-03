import './app.css';
import BlogHome from './page/blogs/blogHome/blogHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogRead from './page/blogs/blogRead/BlogRead';
import Navbar from './page/navbar/Navbar';
import Footer from './page/footer/Footer';

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/blogs" element={<BlogHome />} />
            <Route path="/blog/read/:slug" element={<BlogRead />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
