import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "../Home";
import New from "../Album/New";
import Projects from "../Projects";
import ShowArt from "../ArtWork/Show";
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
            <Route component ={Projects} exact path="/projects" />
            <Route component ={New} exact path="/artwork/new" />
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