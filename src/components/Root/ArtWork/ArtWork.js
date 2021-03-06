import React, { Component } from 'react';
import Title from "./Title";
import FilterButtons from "./FilterButtons.js";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class AllArt extends Component {
    render() {
        const entry = this.props.entries.map((entry, i) => {
            let fullImage = entry.fields.fullImage;
                return (
                    <div key={i} className="thumbnails">
                        <Link to= {`/art/entry/${entry.sys.id}`}>
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
              {this.props.entries && entry}
            </>
        )
    }
}

class ArtWork extends Component {
    state = {
        entries: [],
        title: ""
    }
    componentDidMount () {
        this.getData();

    }

    getData = () => {      
        client.getEntries({
            "content_type": "artWork",
            "order":"sys.createdAt"
        })
          .then(entries => { 
            let title = entries.items[0].sys.contentType.sys.id.split("").join("");
              this.setState({ entries: entries.items.reverse(), title: title }) 
            })
  
    }

    render() {
        let { entries } = this.state;
        return (
            <>
            <Title />
            <section className="artwork">
                 <FilterButtons />
                <aside className="art-wrapper">
                    <h1>{this.state.title}</h1>
                    <span className="note"><strong>Note: </strong>You can view updated pieces and works in progress on my <a href="https://www.instagram.com/carolnart/" title="instagram" target="_blank" rel="noopener noreferrer">instagram</a> and other <a href="/contact" title="social medias">social medias!</a></span>
                    {entries && <AllArt entries={entries}/>}
                </aside>
            </section>
            </>
        )
    }
}


export default ArtWork;