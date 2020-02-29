import React, { Component } from 'react';
import Title from "./Title";
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from 'axios';
import "./album.scss";

class Edit extends Component {
    state = {
        thumbnail: "",
        name: "",
        url: "",
        medium: "",
        category: "",
        kind: "",
        id: ""
    }

    componentDidMount() {
        const slug = this.props.match.params.id;
  
        axios.get(`${API_URL}/${slug}`)
        .then(res => this.setState({ 
            thumbnail: res.data.thumbnail,
            name: res.data.name,
            url: res.data.url,
            medium: res.data.medium,
            category: res.data.category,
            kind: res.data.kind,
            id: res.data.id
         }))
    }


    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    } 

    handleUpdate = (event) => {
        event.preventDefault();
        const id = event.target.id.value;

        axios.put(`${API_URL}/${id}`, {
            thumbnail: this.state.thumbnail,
            name: this.state.name,
            url: this.state.url,
            medium: this.state.medium,
            category: this.state.category,
            kind: this.state.kind,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(() => window.location.assign(`/artwork/${id}`))
    }
    render() {
        return (
            <>
            <Title />
            <section className="form">
            <aside className="form-content">
                <h1 className="pg">Update {this.state.name}</h1>
                <form onSubmit={this.handleUpdate}>

                    <div className="field">
                    <label htmlFor="name" className="label"> Piece Name</label>
                    <div className="control">
                        <input className="input is-rounded is-small" type="text" value={this.state.name} id="name" placeholder="Piece Name" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="thumbnail" className="label"> Thumbnail</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.thumbnail} id="thumbnail" placeholder="thumbnail" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="url" className="label"> Image URL</label>
                    <div className="control">
                        <input className="input is-small is-rounded"type="text" value={this.state.url} id="url" placeholder="http://" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="medium" className="label"> Medium</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.medium} id="medium" placeholder="PS, Oils.." onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="category" className="label"> Category</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.category} id="category" placeholder="Paid, personal, donation...etc" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div className="field">
                    <label htmlFor="kind" className="label"> Art Type</label>
                    <div className="control">
                        <input className="input is-small is-rounded" type="text" value={this.state.kind} id="kind" placeholder="Comics? Illustration? Painting?" onChange={this.handleChange} required />
                        </div>
                    </div>

                    <div class="field is-grouped">
                    <div class="control">
                    <input  value={this.state.id} id="id" type="hidden" name="id" />
                        <input  type="submit" value="Update Piece"  className="button is-small is-danger"/>
                        </div>

                    <div class="control">
                        <Link to={`/artwork/${this.state.id}`} className="button is-small is-primary">Cancel</Link>
                        </div>
                    </div>
                </form>

            </aside>
            </section>
        </>
        )
    }
}
export default Edit;