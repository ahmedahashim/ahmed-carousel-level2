import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Image from "./Image.js";
import Button from "./Button.js";



const imageSources = [
  "http://www.theimaginativeconservative.org/wp-content/uploads/2017/07/hope.jpg",
  "https://iphonewalls.net/wp-content/uploads/2014/09/Beautiful%20Mountains%20Sunset%20Landscape%20iPhone%205%20Wallpaper.jpg",
  "https://sean.digital/wp-content/uploads/2012/12/Descutes-Willamette-015.jpg",
  "https://photogrist.com/wp-content/uploads/2016/08/Lago-di-Braies.jpg"
];

class App extends Component {
  state = {
    image: "",
    speed: 2000
  }


  componentDidMount() {

    this.getAutoForward();

  }
  getAutoForward = () => {

    clearInterval(this.autoBackwards);

    this.autoForward = setInterval(this.getForward, this.state.speed);

  };
  getAutoBackwards = () => {

    clearInterval(this.autoForward);

    this.autoBackwards = setInterval(this.getBackwards, this.state.speed);

  };
  getForward = () => {
    this.setState(prevState => {
      return { image: prevState.image + 1 };
    });
  };
  getBackwards = () => {
    this.setState(prevState => {
      return { image: prevState.image - 1 };
    });
  };


  getStop = () => {

    clearInterval(this.autoForward);

    clearInterval(this.autoBackwards);

  };

  render() {
    const { image } = this.state;
    const btnContents = [
      {
        content: "Forward",
        onClick: this.getForward
      },
      {
        content: "Back",
        onClick: this.getBackwards
      },
      {
        content: "Auto Forward",

        onClick: this.getAutoForward

      },
      {

        content: "Auto Back",

        onClick: this.getAutoBackwards

      },

      { content: "Stop", onClick: this.getStop },

    ];
    const newImage =
      image >= 0
        ? image % imageSources.length
        : imageSources.length - 1 + (image % imageSources.length);

    return (
      <div className="xs-col-12 sm-col-10 container">
        <div >
          <Image imgSrc={imageSources[newImage]} />



        </div>
        <div className="button" >
          {btnContents.map(button => {
            return <Button content={button.content} onClick={button.onClick} />;
          })}
        </div>
      </div>
    );
  }
}




export default App;
// 