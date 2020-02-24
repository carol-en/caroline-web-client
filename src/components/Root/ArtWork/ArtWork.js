import React, { Component } from 'react';
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
        let entries = this.state.entries;
        const entry = entries.map((entry, i) => {
           if(!entry) {
                return (
                    <li>
                        <h2>Loading...</h2>
                    </li>
                )
            } else { 
                return (
                    <li key={i}>
                        <Link to= {`/art/${entry.sys.id}`}>
                            <img src={entry.fields.thumbnail.fields.file.url} alt={entry.fields.title} />
                        </Link> 
                    </li>
            )
            }
        
        });
        return (
            <>
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}


export default ArtWork