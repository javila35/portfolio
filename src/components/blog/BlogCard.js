import React from 'react';

const BlogCard = ({ post }) => {
    const { title, tags, readable_publish_date, social_image, url} = post;

    return (
        <article className="work-item" style={{textAlign: "center"}}>
            {social_image !== "" ? <a href={`${url}`} target="_blank" rel="noreferrer"><img src={`${social_image}`} alt="Title provided by dev.to" className="image" style={{maxWidth: "90%"}} /></a> : null}
            <h1><a href={`${url}`} target="_blank" rel="noreferrer">{title}</a></h1>
            <h3>Posted on {readable_publish_date}</h3>
            <h6><em>{tags}</em></h6>
        </article>
    )
};

export default BlogCard;