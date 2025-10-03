import { useState } from 'react';
import '../blog.css';
import BlogFavourite from './blogFavourite';
import { BlogItem } from './blogFavourite';
import { Blog } from './blogs.types';
import Blogs from "../../../constants/blogs.json"

// NOTE: Hoisted to top so it isnt re declared
const CATEGORIES = [
    "TECH",
    "CASUAL TECH",
    "NON TECH"
]

const BLOGS: Record<string, Blog[]> = Blogs

export default function BlogHome() {


    const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>("TECH");

    return (

        <section id="blog-home">
            {/* Empty Divs. Don't Delete */}
            <div></div>

            <main>

                <BlogFavourite />

                <div id="category-tab">
                    {CATEGORIES.map( category => 
                        <CategoryTab 
                            key={category}
                            category={category}
                            onMouseDown={(category) => setSelectedCategory(category)}
                        /> 
                    )}
                </div>
                
                <div id='blog-list'>
                    {BLOGS[selectedCategory].map( blog => 
                        <BlogItem 
                            key={blog.slug}
                            blog={blog} 
                        /> 
                    )}
                </div>

            </main>

            {/* Empty Divs. Don't Delete */}
            <div></div>
        </section>

    );
}

function CategoryTab({ 
    category,
    onMouseDown
} : { 
    category: string,
    onMouseDown: (category: (typeof CATEGORIES)[number]) => void
}) {

    return (
        <div 
            className='category-container'
            onMouseDown={() => onMouseDown(category)}
        >
            {category}
        </div>
    )

}