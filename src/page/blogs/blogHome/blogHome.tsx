import '../blog.css';
import BlogFavourite from './blogFavourite';
import { BlogItem } from './blogFavourite';
import { BlogBanner } from './blogs.types';

export default function BlogHome() {

    const CATEGORIES = [
        "TECH",
        "CASUAL TECH",
        "NON TECH"
    ]

    const BLOGS: BlogBanner[] = [
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

        <section id="blog-home">
            {/* Empty Divs. Don't Delete */}
            <div></div>

            <main>

                <BlogFavourite />

                <div id="category-tab">
                    {CATEGORIES.map( category => <CategoryTab category={category}/> )}
                </div>
                
                <div id='blog-list'>
                    {BLOGS.map( blog => <BlogItem blog={blog} /> )}
                </div>

            </main>

            {/* Empty Divs. Don't Delete */}
            <div></div>
        </section>

    );
}

function CategoryTab({ 
    category 
} : { category: string}) {

    return (
        <div className='category-container'>
            {category}
        </div>
    )

}