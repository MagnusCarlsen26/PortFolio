import "../blog.css";
import { useParams } from "react-router-dom";
import { Blog } from '../blogHome/blogs.types';
import blogsData from '../../../constants/blogs.json';
import Footer from '../../footer/Footer'; // Import the Footer component

import CalenderSvg from "../../../assets/svgs/CalenderSvg";
import TagSvg from "../../../assets/svgs/TagSvg";

const BLOGS: Record<string, Blog[]> = blogsData;

const BlogRead = () => {
    const { slug } = useParams();
    
    const blog = Object.values(BLOGS)
        .flat()
        .find(blog => {
            console.log(blog.slug, slug)
            return blog.slug === slug
        });

    if (!blog) {
        return <div>Blog not found!</div>;
    }

    return (
    <>
        <main id="blog-read">

            {/* Empty Divs. Don't Delete */}
            <div></div>
            
            <section className="blog-read-main">

                <header>
                    <h1>{blog.title}</h1>

                    <div className="meta">
                        <p>
                            {<CalenderSvg
                                width="16px"
                                height="16px" 
                                fill="#000"
                            />} &nbsp;
                            {blog.date} &nbsp;
                        </p>

                        <p>
                            &nbsp; {<TagSvg 
                                width="16px"
                                height="16px"
                                stroke="#aaa"
                                fill="#000"
                            />} &nbsp;
                            {blog.category}
                        </p>
                    </div>
                    
                </header>

                <div className="content">
                    {blog.description}
                </div>
            </section>

            {/* Empty Divs. Don't Delete */}
            <div></div>
        </main>
        <Footer />
    </>
    );
};
 
export default BlogRead;