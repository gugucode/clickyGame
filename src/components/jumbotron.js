import React from 'react';

const Jumbotron = props => {
    // CSS style
    const jumbotronStyle = {
        backgroundImage: "url('images/jumbotron.png')",
        height: '18em',
        marginTop : '5em'
    };

    const jumbotronContainer = {
        marginTop: '4em',
        color : 'teal',
        fontFamily: "'Do Hyeon', 'sans-serif'",
    }

    
    return (
        <div className="jumbotron jumbotron-fluid pb-0 pt-3" style={jumbotronStyle}>
            <div className="container pb-0" style={jumbotronContainer}>
                <h1 className="display-4 text-center">Clicky Game!</h1>
                <p className="lead text-center">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
    
}

export default Jumbotron;