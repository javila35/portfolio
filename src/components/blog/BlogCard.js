import React from 'react';

const BlogCard = ({ post }) => {
    const { title, tag_list, readable_publish_date, social_image, url } = post;

    return (
        <article className="work-item" style={{textAlign: "center"}}>
            <a href={`${url}`} target="_blank" rel="noreferrer">
                <figure><img src={`${social_image}`} class="image" alt="Cover provided by Dev.To" style={{maxWidth: "90%"}} /></figure>
            </a>
            <h1><a href={`${url}`} target="_blank" rel="noreferrer">{title}</a></h1>
            <h5>Posted on {readable_publish_date}</h5>
            <h6>{tag_list}</h6>
        </article>
    )
};

export default BlogCard;