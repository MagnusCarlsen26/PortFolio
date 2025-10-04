import "../blog.css";
import { useParams } from "react-router-dom";
import { Blog } from '../blogHome/blogs.types';
import blogsData from '../../../constants/blogs.json';
import Footer from '../../footer/Footer'; // Import the Footer component
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useState, useEffect } from 'react';
import React from 'react';
import BlogImage from '../../../components/BlogImage';

// Import blog content from JSON
import blogsContent from '../../../content/blogs/blogsContent.json';

import CalenderSvg from "../../../assets/svgs/CalenderSvg";
import TagSvg from "../../../assets/svgs/TagSvg";

// Type for the blogs content
type BlogsContent = {
  [key: string]: string;
};

// Convert the imported JSON to a typed object
const markdownFiles: BlogsContent = blogsContent;

const BLOGS: Record<string, Blog[]> = blogsData;

const BlogRead = () => {
    const { slug } = useParams();
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    const blog = Object.values(BLOGS)
        .flat()
        .find(blog => {
            console.log(blog.slug, slug)
            return blog.slug === slug
        });

    useEffect(() => {
        if (!blog) return;
        
        try {
            const content = markdownFiles[blog.markdownFile];
            if (!content) {
                throw new Error(`Markdown file "${blog.markdownFile}" not found`);
            }
            setMarkdownContent(content);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load blog content');
            setLoading(false);
        }
    }, [blog]);

    if (!blog) {
        return <div>Blog not found!</div>;
    }

    if (loading) {
        return <div>Loading blog...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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

                <div className="content markdown-content">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                        components={{
                            img: ({ src, alt, title }) => (
                                <BlogImage src={src || ''} alt={alt || ''} title={title} />
                            ),
                            p: ({ children, ...props }) => {
                                // Check if this paragraph contains an image
                                const hasImage = React.Children.toArray(children).some(
                                    child => React.isValidElement(child) && child.type === 'img'
                                );
                                
                                if (hasImage) {
                                    return <p className="image-paragraph" {...props}>{children}</p>;
                                }
                                return <p {...props}>{children}</p>;
                            }
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
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