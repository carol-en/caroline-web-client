import React, { Component } from "react";
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import "./artwork.scss";

class Image extends Component {
    render() {
        let entry = this.props.entry;
        return (
            <>
                <li key= {entry.sys.id}>
                        {entry.fields.fullImage.map((img, inx) => {
                            return   <img src={img.fields.file.url} alt={img.fields.file.fileName} key={inx}/>
                        })}
                        <h2>{entry.fields.title}</h2> 
                        <h4>{entry.fields.date}</h4>
                        <h5>Category: {entry.fields.category}</h5>
                        <blockquote>
                            <Markdown source={entry.fields.description} />
                        </blockquote>
                </li>
            </>
        )
    }
}

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

    render() {
        let entry = this.state.entry;
    
        return (
            <>
            <Title />
                <ul>
                    {entry && <Image entry={entry} /> }
                </ul>
            </>
        )
    }
}

export default Show;