import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import DashIcon from './dashboard.svg'
import ProjectsIcon from './projects.svg'
import ValuesIcon from './values.svg'
import '../App.css'
import Todo from './todo';

class CurrentProjects extends Component {
    render() {
        return (
            <div className='currentprojects'>
            <div className='dashmenu'>
                

                <Link className='dash-link' to='/dashboard'><img alt='dash' src={DashIcon} className='dash-icon' id='dashicon'></img> ESSE Dashboard</Link>
                <Link className='dash-link' to='/currentprojects'><img alt='projects' src={ProjectsIcon} className='dash-icon'></img>  Current Projects</Link>
                <Link className='dash-link' to='/values'><img alt='values' src={ValuesIcon} className='dash-icon'></img>  Essential Values</Link>
                <Link to='/'><button className='addvaluesbtn'>Log Out</button></Link>
            </div>

            <div className='current-current-projects'>
               
                <Todo/>



            </div>
            </div>
        )
    }
}


export default withRouter(CurrentProjects)
