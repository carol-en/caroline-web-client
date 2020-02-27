import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAdobe, faSass, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPenFancy, faTablet } from '@fortawesome/free-solid-svg-icons'
import  './logo.scss';

class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                <h1>Splashes of Color</h1>
                <div className="floating-icons">
                    <FontAwesomeIcon icon={faCss3}/>
                    <FontAwesomeIcon icon={faReact}/>
                    <FontAwesomeIcon icon={faSass}/>
                    <FontAwesomeIcon icon={faJsSquare}/>
                    <FontAwesomeIcon icon={faPaintBrush}/>
                    <FontAwesomeIcon icon={faPenFancy}/>
                    <FontAwesomeIcon icon={faAdobe}/>
                    <FontAwesomeIcon icon={faTablet}/>
                </div>
            </aside>
        )
    }
}

export default Logo;