import React, { Component } from "react";
import Thumbnail from './components/Thumbnail';
import Score from './components/Score';

class App extends Component {

  state = {
    tiles: [
      '/images/portfolio_image1.jpg',
      '/images/portfolio_image2.jpg',
      '/images/portfolio_image3.jpg',
      '/images/portfolio_image4.jpg',
      '/images/portfolio_image5.jpg',
      '/images/portfolio_image6.jpg'
    ],
    score: 0,
    topScore: 0
  };

  clickedTiles = []

  shuffled = [];

  shuffleTiles = () => {
  }

  handleTileClick = (evt) => {
    console.log(evt);
    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;  //empty clickedTiles array
      this.setState({ score: 0 });
      alert('ERR: already clicked, score: ', this.state.score);
      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ? 
    newScore:
    this.state.score;

    this.clickedTiles.push(clickedTile);
    // console.log('score: ', this.state.score);

    const shuffled = this.state.tiles.sort(() => 0.5 - Math.random());
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
     });
  }


  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />


        {this.state.tiles.map((tile, idx) =>
          <Thumbnail
            src={tile} key={idx} onClick={this.handleTileClick}
          />)
        }
      </div>
    );
  }
}

export default App;
