import React, { Component } from "react";
import RouterReact from "./RouterReact";
import "./root.scss";
import Title from "../Root/style/Title";


class Root extends Component {
    render() {
        return (
            <section>
                <Title />
                <RouterReact />
            </section>
        )
    }
}


export default Root;