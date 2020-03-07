import React, { Component } from 'react';
import client from "../utils/contentful";
import { Link } from "react-router-dom";
import "./artwork.scss";

class FilterButtons extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        client.getContentType('artWork')
        .then(data => data.fields.map(e => {
            if(e.id === "tags") {
                let tags = e.items.validations[0].in;
                this.setState({ tags: tags });
            }
        }))
    }

    render() {
        const tags = this.state.tags.map((tag, i) => {
                return (
                    <Link to={`/art/${tag}`} key={i} className="btn-filter" >
                        {tag}
                    </Link>

                )
            // }
        });
        return (
            <aside className="tags">
                {this.state.tags && 
                 <Link to="/art/" className="btn-filter">
                     all art
                 </Link>}

                {this.state.tags && tags}
            </aside>
        )
    }
}

export default FilterButtons;