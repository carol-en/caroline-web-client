import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from 'axios';
import "./album.scss";

class ShowImage extends Component {
    render() {
        let data = this.props.data;
        return (
            <>
            <h3>ShowImage</h3>
            <Link to={`/artwork/${data.id}/edit`}>Update Piece</Link>
            <Link to="/artwork" >Return</Link>
            <figure>
                    <img src={data.url} alt={data.name} />
                    <figcaption>
                        <ul>
                            <li><strong>Title: </strong>{data.name}</li>
                            <li><strong>Medium: </strong>{data.medium}</li>
                            <li><strong>Category: </strong>{data.category}</li>
                            <li><strong>Art Type: </strong>{data.kind}</li>
                        </ul>
                    </figcaption>
                </figure>
                <button onClick={this.props.activeDelete}>Delete</button>
            </>
        )
    }
}

class ConfirmDeletion extends Component {
    
    render() {
        let data = this.props.data;
        return (
            <>
                <h1>Are You Sure You Want To Delete This Entry?</h1>
                <button onClick={() => {this.props.handleDestroy(data)}}>Delete Entry</button>
                <button onClick= {this.props.activeDelete}>Cancel</button>
            </>
        )
    }
}

class Show extends Component {
    state = {
        thumbnail: "",
        name: "",
        url: "",
        medium: "",
        category: "",
        kind: "",
        id: "",
        deleting: false
    }

    componentDidMount() {
        const slug = this.props.match.params.idArt;

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

    activeDelete = () => {
        this.setState( { deleting: !this.state.deleting})
    }

    handleDestroy = (entry) => {
        axios.delete(`${API_URL}/${entry.id}`)
        .then(() => {  window.location.assign('/artwork') });
    }

    render() {
        let data = this.state;
        return (
        <>
            {!data.deleting ?  <ShowImage data={data} activeDelete={this.activeDelete} /> : <ConfirmDeletion  data={data} activeDelete={this.activeDelete} handleDestroy={this.handleDestroy}/>}
        </>
        )
    }
}
export default Show;