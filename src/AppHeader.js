import React, { Component } from 'react';

export default class AppHeader extends Component {
  constructor(props){
        super(props);
        this.state = {isHomeButtonClicked : this.props.isHomeButtonClicked}
        this.goToHomePage = this.goToHomePage.bind(this);
  }
  goToHomePage(){
    this.setState(prevState => ({
      isHomeButtonClicked: !prevState.isHomeButtonClicked
    }));
  }
  render() {
    return (
        <div className="App-header">
          <a href={this.goToHomePage}>
            <img src={require("./images/home.png")} className="home-icon" alt="home"/>
          </a>
          Welcome to Lingerie Website
          <a href="#">
            <img src={require("./images/shopping-bag.ico")} className="shopping-bag" alt="shopping-bag"/>
          </a>
        </div>
    );
  }
}