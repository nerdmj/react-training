import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Progress extends Component {

 
    
    render(){
        const { total, downloaded }  = this.props;
        const progressed = (downloaded/total)*100;
        console.log(progressed);
        return(
             <div>
                 <span>Percentage downloaded is: { progressed }</span>
             </div>
        )
    }

}

Progress.PropTypes = {
    total: PropTypes.number.isRequired,
    downloaded: PropTypes.number.isRequired,
}

export default Progress;