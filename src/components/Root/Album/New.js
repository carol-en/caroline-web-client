import React, { Component } from 'react';
import API_URL from "../utils/API";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./album.scss";

class New extends Component {
    state = {
        thumbnail: "",
        name: "",
        url: "",
        medium: "",
        category: "",
        kind: ""
    }
    
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }   

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post(API_URL, {
            name: this.state.name,
            thumbnail: this.state.thumbnail,
            url: this.state.url,
            medium: this.state.medium,
            category: this.state.category,
            kind: this.state.kind
        })
        .then(() => window.location.assign('/artwork'))
        .catch(err => console.log(err.response.data));
    }

 
    render() {
        return (
            <>
                <h1>New Art Work Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="name"> Piece Name<br /></label>
                        <input type="text" value={this.state.value} id="name" placeholder="Piece Name" onChange={this.handleChange}required />
                    </div>

                    <div>
                    <label htmlFor="thumbnail"> Thumbnail<br /></label>
                        <input type="text" value={this.state.value} id="thumbnail" placeholder="thumbnail" onChange={this.handleChange} required />
                    </div>

                    <div>
                    <label htmlFor="url"> Image URL<br /></label>
                        <input type="text" value={this.state.value} id="url" placeholder="http://" onChange={this.handleChange} required />
                    </div>

                    <div>
                    <label htmlFor="medium"> Medium<br /></label>
                        <input type="text" value={this.state.value} id="medium" placeholder="PS, Oils.." onChange={this.handleChange} required />
                    </div>

                    <div>
                    <label htmlFor="category"> Category<br /></label>
                        <input type="text" value={this.state.value} id="category" placeholder="Paid, personal, donation...etc" onChange={this.handleChange} required />
                    </div>

                    <div>
                    <label htmlFor="kind"> Art Type<br /></label>
                        <input type="text" value={this.state.value} id="kind" placeholder="Comics? Illustration? Painting?" onChange={this.handleChange} required />
                    </div>

                    <div>
                        <input type="submit" value="Submit New Piece" />
                        <Link to="/artwork">Cancel</Link>
                    </div>
                </form>
            </>
        )
    }
}
export default New;