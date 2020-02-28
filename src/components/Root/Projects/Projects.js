import React, { Component } from 'react';
import Markdown from "react-markdown";
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
        const entry = entries.map(entry => {
           if(!entry) {
                return (
                    <>
                        <h2>Loading...</h2>
                    </>
                )
            } else { 
                
                return (
                    <aside key={entry.sys.id}>
                        <div className="prj-img">
                            <figure>
                                <img src={entry.fields.image.fields.file.url} alt={entry.fields.title} />
                            </figure>
                        </div>

                        <div className="prj-info">
                            <span className="prj-link">
                                <h2><a href={`/blog/${entry.fields.link}`}>{entry.fields.title}</a></h2> 
                            </span>
                            <Markdown source={entry.fields.description} />
                        </div>                        
                    </aside>
            )
            }
        
        });
        return (
            <>
            <Title />
                <section className="projects">
                    {entry}
                    {entry}  
                    {entry}  
                    {entry}  
                    {entry}      
                </section>
            </>
        )
    }
}


export default Projects;