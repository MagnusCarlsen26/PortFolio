import '../blog.css';
import BlogFavourite from './blogFavourite';

export default function BlogHome() {

    const CATEGORIES = [
        "TECH",
        "CASUAL TECH",
        "NON TECH"
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