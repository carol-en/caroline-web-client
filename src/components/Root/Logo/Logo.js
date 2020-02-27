import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAdobe, faSass, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faPenFancy, faTablet } from '@fortawesome/free-solid-svg-icons'
import  './logo.scss';

class Logo extends Component {
    render() {
        return (
            <aside className="logo">
                <h1>
                    Splashes<br />
                     of<br />
                     Color
                </h1>
                <div className="floating-logos">
                    <FontAwesomeIcon className="log-css" icon={faCss3}/>
                    <FontAwesomeIcon className="log-react" icon={faReact}/>
                    <FontAwesomeIcon className="log-sass" icon={faSass}/>
                    <FontAwesomeIcon className="log-js" icon={faJsSquare}/>
                    <FontAwesomeIcon className="log-brush" icon={faPaintBrush}/>
                    <FontAwesomeIcon className="log-pen" icon={faPenFancy}/>
                    <FontAwesomeIcon className="log-adobe" icon={faAdobe}/>
                    <FontAwesomeIcon className="log-tablet" icon={faTablet}/>
                </div>
            </aside>
        )
    }
}

export default Logo;