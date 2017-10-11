import React, { Component } from 'react';

// export default function User(props){
//     const {name, age, avatar} = props.data;
//     return(
//         <tr>
//             <td>{name}</td>
//             <td>{age}</td>
//             <td>{avatar}</td>
//         </tr>
//     );
// }

export default class User extends Component{
    
 render(){
     const {name, age, avatar} = this.props.data;
     return(
        <tr>
           <td>{name}</td>
           <td>{age}</td>
           <td>{avatar}</td>
        </tr>
     )
 }
}