import "../blog.css";
import { useParams } from "react-router-dom";
import { Blog } from '../blogHome/blogs.types';
import blogsData from '../../../constants/blogs.json';


const BLOGS: Record<string, Blog[]> = blogsData;

const BlogRead = () => {
    const { slug } = useParams();
    
    const blogToRender = Object.values(BLOGS)
        .flat()
        .find(blog => {
            console.log(blog.slug, slug)
            return blog.slug === slug
        });

    if (!blogToRender) {
        return <div>Blog not found!</div>;
    }

    return (
        <div className="blog-read">
            <h1>{blogToRender!.title}</h1>
            <p>Category: {blogToRender!.category}</p>
            <p>Date: {blogToRender!.date}</p>
            <p>Description: {blogToRender!.description}</p>
        </div>
    );
};
 
export default BlogRead;