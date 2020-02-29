import React, { Component } from 'react';
import Markdown from "react-markdown";
import Title from "./Title";
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


export default Contact