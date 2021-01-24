import * as React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </footer>
    )
};