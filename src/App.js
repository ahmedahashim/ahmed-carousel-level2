import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Image from "./Image.js";
import Button from "./Button.js";

const imageSources = [
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/414179/pexels-photo-414179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x"
];

class App extends Component {
  state = {
    imageIndex: 0
  };

  getAutoForward = () => {
    if (!this.autoForward) {
      this.autoForward = setInterval(this.getForward, 2000);
    }
  };
  getAutoBackwards = () => {
    if (!this.autoBackwards) {
      this.autoBackwards = setInterval(this.getBackwards, 2000);
    }
  };
  getForward = () => {
    this.setState(prevState => {
      return { imageIndex: prevState.imageIndex + 1 };
    });
  };
  getBackwards = () => {
    this.setState(prevState => {
      return { imageIndex: prevState.imageIndex - 1 };
    });
  };

  getStop = () => {
    clearInterval(this.autoBackwards);

    clearInterval(this.autoForward);
    this.autoForward = null;
    this.autoBackwards = null;
  };

  render() {
    const { imageIndex } = this.state;
    const btnContents = [
      {
        content: "Back",
        onClick: this.getBackwards
      },

      {
        content: "Forward",
        onClick: this.getForward
      },
      {
        content: "Auto Back",

        onClick: this.getAutoBackwards
      },

      {
        content: "Auto Forward",

        onClick: this.getAutoForward
      },

      { content: "Stop", onClick: this.getStop }
    ];
    const newImage =
      imageIndex >= 0
        ? imageIndex % imageSources.length
        : imageSources.length - 1 + (imageIndex % imageSources.length);

    return (
      <div className="xs-col-12 sm-col-10 container">
        <div>
          <Image imgSrc={imageSources[newImage]} />
        </div>
        <div className="button">
          {btnContents.map(function(button, index) {
            return (
              <Button
                key={index}
                content={button.content}
                onClick={button.onClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
//
