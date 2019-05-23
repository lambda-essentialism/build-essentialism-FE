import React from 'react'
import Value from './Value'
import { connect } from "react-redux";
import {getData} from '../actions/index'
import ValueForm from './addvalue'
import Toggle from './toggle'
import Todo from './todo';
import {Link} from 'react-router-dom'
import DashIcon from './dashboard.svg'
import ProjectsIcon from './projects.svg'
import ValuesIcon from './values.svg'


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
     
      <div><ValueForm/>
      <div className='dashmenu'>

<Link className='dash-link' to='/dashboard'><img alt='dash' src={DashIcon} className='dash-icon' id='dashicon'></img> ESSE Dashboard</Link>
<Link className='dash-link' to='/currentprojects'><img alt='projects' src={ProjectsIcon} className='dash-icon'></img>  Current Projects</Link>
<Link className='dash-link' to='/values'><img alt='values' src={ValuesIcon} className='dash-icon'></img>  Essential Values</Link>


</div> 
          <div className='essentialapp'>
            {this.props.values.map(value => {
              return (
              <Toggle render={({on,toggle})=>(
                  <div>
                    {on && <h1><Value /*title={value.title}*/ key={value.valueid}></Value><Todo/></h1>
               }
                    <button className='value-btn' onClick={toggle}>{value.title}</button>
                  </div>
                )}>
          </Toggle>    
         
                
              );
            })}</div> 
</div>          
       
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
  