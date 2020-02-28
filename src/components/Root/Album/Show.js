import React, { Component } from 'react';
import Title from "./Title";
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from 'axios';
import "./show.scss";

class ShowImage extends Component {
    render() {
        let data = this.props.data;
        return (
                <>                    
                <aside className="img-section">
                    <figure>
                        <img src={data.url} alt={data.name} />
                    </figure>
                    </aside>

                    <aside className="img-data" >
                        <strong>Title: </strong>{data.name}<br />
                        <strong>Medium: </strong>{data.medium}<br />
                        <strong>Category: </strong>{data.category}<br />
                        <strong>Art Type: </strong>{data.kind}<br />
    
                        <div class="field is-grouped">
                        <p class="control">
                            <Link to={`/artwork/${data.id}/edit`} className="button  is-primary is-small">Update Piece</Link> 
                            <Link to="/artwork" className="button is-link is-small">Return</Link>
                            <button className="button is-danger is-small" onClick={this.props.activeDelete}>Delete</button>
                        </p>
                        </div>
                    </aside>
                    
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
        <Title />
        <section className="show">
            {!data.deleting ?  <ShowImage data={data} activeDelete={this.activeDelete} /> : <ConfirmDeletion  data={data} activeDelete={this.activeDelete} handleDestroy={this.handleDestroy}/>}
        </section>
            </>
        )
    }
}
export default Show;