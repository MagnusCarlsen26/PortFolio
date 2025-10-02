import BlogHome from './page/blogs/blogHome/blogHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<BlogHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
