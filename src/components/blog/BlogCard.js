import React from 'react';

const BlogCard = ({ post }) => {
    const { title, tags, readable_publish_date, social_image, url} = post;

    return (
        <article className="work-item">
            {social_image !== "" ? <a href={`${url}`}><img src={`${social_image}`} target="_blank" rel="noreferrer" alt="Title provided by dev.to" style={{maxWidth: "100%"}} /></a> : null}
            <h1><a href={`${url}`} target="_blank" rel="noreferrer">{title}</a></h1>
            <h5>Posted on {readable_publish_date}</h5>
            <h6><em>{tags}</em></h6>
        </article>
    )
};

export default BlogCard;