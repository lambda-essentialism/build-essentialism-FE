import React from 'react'
import Value from './Value'
import { connect } from "react-redux";
import {getData} from '../actions/index'
import ValueForm from './addvalue'
import Toggle from './toggle'


class ValuesList extends React.Component {
    constructor(){
        super();

        this.state = {
            values: [],
          
           
          };
         
          
    }
    

    componentDidMount() {
   
        this.props.getData();
        
      }
      
      
      
      

    render() {
        if(this.props.fetching){

        }
        
       
      return (
     
          
          <ul><ValueForm/>
            {this.props.values.map(value => {
              return (
                <Toggle render={({on,toggle})=>(
                  <div>
                    {on && <Value title={value.title}
               
          
               key={value.id}></Value>
               }
                    <button onClick={toggle}>{value.title}</button>
                  </div>
                )}>
          </Toggle>
                
              );
            })}
          </ul>
          
       
      );
    }
  }
 
    
  
 const mapStateToProps=state=>{
  return{
    values: state.values,
  fetching:state.fetching,
  error:state.error

  }
}

  
export default connect(
    mapStateToProps ,
    {getData}
  )(ValuesList);
  