import React, { Component } from "react";
import Title from "./Title";
import client from "../utils/contentful";
import "./artwork.scss";

class Show extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
        const slug = this.props.match.params.artPost;
          client.getEntry(slug)
            .then(entry => this.setState({ entry: entry }))
            .catch(console.error)

    }

    article() {
        let entry = this.state.entry;
        if(!entry) {
            return <h1>Loading...</h1>
         } else {
            let fullImage = entry.fields.fullImage;
              return (
                 <li key= {entry.sys.id}>

                        {fullImage.map((img, inx) => {
                            return   <img src={img.fields.file.url} alt={img.fields.file.fileName} key={inx}/>
                        })}
                        <h2>{entry.fields.title}</h2> 
                        <h4>{entry.fields.date}</h4>
                        <h5>Category: {entry.fields.category}</h5>
                        <blockquote>{entry.fields.description}</blockquote>
                 </li>
             )
         }
    }
    render() {
        let entry = this.article();
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

export default Show;