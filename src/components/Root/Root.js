import React, { Component } from "react";
import RouterReact from "./RouterReact";
import "./root.scss";
import Title from "../Root/style/Title";
import Nav from "./Nav";


class Root extends Component {
    render() {
        return (
            <section>
                <Title />
                <Nav />
                <RouterReact />
            </section>
        )
    }
}


export default Root;