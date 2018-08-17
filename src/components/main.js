import React, { Component } from 'react';
import gameInfo from './gameInfo'
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import RenderImgRow from './renderImgRow'
import Footer from './footer';

class DisplayCharacters extends Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            hasClicked: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        const name = e.target.name
        console.log(name)
        if(this.state.hasClicked.indexOf(name) !== -1){
            alert("You lost!");

            let scores = {
                score: 0,
                hasClicked: []
            }
            if(this.state.topScore < this.state.score){
                scores.topScore = this.state.score
            }

            this.setState(scores);
            this.showImages();
        }else{
            // console.log(e.target.name)
            this.setState((prevState)=>({
                score: prevState.score + 1,
                hasClicked: [...prevState.hasClicked, name]
            }))
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
                <RenderImgRow img={[img1,img2,img3,img4]} handleClick={this.handleClick}/>
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