import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./footer.scss";

class Footer extends Component {
    render() {
        return (
            <footer>
                <span>
                    Copyright <strong>Caroline Nolasco</strong> 2020. <FontAwesomeIcon icon={faCopyright} className="fas" />
                </span>
            </footer>
        )
    }
}

export default  Footer;