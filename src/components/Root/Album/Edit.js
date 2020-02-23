import React, { Component } from 'react';
import API_URL from "../utils/API";
import axios from 'axios';

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
        const slug = parseInt(this.props.match.params.id);
        axios.get(API_URL)
          .then(res => {
              res.data.forEach( e => {
                if(e.id === slug) {
                    this.setState({
                        thumbnail: e.thumbnail,
                        name: e.name,
                        url: e.url,
                        medium: e.medium,
                        category: e.category,
                        kind: e.kind,
                        id: e.id
                    })
                }
            });
        })
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
        .then(() => window.location.assign('/artwork'))
    }
    render() {
        return (
            <>
            <h1>Update Art Work Component</h1>
            <form onSubmit={this.handleUpdate}>
                <div>
                <label htmlFor="name"> Piece Name<br /></label>
                    <input type="text" value={this.state.name} id="name" placeholder="Piece Name" onChange={this.handleChange} required />
                </div>

                <div>
                <label htmlFor="thumbnail"> Thumbnail<br /></label>
                    <input type="text" value={this.state.thumbnail} id="thumbnail" placeholder="thumbnail" onChange={this.handleChange} required />
                </div>

                <div>
                <label htmlFor="url"> Image URL<br /></label>
                    <input type="text" value={this.state.url} id="url" placeholder="http://" onChange={this.handleChange} required />
                </div>

                <div>
                <label htmlFor="medium"> Medium<br /></label>
                    <input type="text" value={this.state.medium} id="medium" placeholder="PS, Oils.." onChange={this.handleChange} required />
                </div>

                <div>
                <label htmlFor="category"> Category<br /></label>
                    <input type="text" value={this.state.category} id="category" placeholder="Paid, personal, donation...etc" onChange={this.handleChange} required />
                </div>

                <div>
                <label htmlFor="kind"> Art Type<br /></label>
                    <input type="text" value={this.state.kind} id="kind" placeholder="Comics? Illustration? Painting?" onChange={this.handleChange} required />
                </div>



                <div>
                <input  value={this.state.id} id="id" type="hidden" name="id" />
                    <input type="submit" value="Update Piece" />
                </div>
            </form>
        </>
        )
    }
}
export default Edit;