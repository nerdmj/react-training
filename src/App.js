import React, { Component } from 'react';
import logo from './logo.svg';
import User from './components/user/User';
import Calci from './components/calculator/Calci';
import Progress from './components/progress/Progress';
import Cart from './components/cart/Cart'
import './styles/cart.css'

class App extends Component {
  render() {
    let userList = [
      {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
      {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
      {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
      {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
      {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
        ];

    const tableStyle = {'border' : '1px solid black'}

    return (
      <div className="App">
          
           <h2>Cart assignement (Life Cycles) </h2>
           <Cart />

           <hr />
           <h2>User Data (Destructuring assignement) </h2>
           <table style={tableStyle}>
           <tbody>
             <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Avatar</th>
             </tr>
                    {
                      userList.map(item => <User key={item.name} data={item} /> )
                    }
             </tbody>
           </table>

           <hr />    
           <h2>Calculator assignement (Components) </h2>         
           <Calci />

           <hr />    
           <h2>Progress assignement (PropTypes)</h2>     
           <Progress total={100} downloaded={34}/>
           <Progress  downloaded={34}/>
           <Progress />

      </div>
    );
  }
}

export default App;
