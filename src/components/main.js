import React, { Component } from 'react';
import gameInfo from './gameInfo'
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import RenderImgRow from './renderImgRow'
import Footer from './footer';

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            hasClicked: [] //save the clicked images'name in an array
        }
    }

    // handle click event
    handleClick = event => {
        const name = event.target.name
        console.log(name)
        if(this.state.hasClicked.indexOf(name) !== -1){ //if image has been clicked twice
            alert("You lost!");

            // reset state
            let scores = {
                score: 0,
                hasClicked: [],
                topScore: this.state.topScore < this.state.score ? this.state.score : this.state.topScore
            }
            this.setState(scores);

            // re-render images
            this.showImages();
        }else{ 
            this.setState( prevState => ({
                score: prevState.score + 1,
                hasClicked: [...prevState.hasClicked, name]
            }))
        }
    }

    // Shuffle the images array
    shuffle = array => {
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

    // show images for user to click
    showImages = () => {
        // shuffle the image array first
        const characters = this.shuffle(gameInfo);
        let result = [];
        for( var i = 0; i< characters.length; i += 4){
            var img1 = gameInfo[i];
            var img2 = gameInfo[i+1];
            var img3 = gameInfo[i+2];
            var img4 = gameInfo[i+3];
            result.push(
                <RenderImgRow key={i} index={i} img={[img1,img2,img3,img4]} handleClick={this.handleClick}/>
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

export default Main;