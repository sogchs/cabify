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
    <div className="container">
    <div className="header">
      <img className="logo" src="https://cdn2.ticbeat.com/src/uploads/2017/06/logo-Cabify-2017-horizontal-810x506.png?x32709" alt="logo-cabify"/>
    </div>
    
      <div className="row">
      
        <div className="col-6">
        <h2 className="mb-3">Product list</h2>
        {products.map((product, index) => 
        <ProductBox key={index} product={product} onAddToTotal={this.onAddToTotal}/>
        )}
        </div>
        <div className="col-6">
        <Total products={this.state.total}/>
        </div>
      </div>
      <div className="signature">
        <p className="text-purple">Test by Sergio Ortega Gil</p>
      </div>
      
    </div>
  );
  }
}

export default App;
