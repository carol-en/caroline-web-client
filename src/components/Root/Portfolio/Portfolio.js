import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import "./portfolio.scss";

class Portfolio extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
          client.getEntry('4Yidjiu3QgxKIZgySwjuPd')
            .then(entry => this.setState({ entry: entry }))
            // .then(entry => console.log(entry) )
            .catch(console.error)

    }

    article() {
        let entry = this.state.entry;
        if(!entry) {
            return <h1>Loading...</h1>
         } else {
             
              return (
                 <li key= {entry.sys.id}>
                        <h2>{entry.fields.title}</h2> 
                        <blockquote>
                            <Markdown source={entry.fields.body} />
                        </blockquote>
                 </li>
             )
         }
    }
    render() {
        let entry = this.article();
        return (
            <>
            <Title />
            
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}

export default Portfolio;
