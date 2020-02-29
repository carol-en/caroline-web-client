import React, { Component } from 'react';
import Title from "./Title";
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from 'axios';
import "./album.scss";

class ShowImage extends Component {
    render() {
        let data = this.props.data;
        return (
            <article className="page-entry">                    
                <aside className="img-section">
                    <figure>
                        <a href={data.url}><img src={data.url} alt={data.name} /></a>
                    </figure>
                    </aside>

                    <aside className="img-data" >
                        <p>
                            <strong>Title: </strong>{data.name}<br />
                            <strong>Medium: </strong>{data.medium}<br />
                            <strong>Category: </strong>{data.category}<br />
                            <strong>Art Type: </strong>{data.kind}<br />
                        </p>
    
                        <p className="control">
                            <Link to={`/artwork/${data.id}/edit`} className="button  is-primary is-small">Update Piece</Link> 
                            <Link to="/artwork" className="button is-link is-small">Return</Link>
                            <button className="button is-danger is-small" onClick={this.props.activeDelete}>Delete</button>
                        </p>
                    </aside>
                    
                </article>
        )
    }
}

class ConfirmDeletion extends Component {
    
    render() {
        let data = this.props.data;
        return (
            <article className="delete-entry">
                <h1 className="pg">Are You Sure You Want To Delete This Entry?</h1>
                <p>
                    <button className="button is-danger" onClick={() => {this.props.handleDestroy(data)}}>Delete Entry</button>
                    <button className="button is-primary" onClick= {this.props.activeDelete}>Cancel</button>
                </p>
            </article>
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
        <Title />
        <section className="show">
            {!data.deleting ?  <ShowImage data={data} activeDelete={this.activeDelete} /> : <ConfirmDeletion  data={data} activeDelete={this.activeDelete} handleDestroy={this.handleDestroy}/>}
        </section>
            </>
        )
    }
}
export default Show;