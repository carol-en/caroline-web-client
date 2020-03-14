import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { 
    faGithub, 
    faLinkedin, 
    faFacebook, 
    faInstagram, 
    faTwitter, 
    faArtstation 
} from '@fortawesome/free-brands-svg-icons';
import client from "../utils/contentful";
import "./contact.scss";

class Contact extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
          client.getEntry('5t51cM3Ib9IhH0MccLuJfn')
            .then(entry => this.setState({ entry: entry }))
            // .then(entry => console.log(entry) )
            .catch(console.error)

    }

    render() {
        let entry = this.state.entry;
        return (
            <>
            <Title />

                <section className="contact">
                {entry && 
                    <aside className="contact-data" key= {entry.sys.id}>
                        <h2 className="pg">{entry.fields.title}</h2> 
                        <Markdown source={entry.fields.body} />
            
                        <h3 className="sm">Find me @</h3>
                            <div className="s-media">
                                <span>
                                    <a href="https://github.com/carol-en" title="Github"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/carolinenolasco/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </span>

                                <span>
                                    <a href="https://profiles.generalassemb.ly/caroline-nolasco" title="General Assembly"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCertificate} /></a>
                                </span>


                                <span>
                                    <a href="https://www.artstation.com/carolen" title="Art Station"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faArtstation} /></a>
                                </span>

                                <span>
                                    <a href="https://www.instagram.com/carolnart/" title="Instagram"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                </span>

                                <span>
                                    <a href="https://twitter.com/carol_colours" title="Twitter"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                                </span>
                                
                                <span>
                                    <a href="https://www.facebook.com/cnolasco" title="Facebook"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                                </span>
                            </div>
                    </aside>}
                </section>
            </>
        )
    }
}


export default Contact;