import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Title extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Caroline Nolasco: Splashes of Color</title>
                    <meta name="description" content="Splashes of Color, Caroline Nolasco's portfolio site." />
                </Helmet>
            </>
        )
    }
}

export default Title;  