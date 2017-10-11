import React, { Component } from 'react';

export default class Calci extends Component {

  constructor(){
      super();
      this.state = {
          'fv' : 0,
          'sv' : 0,
          'result': 0
      }
  }

  firstInputChanged(e){
      this.setState({fv : e.target.value});
  }

  secondInputChanged(e){
    this.setState({sv : e.target.value});
}


  addition(e){
      let {fv, sv} = this.state;
      let total = parseInt(fv) + parseInt(sv) ;
      this.setState({result: total});
  }

  division(e){
    let {fv, sv} = this.state;
    let total = parseInt(fv) / parseInt(sv) ;
    this.setState({result: total});
}

subst(e){
    let {fv, sv} = this.state;
    let total = parseInt(fv) - parseInt(sv) ;
    this.setState({result: total});
}

multi(e){
    let {fv, sv} = this.state;
    let total = parseInt(fv) * parseInt(sv) ;
    this.setState({result: total});
}

  clearAll(e){
      this.setState({fv:0, sv:0, result:0});
  }




   render(){
       return(
          <div>
              <input
                 type="text"
                 value={this.state.fv}
                 onChange = {(e) => this.firstInputChanged(e)}
               />
               <br />


               <input
                 type="text"
                 value={this.state.sv}
                 onChange = {(e) => this.secondInputChanged(e)}
               />
               <br/>


               <hr />
               <span>Result: {this.state.result}</span>
               <br/>




               <input type="button" value="+" onClick={(e)=>this.addition(e)}/>
               <input type="button" value="-" onClick={(e)=>this.subst(e)}/>
               <input type="button" value="X" onClick={(e)=>this.multi(e)} />
               <input type="button" value="%" onClick={(e)=>this.division(e)} />
               <input type="button" value="clear" onClick={(e)=>this.clearAll(e)} />
          </div>
       );
   }


}