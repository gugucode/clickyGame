import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small" style={{background:'teal',color: 'white'}}>
                <div className="footer-copyright text-center py-3">
                Clicky Game © 2018 Copyright:
                </div>
            </footer>

        )
    }
}

export default Footer;