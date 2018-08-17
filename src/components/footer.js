import React from 'react';

const Footer = () => {  
    const footStyle = {
        background:'teal',
        color: 'white'
    }

    return (
        <footer className="page-footer font-small" style={footStyle}>
            <div className="footer-copyright text-center py-3">
            Clicky Game © 2018 Copyright:
            </div>
        </footer>
    )  
}

export default Footer;