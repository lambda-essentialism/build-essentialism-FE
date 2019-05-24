import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import '../App.css'
import DashIcon from './dashboard.svg'
import ProjectsIcon from './projects.svg'
import ValuesIcon from './values.svg'
import Value from './Value';
//import Login from './login2'
import {getData} from '../actions/index'
import {connect} from 'react-redux'
import ValueForm from './addvalue'


class Dashboard extends Component{
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

           <Route><div className='dashboard'>

                 <h1 className='dashboardheader'>Dashboard</h1>

                 <div className='dashmenu'>

                     <Link className='dash-link' to='/dashboard'><img alt='dash' src={DashIcon} className='dash-icon' id='dashicon'></img> ESSE Dashboard</Link>
                     <Link className='dash-link' to='/currentprojects'><img alt='projects' src={ProjectsIcon} className='dash-icon'></img>  Current Projects</Link>
                     <Link className='dash-link' to='/values'><img alt='values' src={ValuesIcon} className='dash-icon'></img>  Essential Values</Link>
                    <Link to='/'><button className='addvaluesbtn'>Log Out</button></Link>

                 </div>

                 <div className='topvalues'>

                     <h1 className='topvaluesheader'>Top 3 Values</h1>

                <div className='topvaluecontainer'>

                     <div className='topvalue'>Value 1</div>
                     <div className='topvalue'>Value 2</div>
                     <div className='topvalue'>Value 3</div>

                     </div>
                     

                     <div className='lower-container'>
                     <div className='other-values'>   <h1><img className='dash-icon' alt='' src={ValuesIcon}></img>  Other Values</h1>             
                {this.props.values.map(value => {
                return (
                    <Value 
                    title={value.title}
                    id={value.valueid}
                    key={value.id}
                    
                />
              );
            })}</div><ValueForm/>

            <div className='dash-current-projects'>
                <h1><img className='dash-icon' alt='' src={ProjectsIcon}></img>  Current Projects</h1>



            </div>
          
                     </div>


                 </div>

            


            </div></Route>
        )
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
  )(Dashboard);
  
