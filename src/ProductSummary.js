import React, { Component } from 'react';

export default class ProductSummary extends Component{
    render() {
        return (
            <div className="product-summary">
                <h3>{this.props.code}</h3>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}