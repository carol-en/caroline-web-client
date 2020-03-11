import React, { Component } from "react";
import RouterReact from "./RouterReact";
import "./root.scss";
import Title from "../Root/style/Title";
import Nav from "./Nav";


class Root extends Component {
    componentDidMount = () => {
        fetch("https://art-marks-server.herokuapp.com/my_bookmarks", {mode: 'no-cors'})
         .then(res => console.log("woke up art marks server"));

        fetch("https://art-marks-client.herokuapp.com/", {mode: 'no-cors'})
         .then(res => console.log("woke up art marks"));

         fetch("https://youtube-api-ga.herokuapp.com/", {mode: 'no-cors'})
         .then(res => console.log("woke up youtube api"));

         fetch("https://art-planner-heroku.herokuapp.com/planner", {mode: 'no-cors'})
         .then(res => console.log("woke up art planner"));

         fetch("https://left4dead-mini-game.herokuapp.com/", {mode: 'no-cors'})
         .then(res => console.log("woke up art left4dead mini game"));
    }
    render() {
        return (
            <>
                <Title />
                <Nav />
                <RouterReact />
            </>
        )
    }
}


export default Root;