import React, { Component } from 'react';
import FilterButtons from "./FilterButtons";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class TaggedArt extends Component {
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

class FilteredTags extends Component {
    state = {
        entries: [],
        tag: ""
    }
    componentDidMount() {
      this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       let oldSlug= prevProps.match.params.tagsFilter;
       const slug = this.props.match.params.tagsFilter; 
       
        if(oldSlug !== slug) {
            this.getData();
        }
    }

    getData = () => {
        const slug = this.props.match.params.tagsFilter; 
        let arrayTag = [];   
        client.getEntries({
            "content_type": "artWork",
            "order":"sys.createdAt"
        }).then(art => {
            art.items.map(thumbs => {
                thumbs.fields.tags.map(tags => {
                    if(tags.includes(slug)) {
                       arrayTag.push(thumbs);
                    }
                })
            })
            this.setState({ entries: arrayTag.reverse(), tag: slug });
        })
    }

    render() {
        let {entries, tag} = this.state;
        
        return (
            <>
            <section className="artwork">
                <FilterButtons />
                <aside className="art-wrapper">
                <h1>{tag}</h1>
                { tag === "color work" ||
                     tag === "digital" ||
                     tag === "illustration" ? 
                     <span className="note"><strong>Note: </strong> You can view more, downloadable PDF color work portfolios <a href="https://www.dropbox.com/sh/5ft36ci5ccxmlnt/AAAOeu4_4l-FqxnrHd8KJJbca?dl=0" title="here" target="_blank" rel="noopener">here.</a></span> : 
                     <span className="note"><strong>Note: </strong>You can view updated pieces and works in progress on my <a href="https://www.instagram.com/carolnart/" title="instagram" target="_blank" rel="noopener">instagram</a> and other <a href="/contact" title="social medias">social medias!</a></span>}
                     
                     <TaggedArt entries={entries}/>
                </aside>
            </section>
            </>
        )
    }
}

export default FilteredTags;