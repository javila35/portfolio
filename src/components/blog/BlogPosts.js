import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogPosts = () => {
    const [allPosts, setPosts] = useState(false);

    useEffect(()=>{
        if (!allPosts) {
            fetch('https://dev.to/api/articles?username=javila35')
            .then(data => data.json())
            .then(data => {
                setPosts(data);
            })
        }
    }, [allPosts])

    const renderPosts = () => {
        return allPosts.map((post, index) => {
            return <BlogCard key={index} post={post} />
        })
    }

    return (
        <section id="one">
            <div className="row">
                {allPosts ? renderPosts() : <p>Loading</p>}
            </div>
        </section>
)
};

export default BlogPosts;