import React, { Component } from 'react';
import client from "../utils/contentful";

class Contact extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
        const slug = this.props.match.params.blogPost;
          client.getEntry('5t51cM3Ib9IhH0MccLuJfn')
            .then(entry => this.setState({ entry: entry }))
            // .then(entry => console.log(entry) )
            .catch(console.error)

    }

    article() {
        let entry = this.state.entry;
        if(!entry) {
            return <h1>Loading...</h1>
         } else {
             
              return (
                 <li key= {entry.sys.id}>
                        <h2>{entry.fields.title}</h2> 
                        <blockquote>{entry.fields.body}</blockquote>
                 </li>
             )
         }
    }
    render() {
        let entry = this.article();
        return (
            <>
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}


export default Contact