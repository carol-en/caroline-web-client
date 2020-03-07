import React, { Component } from 'react';
import Title from "./Title";
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class AllArt extends Component {
    render() {
        const entry = this.props.entries.map((entry, i) => {
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
              {this.props.entries && entry}
            </>
        )
    }
}

class FilterArt extends Component {
    render() {
        const filteredEntries = this.props.filter.map((entry, i) => {
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
            {this.props.filter && filteredEntries}  
            </>
        )
    }
}

class FilterButtons extends Component {
    render() {
        const filterImages = this.props.filterImages;
        const tags = this.props.tags.map((tag, i) => {
            // if(tag === "personal" || tag === "commission" || tag === "inks" || tag === "color work") {
                return (
                    <button key={i} className="btn-filter" onClick={() => {filterImages(tag)}}>
                        {tag}
                    </button>
                )
            // }
        });
        return (
            <aside className="tags">
                {tags && 
                 <button className="btn-filter"  onClick={() => {filterImages("reset art")}}>
                     All Art
                 </button>}
                {tags && tags}
            </aside>
        )
    }
}

class ArtWork extends Component {
    state = {
        entries: [],
        tags: [],
        currentFilter: [],
        filter: false
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
        if(tag === "reset art") {
            this.setState({ filter: false })
        } else {
            if(this.state.filter === false) {
                this.setState({ filter: true });
              }

            this.state.entries.map(tags => {
                let tagsList = tags.fields.tags;       
                if(tagsList.includes(tag)) {
                    this.setState({ currentFilter: [tags] });
                } 
            });
        }
    }


    render() {
        // let filtering = this.state.filter;
        // let { filter } = this.state;
        let { entries, tags, currentFilter, filter } = this.state;
        console.log(filter)
        return (
            <>
            <Title />
            <section className="artwork">
                {tags && <FilterButtons tags={tags} filterImages={this.filterImages} />}
                <aside className="art-wrapper">
                    {filter ? <FilterArt filter={currentFilter} /> : <AllArt entries={entries}/>}
                </aside>
            </section>
            </>
        )
    }
}


export default ArtWork