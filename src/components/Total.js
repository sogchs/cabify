import React, { Component} from 'react';



class Total extends Component {
  state ={
    totalBasket: 0
  }
  productFinalPrice = []
  

  calculateTotal = (p) => {
    
    if(p.discountType === "axb"){
      if (p.quantity % p.a === 0) {
        //de esta forma valdrá para 2x1 o 3x1 o más ejemplos
        return (p.price * p.quantity) / p.a
    } else {
        return p.price * p.quantity
    }
    } else if(p.discountType === "amount"){
        if (p.quantity >= p.amountNumber) {
          return p.amountPrice * p.quantity
        } else{
          return p.price * p.quantity
        }
    } else {
      return p.price * p.quantity
    }
    
  }


  componentDidUpdate(){
    const totalBasket = this.productFinalPrice.map(v => parseFloat(v.innerText)).reduce((a,b) => a + b, 0);
    console.log(totalBasket.valueOf())
    //para que no falle el setstate por "Maximum update depth exceeded"
    if (this.state.totalBasket !== totalBasket ) {
      this.setState({ totalBasket: totalBasket });
    }
    
  }


render(){
  
  const productsList = this.props.products.map((product, index) => 
    <tr key={index}>
      <td scope="row">{product.item}</td>
      <td>{product.quantity}</td>
      <td>{product.price} €</td>
      <td ref={productFinalPrice => this.productFinalPrice[index] = productFinalPrice}>{this.calculateTotal(product)}</td>
    </tr>
    )

  
  

  return (
    <div className="FoodMenu">
      <h2>Shopping basket</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Units</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {productsList}
        </tbody>
      </table>
      <h3>Total basket: {this.state.totalBasket} € </h3>
    </div>
  )
}
};

export default Total; 