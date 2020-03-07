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

class ArtWork extends Component {
    state = {
        entries: []
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
  
    }

    // filterImages = (data) => {
    //     if(data === "reset art") {
    //         this.setState({ currentFilter: [], filter: false })
    //     } else {
    //         this.setState({ currentFilter: [], filter: true })
    //     }
    //     let arrayTag = [];
    //     this.state.entries.map(entry => {
    //         entry.fields.tags.map(tagsList => {
    //             if(tagsList.includes(data)) {
    //                 arrayTag.push(entry);
    //             }
    //         })
    //     })
    //     this.setState({ currentFilter: arrayTag });
    // }


    render() {
        let { entries } = this.state;
        return (
            <>
            <Title />
            <section className="artwork">
                 <FilterButtons />
                <aside className="art-wrapper">
                    {entries && <AllArt entries={entries}/>}
                </aside>
            </section>
            </>
        )
    }
}


export default ArtWork;