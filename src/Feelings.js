import React, {Component} from 'react'






class Feelings extends Component{



    render(){
        const date = (
           this.props.score ? <p>{Date()}</p>  : ""

        )
        return(
            <div>
                 <h3>{this.props.score}</h3>
                 {date}
            </div>
                )



    }
   
}


export default Feelings
 