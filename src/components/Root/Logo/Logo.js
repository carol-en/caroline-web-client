import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAdobe, faSass, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPenFancy, faTablet, faGlasses } from '@fortawesome/free-solid-svg-icons'
import  './logo.scss';

class Logo extends Component {
    render() {
        return (
            <>
            <aside className="logo">
                <h2>Caroline Nolasco <FontAwesomeIcon icon={faGlasses} /> </h2>
                <h3>Front End Developer | Commercial Illustrator</h3>
                <h1>
                    Splashes
                     of
                     Color
                </h1>
                <div className="floating-logos">
                    <FontAwesomeIcon className="fas log-css" icon={faCss3}/>
                    <FontAwesomeIcon className="fas log-react" icon={faReact}/>
                    <FontAwesomeIcon className="fas log-sass" icon={faSass}/>
                    <FontAwesomeIcon className="fas log-js" icon={faJsSquare}/>
                    <FontAwesomeIcon className="fas log-brush" icon={faPaintBrush}/>
                    <FontAwesomeIcon className="fas log-pen" icon={faPenFancy}/>
                    <FontAwesomeIcon className="fas log-adobe" icon={faAdobe}/>
                    <FontAwesomeIcon className="fas log-tablet" icon={faTablet}/>
                </div>
            </aside>
            </>
        )
    }
}

export default Logo;