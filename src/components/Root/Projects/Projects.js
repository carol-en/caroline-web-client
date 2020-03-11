import React, { Component } from 'react';
import Markdown from "react-markdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Title from "./Title";
import client from "../utils/contentful";
import "./projects.scss";

class Projects extends Component {
    state = {
        entries: [],
        title: ""
    }
    componentDidMount () {

          client.getEntries({
              "content_type": "projects-code",
              "order":"sys.createdAt"
          })
            .then(entries => {
                let title = entries.items[0].sys.contentType.sys.id.split("", 8).join("");
                this.setState({ entries: entries.items.reverse(), title: title })
            } );

    }
    render() {
        let entries = this.state.entries;
        const entry = entries.map(entry => {
                return (
                    <aside key={entry.sys.id} className="prj-entry">
                        <div className="prj-img">
                            <figure>
                                <img src={entry.fields.image.fields.file.url} alt={entry.fields.title} />
                            </figure>
                        </div>

                        <div className="prj-info">
                                <h2 className="prj-title">
                                    {entry.fields.title}
                                </h2> 
                                <span className="prj-links">
                                <a href={entry.fields.appLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faMobile}/>  Open App</a>
                                <a href={entry.fields.githubLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={faGithub}/>  Open GitHub</a>
                                </span>
                            <Markdown source={entry.fields.description} />
                        </div>                        
                    </aside>
            )
        });
        return (
            <>
            <Title />
                <section className="projects">
                    <h1>{this.state.title}</h1>
                    {entries && entry}   
                </section>
            </>
        )
    }
}


export default Projects;