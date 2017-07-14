import React, { Component } from 'react';

export default class BagButton extends Component{
    constructor(props){
        super(props);
        this.addToBag = this.addToBag.bind(this);
        this.state = {isAddedToBag: false};
    }
    addToBag(){
        this.setState(prevState => ({
            isAddedToBag: !prevState.isAddedToBag
        }));
    }
    render() {
        return (
            <button className="bag" onClick={this.addToBag} disabled={this.state.isAddedToBag}>
                {this.state.isAddedToBag ? 'Item added to bag' : this.props.text}
            </button>
        );
    }
}