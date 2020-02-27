import React, { Component } from "react";
import RouterReact from "./RouterReact";
import "./root.scss";
import Title from "../Root/style/Title";
import Nav from "./Nav";
import Footer from "./Footer";


class Root extends Component {
    render() {
        return (
            <section>
                <Title />
                <Nav />
                <Footer />
                <RouterReact />
            </section>
        )
    }
}


export default Root;