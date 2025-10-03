import './app.css';
import BlogHome from './page/blogs/blogHome/blogHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogRead from './page/blogs/blogRead/BlogRead';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blog/read/:slug" element={<BlogRead />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
