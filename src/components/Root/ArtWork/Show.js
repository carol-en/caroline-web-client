import React, { Component } from "react";
import Markdown from "react-markdown";
import Title from "./Title";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class Image extends Component {
    render() {
        let entry = this.props.entry;
        let { id } = entry.sys;
        let { fullImage, title, date, category, description, tags } = entry.fields;
        return (
            <>
                <aside key= {id} className="art-data">
                    <Link to="/art" className="btn-return">Return</Link>
                    <figure className="images">
                        {fullImage.map((img, i) => {
                            let { url, fileName } = img.fields.file;
                            const ratio = "?fit=thumb&w=600";
                            const image = `${url}${ratio}`;
                            return   <span className="art-images"><a href={url}><img src={image} alt={fileName} key={i}/></a></span>
                        })}
                    </figure>
                    <div className="image-info">
                        <ul className="info-list">
                            <li><h1>{title}</h1></li>
                            <li className="image-desc">
                                <Markdown source={description} />
                            </li>
                            <li><strong>Category: </strong> {category}</li>
                            <li><strong>Tags: </strong> {tags.map(tag => <span className="tag">{tag}</span>)}</li> 
                        </ul>
                    </div>
                </aside>
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
                <section className="show-page">
                    {entry && <Image entry={entry} /> }
                </section>
            </>
        )
    }
}

export default Show;