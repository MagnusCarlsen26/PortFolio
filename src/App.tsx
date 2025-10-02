import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogHome from './page/blogs/blogHome/blogHome';
import Navbar from './page/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/blogs" element={<BlogHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
