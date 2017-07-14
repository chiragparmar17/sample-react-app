import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import ShoppingBag from './ShoppingBag';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {isHomeButtonClicked : true}
    }
  render() {
    if(this.state.isHomeButtonClicked){
      return (
        <div className="App">
          <HomePage isHomeButtonClicked={this.state.isHomeButtonClicked}/>
        </div>
      );
    }else{
      return (
        <div className="App">
          <ShoppingBag isHomeButtonClicked={this.state.isHomeButtonClicked}/>
        </div>
      );
    }
  }
}

export default App;
