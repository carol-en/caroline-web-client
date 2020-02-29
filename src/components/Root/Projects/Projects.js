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
                                <a href={entry.fields.appLink}><FontAwesomeIcon  icon={faMobile} />  Open App</a>
                                <a href={entry.fields.githubLink}><FontAwesomeIcon  icon={faGithub} />  Open GitHub</a>
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
                </section>
            </>
        )
    }
}


export default Projects;