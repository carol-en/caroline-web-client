import React, { Component } from 'react';


class Album extends Component {
    state = {
        album: []
    }

    componentDidMount() {
        console.log("Hello!");
        // fetch()
        //  .then()
        //  .then()
        //  .catch(err => console.log(err));
    }
    handleChange = () => {
        console.log("Hello Change!");
    }
    handleEdit = () => {
        console.log("Hello Edit!");
    }

    handleUpdate = () => {
        console.log("Hello Update!");
    }

    handleSubmit = () => {
        console.log("Hello Submit!");
    }

    handleDestroy = () => {
        console.log("Hello Destroy!");
    }

    render() {
        return (
            <>
                <h2>Hello From Album!</h2>
            </>
        )
    }
}

export default Album;