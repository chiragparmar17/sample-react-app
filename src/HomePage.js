import React, { Component } from 'react';
import Product from './Product';
import productData from './data';
import ShoppingBag from './ShoppingBag';
import AppHeader from './AppHeader'

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {productData: productData.Products, isHomeButtonClicked : this.props.isHomeButtonClicked}
    }
    render() {
        return (
        <div className="App">
            <AppHeader isHomeButtonClicked={this.state.isHomeButtonClicked}/>
            <p className="App-intro">
                    {
                    this.state.productData.map(function(product){
                        return (
                            <Product imageSrc={require("./images/product.jpg")} code={product.code} title={product.title}/>
                        );
                    })
                    }
            </p>
        </div>
        );
    }
}