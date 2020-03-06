import React, { Component } from 'react';
import Title from "./Title";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class FilterButtons extends Component {
    render() {
        const filterImages = this.props.filterImages;
        const tags = this.props.tags.map((tag, i) => {
            if(tag === "personal" || tag === "commission" || tag === "inks" || tag === "color work") {
                return (
                    <button key={i} className="btn-filter" onClick={() => {filterImages(tag)}}>
                        {tag}
                    </button>
                )
            }
        });
        return (
            <aside className="tags">
                {tags && tags}
            </aside>
        )
    }
}

class ArtWork extends Component {
    state = {
        entries: [],
        tags: [],
        currentFilter: []
    }
    componentDidMount () {
        this.getData();

    }

    getData = () => {      
        client.getEntries({
            "content_type": "artWork"
        })
          .then(entries => this.setState({ entries: entries.items }))

      client.getContentType('artWork')
          .then(data => data.fields.map(e => {
              if(e.id === "tags") {
                  let tags = e.items.validations[0].in;
                  this.setState({ tags: tags });
              }
          }))  
    }

    filterImages = (tag) => {
        let tagsArr = this.state.entries.map(tags => {
            let tagsList = tags.fields.tags;       
            if(tagsList.includes(tag)) {
                console.log(tags);
                this.setState({currentFilter: [tags] });
                
            } 
        });
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
                {this.state.tags && <FilterButtons tags={this.state.tags} filterImages={this.filterImages} />}
                <aside className="art-wrapper">
                    {this.state.entries && entry }
                </aside>
            </section>
            </>
        )
    }
}


export default ArtWork