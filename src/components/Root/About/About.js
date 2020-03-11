import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import "./about.scss";
import resume from "./documents/Caroline_Nolasco_Resume.pdf";

class About extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
          client.getEntry('21sIZgWzyMlXPLw3hhjV2h')
            .then(entry => this.setState({ entry: entry }))
            .catch(console.error)

    }

    render() {
        let entry = this.state.entry; 
        
        return (
            <>
            <Title />
                <section className="about">
                    {entry && 
                    <aside className="about-data" key= {entry.sys.id}>
                            <h2 className="pg">{entry.fields.title}</h2> 
                                <Markdown source={entry.fields.body} />
                                <span>
                                    <a href={resume} title="resume"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAddressCard} /> Check out my resume!</a>
                                </span>
                    </aside> }
                   
                </section>
            </>
        )
    }
}


export default About;