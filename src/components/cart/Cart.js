import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cart extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : this.props.items,
            newItem: ''
        }
    }

    handleChange(e) {
        return this.setState({
            newItem : e.target.value
        })
    }

    addNewItem(e) {
        e.prevent.default();
        let productParts = this.state.newItem.split('-');
        const newProduct = {name: productParts[0], price: productParts[1], quantity: 1}

        return this.setState({
            newItem: '',
            items: [newProduct, ...this.state.items]
        })
    }


    render(){

        let { newItem, items } =  this.state;
        let allItems = this.state.items.map((item) => {
            return parseInt(item.price) * parseInt(item.quantity);
        })
        return(
            <div>
              <form>
                  <input type="text" value={newItem} onChange={(e) => this.handleChange(e)} placeHolder="Enter new item"/>
                  <input type="submit" value="ADD" onClick={(e) => this.addNewItem(e)} />
              </form>

              <table>
                  <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Items</th>
                        <th>Remove</th>
                    </tr>
                    {
                          items.map((item)=>{
                              return <CartItem key={item.name} data={item} />
                          })
                    }
                    <br />
                    <hr />
                    <tr>
                        <th><b>Total:</b></th>
                       <th></th>
                       <th></th>
                       <th></th>
                       <th>
                           <Total allItems={allItems}/>
                       </th>
                    </tr>  
                
                  </tbody>
              </table>    

            </div>
        )
    }
}

// Specifies the default values for props:
Cart.defaultProps = {
    items: [{name: 'Mango', price: 15, quantity: 1 }]
  };


class CartItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
           
        let {name, price, quantity } = this.props.data;

        return(
            <tr key={this.props.key} className="contact">
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><ChangeCount /></td>
                <td><a href="#" index={this.props.key}  onClick={(e) => this.removeProduct(e)}>X</a></td>
            </tr>    
        )
    }
}


class ChangeCount extends Component {
    constructor(props){
        super(props);
    }


    plusOne(e) {
        return this.setState({
             
        })
    }

    minusOne(e) {
        return this.setState({
            
       })
    }

    render(){
        return(
            <div>
                <a href="#" onClick={(e) => this.plusOne(e)} > + </a> 
                <a href="#" onClick={(e) => this.minusOne(e)} > - </a>
            </div>    
        )
    }

}


class Total extends Component {
    constructor(props){
        super(props)

    }
    

    render(){
         let {allItems} = this.props;
         const totalCost = allItems.reduce((total, num) => total + num);
        return(
              <span>{totalCost}</span>
        )
    }
}

export default Cart; 