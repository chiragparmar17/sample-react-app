import React, { Component } from 'react';
import ProductSummary from './ProductSummary';
import BagButton from './BagButton';

export default class Product extends Component{
    render() {
        return (
            <div className="product">
                <div className="image-container">
                    <img className="product-image" src={this.props.imageSrc}/>
                </div>
                <ProductSummary code={this.props.code} title={this.props.title}/>
                <BagButton text="Add To Bag"/>
            </div>
        )
    }
}