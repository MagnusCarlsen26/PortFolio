import '../blog.css';
import { BlogBanner } from './blogs.types';

export default function BlogFavourite() {

    const favouriteBlogItems: BlogBanner[] = [
        {
            id: "another-id",
            slug: "another-blog",
            title: "Another Blog Post with a Significantly Longer Title to Test Responsiveness",
            date: "15 February 2024",
            year: 2024,
        },
        {
            id: "third-id",
            slug: "third-blog-post",
            title: "The Third Blog Entry Which Also Has an Extended Description",
            date: "March 24",
            year: 2024,
        },
        {
            id: "fourth-id",
            slug: "fourth-blog-post",
            title: "A Fourth Blog Entry About Various and Sundry Things that Might Interest You",
            date: "April 24",
            year: 2024,
        },
        {
            id: "fifth-id",
            slug: "fifth-blog",
            title: "My Fifth Blog",
            date: "May 24",
            year: 2024,
        }
    ]

    return (
        <section id="blog-favourite">

            <span className='title'>Khushal's Favourite</span>       
            <div className='items'>
                {favouriteBlogItems.map( blog => <BlogItem blog={blog}/> )}
            </div>    
            

        </section>
    );
}

export function BlogItem({ 
    blog 
}: { blog: BlogBanner }) {

    return (

        <div id='blog-favourite-item'>
            <p className='title'>{blog.title}</p>
            <p className='date'>{blog.date}</p>
        </div>

    )

}   