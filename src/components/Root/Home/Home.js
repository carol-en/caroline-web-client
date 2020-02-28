import React, { Component } from "react";
import Canvas from "../Canvas";
import Logo from "../Logo";
import "./home.scss";

class Home extends Component {
    render() {
        return (
        <>
            <main className="wrapper">
                <Logo />
                <Canvas />
            </main>
        </>
        )
    }
}

export default Home;