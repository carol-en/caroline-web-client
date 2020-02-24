import React, { Component } from "react";
import RouterReact from "./RouterReact";
import "./index.scss";
import Nav from "./Nav";

class Root extends Component {
    render() {
        return (
            <section>
                <Nav/ >
                <RouterReact />
            </section>
        )
    }
}


export default Root;