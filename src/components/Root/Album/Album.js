import React, { Component } from 'react';
import Title from "./Title";
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from "axios";
import "./album.scss";


class Album extends Component {
    state = {
        album: []
    }

// componentDidMount() {
//       axios.get(API_URL)
//       .then(res => {
//         this.setState({ album: res.data })
//       });
//     }

    render() {
    //     let album = this.state.album;
        
    //    const entry = album.map(entry => {
    //         if(!entry) {
    //             return <h1 className="pg">Loading...</h1>
    //         } else {
    //             return (
    //                 <div key={entry.id} className="image">   
    //                     <Link to={`/artwork/${entry.id}`}>
    //                         <img src={entry.thumbnail} alt={entry.name} />
    //                     </Link>
    //                 </div>
    //             )
    //         }
    //     });
        return (
            <>
            <Title />
            <section className="album">
                <main className="wrapper">
                    <Link to="/artwork/new" className="button is-danger">Add New Piece</Link>
                
                <aside className="art-work">
                    {/* {entry} */}
                </aside>
                </main>
            </section>
            </>
        )
    }
}

export default Album;