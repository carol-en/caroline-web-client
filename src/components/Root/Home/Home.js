import React, { Component } from "react";
import Canvas from "../Canvas";
import Logo from "../Logo";
import "./home.scss";

class Home extends Component {
    componentDidMount = () => {
        fetch("https://art-marks-client.herokuapp.com/", {mode: 'no-cors'})
         .then(res => console.log("woke up art marks"));

         fetch("https://youtube-api-ga.herokuapp.com/", {mode: 'no-cors'})
         .then(res => console.log("woke up youtube api"));

         fetch("https://art-planner-heroku.herokuapp.com/planner", {mode: 'no-cors'})
         .then(res => console.log("woke up art planner"));
    }
    render() {
        return (
        <main className="home">
            <Logo />
            <Canvas />
        </main>
        )
    }
}

export default Home;