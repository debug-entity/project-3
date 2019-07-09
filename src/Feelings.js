import React, {Component} from 'react'
import './Feelings.css';

class Feelings extends Component{

    render(){
       
       
        return(
           
            // the result of input
           this.props.score ? 
            <div className="card">                       
            <div className="card-body">
            <h3>{this.props.score}</h3>
            <p>{Date()}</p> 
             </div>
          </div> 
            : "" 
     
                )



    }
   
}

export default Feelings;