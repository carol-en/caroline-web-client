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
        console.log(this.props.filter);
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
            "content_type": "artWork",
            "order":"sys.createdAt"
        })
          .then(entries => this.setState({ entries: entries.items.reverse() }))

      client.getContentType('artWork')
          .then(data => data.fields.map(e => {
              if(e.id === "tags") {
                  let tags = e.items.validations[0].in;
                  this.setState({ tags: tags });
              }
          }))  
    }

    filterImages = (data) => {
        if(data === "reset art") {
            this.setState({ currentFilter: [], filter: false })
        } else {
            this.setState({ filter: true, currentFilter: [] })
        }
        let arrayTag = []
        this.state.entries.map(entry => {
            entry.fields.tags.map(tagsList => {
                if(tagsList.includes(data)) {
                    arrayTag.push(entry);
                }
            })
        })
        this.setState({ currentFilter: arrayTag })
    }


    render() {
        let { entries, tags, currentFilter, filter } = this.state;
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