import React, { Component } from 'react';
import './App.css';
import products from './data/products'
import ProductBox from './components/ProductBox';
import Total from './components/Total';

class App extends Component {

  state = {
    total: []
  }

 
  onAddToTotal = product => {
    const totalExceptProduct = this.state.total.filter(p => p.item !== product.item);

    this.setState({
      total: [...totalExceptProduct, product]
    });
  }

  render(){
    
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
        <h2 className="mb-3">Listado de productos</h2>
        {products.map((product, index) => 
        <ProductBox key={index} product={product} onAddToTotal={this.onAddToTotal}/>
        )}
        </div>
        <div className="col-6">
        <Total products={this.state.total}/>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
