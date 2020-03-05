import React, { Component } from 'react';
import Title from "./Title";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class ArtWork extends Component {
    state = {
        entries: []
    }
    componentDidMount () {

          client.getEntries({
              "content_type": "artWork"
          })
            .then(entries => this.setState({ entries: entries.items }))

    }
    render() {
        const entry = this.state.entries.map((entry, i) => {
            let fullImage = entry.fields.fullImage;
                return (
                    <div key={i} className="thumbnails">
                        <Link to= {`/art/${entry.sys.id}`}>
                            {fullImage.map((img, i) => {
                            const { url, fileName } = img.fields.file;
                            const ratio = "?fit=thumb&f=face&h=300&w=300";
                            const thumbnail = `${url}${ratio}`;

                            if(i < 1) return  <img src={thumbnail} alt={fileName} key={i}/>
                            }) }
                        </Link> 
                    </div>
                )
        });
        return (
            <>
            <Title />
            <section className="artwork">
                <aside className="art-wrapper">
                    {this.state.entries && entry }
                </aside>
            </section>
            </>
        )
    }
}


export default ArtWork