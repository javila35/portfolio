import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Nav } from "./components";
import { Home, Blog } from "./views";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Home} />
                <Route path="/blog" component={Blog} />
                <Nav />
            </BrowserRouter>
        </div>
    )
};