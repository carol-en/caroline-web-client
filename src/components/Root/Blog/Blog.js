import React, { Component } from "react";
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./blog.scss";

class Blog extends Component {
    state = {
        entries: []
    }
    componentDidMount () {

          client.getEntries({
              "content_type": "blog"
          })
            .then(entries => this.setState({ entries: entries.items }))
            // .then(entries => console.log(entries.items))

    }
    render() {
        let entries = this.state.entries;
        const entry = entries.map((entry, i) => {
           if(!entry) {
                return (
                    <li>
                        <h2>Loading...</h2>
                    </li>
                )
            } else { 
                
                return (
                    <li key={i}>
                        <h2><Link to= {`/blog/${entry.fields.slug}`}>{entry.fields.title}</Link></h2> 
                        <h4>{entry.fields.date}</h4>
                        <blockquote>
                            <Markdown source={entry.fields.description} />
                        </blockquote>
                        
                    </li>
            )
            }
        
        });
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

export default Blog;