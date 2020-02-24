import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from "axios";


class Album extends Component {
    state = {
        album: []
    }

componentDidMount() {
      axios.get(API_URL)
      .then(res => {
        this.setState({ album: res.data })
      });
    }

    render() {
        let album = this.state.album;
        
       const entry = album.map(entry => {
            if(!entry) {
                return <h1>Loading...</h1>
            } else {
                return (
                    <li key={entry.id}>   
                        <Link to={`/artwork/${entry.id}`}>
                            <img src={entry.thumbnail} alt={entry.name} />
                        </Link>
                    </li>
                )
            }
        });
        return (
            <>
                <h2>Hello From Album!</h2>
                <Link to="/artwork/new">Add New Piece</Link>
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}

export default Album;