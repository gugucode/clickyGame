import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
    }

    // CSS styles 
    navStyle = {
        background:'teal', 
        position: 'fixed',
        top: 0, 
        zIndex: 1000,
        color : 'white',
    };

    brandStyle = {
        fontSize : '2em',
        fontFamily: "'Do Hyeon', 'sans-serif'",
    };

    fontStyle = {
        fontSize : '1em',
    };

    render() {
        return(
            <div className="container-fluid" style={this.navStyle}>
                <div className="row justify-content-md-center" >
                        <div className="col-12 col-md-3 align-self-center">
                            <h3 className="text-center" style={this.brandStyle}>Clicky Game</h3>
                        </div>

                        <div className="col-12 col-md-4 align-self-center" style={this.fontStyle}>
                            <h5 className="text-center">Click an image to begin!</h5>
                        </div>

                        <div className="col-12 col-md-3 align-self-center" style={this.fontStyle}>
                            <p className="score text-right">Score: {this.props.score}</p>
                            <p className="score text-right">Top Score: {this.props.topScore}</p>
                        </div>
                </div>
            </div>
        );
    }
}

export default Navbar;