import React from 'react';

const Footer = (props) => {
    return(
        <div>
            <footer>
                <h1>{props.data}</h1>
            </footer>
        </div>
    );
};

export default Footer;