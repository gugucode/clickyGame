import React, { Component } from 'react';
import gameInfo from './gameInfo'

class DisplayCharacters extends Component {
    cardImg = {
        height: '180px',
        width: '13em'
    };

    showImages = () => {
        let result = [];
        for( var i = 0; i< gameInfo.length; i += 4){
            var img1 = gameInfo[i];
            var img2 = gameInfo[i+1];
            var img3 = gameInfo[i+2];
            var img4 = gameInfo[i+3];
            result.push(
                <div key={i} className="row justify-content-md-center">
                    <div key={img1.name} className="col-5 col-md-3 align-self-center">
                        {/* <div key={img1.name} className="card"> */}
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img1.img} alt="Kitty" />                            
                        {/* </div> */}
                    </div>
                    <div key={img2.name} className="col-5 col-md-3 align-self-center">
                        {/* <div key={img2.name} className="card"> */}
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img2.img} alt="Kitty" />                            
                        {/* </div> */}
                    </div>
                    <div key={img3.name} className="col-5 col-md-3 align-self-center">
                        {/* <div key={img3.name} className="card"> */}
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img3.img} alt="Kitty" />                            
                        {/* </div> */}
                    </div> 
                    <div key={img4.name} className="col-5 col-md-3 align-self-center">
                        {/* <div key={img3.name} className="card"> */}
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img4.img} alt="Kitty" />                            
                        {/* </div> */}
                    </div>            
                </div>
            )
        }
        return result;
    }

    render() {
        return (
            <div style={{marginTop: '6em'}}>
                <ul>
                    {this.showImages()}
                </ul>
            </div>

        )
    }
}

export default DisplayCharacters;