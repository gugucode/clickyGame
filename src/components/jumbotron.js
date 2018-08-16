import React, { Component } from 'react';

class Jumbotron extends Component {
    jumbotronStyle = {
        backgroundImage: "url('images/jumbotron.png')",
        height: '18em',
        marginTop : '5em'
    };

    jumbotronContainer = {
        marginTop: '4em',
        color : 'teal',
        fontFamily: "'Do Hyeon', 'sans-serif'",
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid pb-0 pt-3" style={this.jumbotronStyle}>
                <div className="container pb-0" style={this.jumbotronContainer}>
                    <h1 className="display-4 text-center">Clicky Game!</h1>
                    <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;