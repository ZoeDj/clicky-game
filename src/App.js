import React from "react";
import GameImage from "./Components/GameImage/GameImage";
import Wrapper from "./Components/Wrapper/Wrapper";
import images from "./images.json";
import "./App.css";

class App extends React.Component {
  state = {
    images,
    clickedImages: [],
    score: 0,
  };

  shuffleImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let random = images[i];
      images[i] = images[j];
      images[j] = random;
    }
    return images;
  };

  clickedImage = (id) => {
    const shuffleImages = this.shuffleImages(images);
    this.setState({ images: shuffleImages });
    if (this.state.clickedImages.includes(id)) {
      this.setState({ score: 0, clickedImages: [] });
    } else {
      this.setState({
        clickedImages: this.state.clickedImages.concat([id]),
        score: this.state.score + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={{ background: "#ee5867", color: "#e1f5f3", marginBottom: "0" }}
        >
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <h5 className="lead">
              Click on an image to earn points. If you click on the image more
              than once, you'll lose and the game will start over.
            </h5>
            <h3 className="counter">Click Count: {this.state.score}</h3>
          </div>
        </div>
        <Wrapper>
          {this.state.images.map((image) => (
            <GameImage
              image={image.img}
              id={image.id}
              key={image.id}
              clickedImage={this.clickedImage}
              imageClick={this.imageClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
