import React, { Component } from 'react';
import Title from "./Title";
import client from "../utils/contentful";
import "./projects.scss";

class Projects extends Component {
    state = {
        entries: []
    }
    componentDidMount () {

          client.getEntries({
              "content_type": "projects-code"
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
                        <h2><a href={`/blog/${entry.fields.link}`}>{entry.fields.title}</a></h2> 
                        <h4>{entry.fields.date}</h4>
                        <blockquote>
                            {entry.fields.description}
                            <figure>
                                <img src={entry.fields.image.fields.file.url} alt={entry.fields.title} />
                            </figure>
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


export default Projects