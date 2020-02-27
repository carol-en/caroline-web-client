import React, { Component } from "react";
import Nav from "../Nav";
import Canvas from "../Canvas";
import Logo from "../Logo";
import "./home.scss";

class Home extends Component {
    render() {
        return (
            <main className="wrapper">
                <Nav />
                <Logo />
                <Canvas />
            </main>
        )
    }
}

export default Home;