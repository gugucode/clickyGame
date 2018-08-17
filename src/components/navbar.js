import React from 'react';

const Navbar = props => {

    // CSS styles 
    const navStyle = {
        background:'teal', 
        position: 'fixed',
        top: 0, 
        zIndex: 1000,
        color : 'white',
    };

    const brandStyle = {
        fontSize : '2em',
        fontFamily: "'Do Hyeon', 'sans-serif'",
    };

    const fontStyle = {
        fontSize : '1em',
    };

    
    return(
        <div className="container-fluid" style={navStyle}>
            <div className="row justify-content-md-center" >
                    {/* brand */}
                    <div className="col-12 col-md-3 align-self-center">
                        <h3 className="text-center" style={brandStyle}>Clicky Game</h3>
                    </div>

                    <div className="col-12 col-md-4 align-self-center" style={fontStyle}>
                        <h5 className="text-center">Click an image to begin!</h5>
                    </div>

                    {/* show scores here */}
                    <div className="col-12 col-md-3 align-self-center" style={fontStyle}>
                        <p className="score text-right">Score: {props.score}</p>
                        <p className="score text-right">Top Score: {props.topScore}</p>
                    </div>
            </div>
        </div>
    );
    
}

export default Navbar;