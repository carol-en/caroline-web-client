import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import "./about.scss";

class About extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
          client.getEntry('21sIZgWzyMlXPLw3hhjV2h')
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
                 <aside className="about-data" key= {entry.sys.id}>
                        <h2 className="pg">{entry.fields.title}</h2> 
                            <Markdown source={entry.fields.body} />
                 </aside>
             )
         }
    }
    render() {
        let entry = this.article();
        return (
            <>
            <Title />
                <section className="about">
                    {entry}
                   
                </section>
            </>
        )
    }
}


export default About;