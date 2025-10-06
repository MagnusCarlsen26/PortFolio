import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogsData from '../../constants/blogs.json';
import './blogs.css';

interface Blog {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  year: number;
  favourite: boolean;
  description: string;
}

const Blogs: React.FC = () => {
  // Get all blogs and flatten them into a single array
  const allBlogs: Blog[] = Object.values(blogsData).flat();
  const navigate = useNavigate();
  
  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-list">
        {allBlogs
          .filter(blog => blog.favourite)
          .map((blog, index) => (
            <div
              key={blog.id}
              className="blog-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleBlogClick(blog.slug)}
            >
              <span className="blog-title">&gt; {blog.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;