import React, { Component } from 'react';
import Title from "./Title";
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
        .then(res => window.location.assign(`/artwork/${res.data.id}`)
            )
        .catch(err => console.log(err.response.data));
    }

 
    render() {
        return (
            <>
            <Title />
            <section className="form">
            <aside className="form-content">
                <h1 className="pg">Add New Art</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                    <label htmlFor="name" className="label"> Piece Name</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="name" placeholder="Piece Name" onChange={this.handleChange}required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="thumbnail" className="label"> Thumbnail</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="thumbnail" placeholder="thumbnail" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="url" className="label"> Image URL</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="url" placeholder="http://" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="medium" className="label"> Medium</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="medium" placeholder="PS, Oils.." onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="category" className="label"> Category</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="category" placeholder="Paid, personal, donation...etc" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="kind" className="label"> Art Type</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.value} id="kind" placeholder="Comics? Illustration? Painting?" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div class="field is-grouped">
                        <div class="control">
                        <input type="submit" value="Submit New Piece"  className="button is-small is-danger" />
                        </div>

                        <div class="control">
                        <Link to="/artwork" className="button is-small is-primary">Cancel</Link>
                        </div>
                    </div>
                </form>
                </aside>
            </section>
        </>
        )
    }
}
export default New;