import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "../Home";
import About from "../About";
import Edit from "../Album/Edit";
import New from "../Album/New";
import ShowWork from "../Album/Show";
import Album from "../Album";
import Portfolio from "../Portfolio";
import ShowArt from "../ArtWork/Art";
import ArtWork from "../ArtWork";
import Blog from "../Blog";
import Entry from "../Blog/Entry";
import Contact from "../Contact";

class RouterReact extends Component {
    render() {
        return (
        <>
        <Switch>
            <Route component ={About} exact path="/about" />
            <Route component ={Portfolio} exact path="/portfolio" />
            <Route component ={New} exact path="/artwork/new" />
            <Route component ={Edit} path="/artwork/:showWork/edit" />
            <Route component ={ShowWork} path="/artwork/:showWork" />
            <Route component ={Album} exact path="/artwork" />
            <Route component ={ShowArt} path="/art/:artPost" />
            <Route component ={ArtWork} exact path="/art" />
            <Route component ={Entry} path="/blog/:blogPost" />
            <Route component ={Blog} exact path="/blog" />
            <Route component ={Contact} exact path="/contact" />
            <Route component ={Home} exact path="/" />
        </Switch>
        </>
        )
    }
}

export default RouterReact;