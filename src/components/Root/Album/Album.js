import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API_URL from "../utils/API";
import axios from "axios";


class ShowImage extends Component {
    render() {
        let data = this.props.showEntry;
        let returnList = this.props.returnList;
        let destroyImage = this.props.destroyImage;

        return (
            <>
            <h3>ShowImage</h3>
            <Link to={`/artwork/${data.id}/edit`}>Update Piece</Link>
            <button onClick={returnList}>Return</button>
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
            <button onClick={() => {destroyImage(data)}}>Delete</button>
            </>
        )
    }
}

class Entry extends Component {
    render() {
        let entry = this.props.entry;
        return (
            <>
            <h1>Entry Component</h1>
            {entry}
            </>
        )
    }
}

class Album extends Component {
    state = {
        album: [],
        click: false,
        showEntry: null
    }

componentDidMount() {
      axios.get(API_URL)
      .then(res => {
        this.setState({ album: res.data })
      });
    }

    handleDestroy = (entry) => {
        axios.delete(`${API_URL}/${entry.id}`)
        .then(() => {  window.location.assign('/artwork') });
    }

    handleClick = (e) => {
            this.setState({ click: !this.state.click });
            this.grabImage(e);
            
    }

    grabImage = (img) => {
        let imgData = img;
        this.setState({showEntry: imgData});
    }

    returnList = () => {
        this.setState(
            { 
                click: !this.state.click ,
                showEntry: null
            }
        );
    }

    render() {
        let album = this.state.album;
        let imageData = this.state.showEntry;
        let click = this.state.click;
        
       const entry = album.map(entry => {
            if(!entry) {
                return <h1>Loading...</h1>
            } else {
                return (
                    <li key={entry.id}>   
                        <img src={entry.thumbnail} alt={entry.name} onClick={() => {this.handleClick(entry)}} />
                        {/* Import Edit & New component, work on their functions. */}
                    </li>
                )
            }
        });
        return (
            <>
                <h2>Hello From Album!</h2>
                {!this.state.click ? <Link to="/artwork/new">Add New Piece</Link>  :  false }
                <ul>
                    {!this.state.click ? <Entry entry={entry} /> :  <ShowImage showEntry={imageData} returnList={this.returnList} destroyImage={this.handleDestroy} />}
                </ul>
            </>
        )
    }
}

export default Album;