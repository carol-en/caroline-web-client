import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faDeviantart, faTwitter } from '@fortawesome/free-brands-svg-icons';
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

    article() {
        let entry = this.state.entry;
        if(!entry) {
            return <h1 className="pg">Loading...</h1>
         } else {
             
              return (
                 <aside className="contact-data" key= {entry.sys.id}>
                        <h2 className="pg">{entry.fields.title}</h2> 
                            <Markdown source={entry.fields.body} />

                        <h3 className="sm">Find me @</h3>
                            <div className="s-media">
                                <span>
                                    <a href="https://github.com/carol-en" title="Github"><FontAwesomeIcon icon={faGithub} /></a>
                                </span>
                                <span>
                                    <a href="https://www.linkedin.com/in/carolinenolasco/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </span>
                                <span>
                                    <a href="https://twitter.com/carol_colours" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com/carolnart/" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                </span>
                                <span>
                                    <a href="https://www.facebook.com/cnolasco" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                                </span>
                                <span>
                                    <a href="https://www.deviantart.com/carol-n92" title="Deviant Art"><FontAwesomeIcon icon={faDeviantart} /></a>
                                </span>
                            </div>
                 </aside>
             )
         }
    }
    render() {
        let entry = this.article();
        return (
            <>
            <Title />

                <section className="contact">
                    {entry}
                </section>
            </>
        )
    }
}


export default Contact;