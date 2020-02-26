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
            <Link to="/portfolio" className="menu-link">Portfolio</Link>
            <Link to="/blog" className="menu-link">Blog</Link>
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
    

    watchMenu = () => {
        const isDesktop = window.innerWidth >= 900;
        const IsTablet = window.innerWidth < 900;
        
        if(isDesktop) {
            this.setState( { isOpen: true });
        } else if(IsTablet) {
            this.setState({ isOpen: false })
        }

    }


    toggleOpen() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <section>
                <button className="burger" onClick={() => this.toggleOpen()}><FontAwesomeIcon icon={faBars} /></button>
                {this.state.isOpen && <MenuLinks />}

                
            </section>
        )
    }
}

export default Nav;