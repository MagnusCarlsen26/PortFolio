import '../blog.css';
import { Blog } from './blogs.types';
import Blogs from "../../../constants/blogs.json"

const BLOGS: Record<string, Blog[]> = Blogs

export default function BlogFavourite() {

    return (
        <section id="blog-favourite">

            <span className='title'>Khushal's Favourite</span>       
            <div className='items'>
                {Object.values(BLOGS)
                    .flat()
                    .filter( blog => blog.favourite )
                    .map( blog => <BlogItem blog={blog} />)
                }
            </div>    
            

        </section>
    );
}

export function BlogItem({ 
    blog 
}: { blog: Blog }) {

    return (

        <div id='blog-favourite-item'>
            <p className='title'>{blog.title}</p>
            <p className='date'>{blog.date}</p>
        </div>

    )

}   