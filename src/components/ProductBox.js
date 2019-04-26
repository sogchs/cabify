import React, { Component } from 'react';

export default class ProductBox extends Component {
  state={
    quantity: 1
  }

  onChangeQuantity = (e) => {
    this.setState({ quantity: e.target.value })
  }

  onAddToTotal = () => {
    this.props.onAddToTotal({ ...this.props.product, quantity: this.state.quantity });
  }

  render(){

    const { img, item,  } = this.props.product;
    return(
      <div className="card">
          <img className="img-product" src={img} alt=""/>
          <div className="quantity">
            <p className="mr-2">{item}</p>
            <input className="input" type="number" min="1" value={this.state.quantity} name="quantity" onChange={this.onChangeQuantity}/>
            <button className="btn btn-outline-success" onClick={this.onAddToTotal}>+Add</button>
          </div>
        </div>
    )
  }
}