import React, { Component } from 'react';
import gameInfo from './gameInfo'
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Footer from './footer';

class DisplayCharacters extends Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0,
            topScore: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    cardImg = {
        height: '180px',
        width: '13em'
    };

    handleClick = (e) => {
        if(e.target.isClick === "1"){
            alert("You lost!");

            let scores = {
                score: 0,
            }
            if(this.state.topScore < this.state.score){
                scores.topScore = this.state.score
            }

            this.setState(scores);
            this.showImages();
        }else{
            e.target.isClick = "1";
            this.setState((prevState, props)=>({score: prevState.score + 1}))
        }
    }

    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    showImages = () => {
        const characters = this.shuffle(gameInfo);
        let result = [];
        for( var i = 0; i< characters.length; i += 4){
            var img1 = gameInfo[i];
            var img2 = gameInfo[i+1];
            var img3 = gameInfo[i+2];
            var img4 = gameInfo[i+3];
            result.push(
                <div key={i} className="row justify-content-md-center">
                    <div key={img1.name} className="col-5 col-md-3 align-self-center" isClick="0" onClick={this.handleClick}>
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img1.img} alt={img1.name} />                            
                    </div>
                    <div key={img2.name} className="col-5 col-md-3 align-self-center" isClick="0" onClick={this.handleClick}>
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img2.img} alt={img1.name} />                            
                    </div>
                    <div key={img3.name} className="col-5 col-md-3 align-self-center" isClick="0" onClick={this.handleClick}>
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img3.img} alt={img1.name} />                            
                    </div> 
                    <div key={img4.name} className="col-5 col-md-3 align-self-center" isClick="0" onClick={this.handleClick}>
                            <img className="card-img-top img-thumbnail m-1" style={this.cardImg} src={img4.img} alt={img1.name} />                            
                    </div>            
                </div>
            )
        }
        return result;
    }

    render() {
        return (
            <div>
                <Navbar score={this.state.score} topScore ={this.state.topScore}/>
                <Jumbotron />
                <div style={{marginTop: '6em'}}>
                    <ul>
                        {this.showImages()}
                    </ul>
                </div>
                <Footer />
            </div>

        )
    }
}

export default DisplayCharacters;