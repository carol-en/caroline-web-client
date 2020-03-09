import React, { Component} from "react";
import { Link } from "react-router-dom";
import throttle from 'lodash.throttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./nav.scss";

class MenuLinks extends Component {
    render() {
        return (
        <nav>
            <Link to="/" className="menu-link">Home</Link>
            <Link to="/about" className="menu-link">About</Link>
            <Link to="/projects" className="menu-link">Code Projects</Link>
            <Link to="/art" className="menu-link">Art Work</Link>
            <Link to="/contact" className="menu-link">Contact</Link>
        </nav>
        )
    }
}


class Nav extends Component {
    state = {
        isOpen: null
    }

    componentDidMount() {
        this.watchMenu();
        window.addEventListener("resize", throttle(this.watchMenu, 100))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', throttle(this.watchMenu, 100));
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        const IsTablet = window.innerWidth < 900;
        if(IsTablet && prevState === true) {
            this.toggleOpen();
        }

     }
    

    watchMenu = () => {
        const isDesktop = window.innerWidth >= 900;
        const IsTablet = window.innerWidth < 900;
        
        if(isDesktop) {
            this.setState( { isOpen: true });
        } else if(IsTablet) {
            this.setState({ isOpen: false });
        }

    }


    toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        let { isOpen } = this.state;
        return (
            <aside className="navigate">
                <button className="burger" onClick={() => this.toggleOpen()}>
                    <FontAwesomeIcon icon={faBars} />
                    <h1 className="carol">Caroline Nolasco</h1>
                </button>
                {isOpen && <MenuLinks/>}
            </aside>
        )
    }
}

export default Nav;