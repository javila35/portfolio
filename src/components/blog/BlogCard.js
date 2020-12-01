import React from 'react';

const BlogCard = ({ post }) => {
    const { title, tags, readable_publish_date, social_image, url } = post;

    return (
        <article className="work-item" style={{ textAlign: "center" }}>
            <a href={`${url}`} target="_blank" rel="noreferrer">
                <figure><img src={`${social_image}`} class="image" alt="Cover provided by Dev.To" style={{ maxWidth: "90%" }} /></figure>
            </a>
            <h1><a href={`${url}`} target="_blank" rel="noreferrer">{title}</a></h1>
            <p>Posted on {readable_publish_date}</p>
            <h6>Tags: {tags}</h6>
        </article>
    )
};

export default BlogCard;